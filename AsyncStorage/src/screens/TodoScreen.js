import { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { TOP_INSET, BOTTOM_INSET } from '../constants/layout';
import { storage } from '../utils/storage';
import { KEYS } from '../constants/keys';
import { usePersistedState } from '../hooks/usePersistedState';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import FilterBar from '../components/FilterBar';

export default function TodoScreen() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // สำคัญมาก อธิบายด้านล่าง

  // (1) โหลดข้อมูลเดิมครั้งเดียวตอนเปิดแอป
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const saved = await storage.get(KEYS.ITEMS, []);
      if (!cancelled) {
        setTodos(saved);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    }; // กัน setState หลัง unmount
  }, []);

  // (2) บันทึกทุกครั้งที่รายการเปลี่ยน แต่ต้องรอให้โหลดเสร็จก่อน
  useEffect(() => {
    if (!loading) storage.set(KEYS.ITEMS, todos);
  }, [todos, loading]);

  // ตัวกรองที่แอปจำได้เอง (ใช้ custom hook แยกจาก todos)
  const [filter, setFilter] = usePersistedState(KEYS.FILTER, 'all');

  const visible = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.done);
    if (filter === 'done') return todos.filter((t) => t.done);
    return todos;
  }, [todos, filter]);

  const addTodo = (text) => {
    setTodos((prev) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        text,
        done: false,
        createdAt: Date.now(),
      },
      ...prev,
    ]);
  };

  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const clearCompleted = () => {
    const count = todos.filter((t) => t.done).length;
    if (count === 0) return;
    Alert.alert('ลบงานที่เสร็จแล้ว', `จะลบทั้งหมด ${count} รายการ`, [
      { text: 'ยกเลิก', style: 'cancel' },
      {
        text: 'ลบ',
        style: 'destructive',
        onPress: () => setTodos((prev) => prev.filter((t) => !t.done)),
      },
    ]);
  };

  const clearEverything = () => {
    Alert.alert('ล้างข้อมูลทั้งหมด', 'ข้อมูลในเครื่องจะถูกลบและกู้คืนไม่ได้', [
      { text: 'ยกเลิก', style: 'cancel' },
      {
        text: 'ล้าง',
        style: 'destructive',
        onPress: async () => {
          const n = await storage.clearAppData();
          setTodos([]);
          Alert.alert('เสร็จแล้ว', `ลบไป ${n} คีย์`);
        },
      },
    ]);
  };

  const showStoredKeys = async () => {
    const pairs = await storage.debugDump();
    const body = pairs.length
      ? pairs.map(([k, v]) => `${k}\n  ${String(v).slice(0, 60)}`).join('\n\n')
      : 'ยังไม่มีข้อมูลในเครื่อง';
    Alert.alert('ข้อมูลใน AsyncStorage', body);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={COLORS.cyan} />
        <Text style={styles.loadingText}>กำลังอ่านข้อมูลจากเครื่อง...</Text>
      </View>
    );
  }

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.title}>สิ่งที่ต้องทำ</Text>
        <Text style={styles.subtitle}>
          {todos.length === 0
            ? 'ยังไม่มีรายการ'
            : `เหลืออีก ${remaining} จาก ${todos.length} รายการ`}
        </Text>
      </View>

      <View style={styles.body}>
        <TodoInput onAdd={addTodo} />
        <FilterBar value={filter} onChange={setFilter} />
        <FlatList
          data={visible}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem item={item} onToggle={toggleTodo} onDelete={deleteTodo} />
          )}
          ListEmptyComponent={
            <Text style={styles.empty}>
              {filter === 'all' ? 'ลองเพิ่มรายการแรกดูสิ' : 'ไม่มีรายการในหมวดนี้'}
            </Text>
          }
          keyboardShouldPersistTaps="handled"
        />
      </View>

      <View style={styles.footer}>
        <Pressable onPress={clearCompleted} style={styles.linkButton}>
          <Text style={[styles.linkText, { color: COLORS.amber }]}>
            ลบที่เสร็จแล้ว
          </Text>
        </Pressable>
        <Pressable onPress={showStoredKeys} style={styles.linkButton}>
          <Text style={[styles.linkText, { color: COLORS.violet }]}>
            ดูข้อมูลที่เก็บ
          </Text>
        </Pressable>
        <Pressable onPress={clearEverything} style={styles.linkButton}>
          <Text style={[styles.linkText, { color: COLORS.red }]}>
            ล้างทั้งหมด
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  center: { alignItems: 'center', justifyContent: 'center', gap: 12 },
  loadingText: { color: COLORS.textDim, fontSize: 14 },
  header: {
    paddingTop: TOP_INSET,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  title: { color: COLORS.text, fontSize: 28, fontWeight: '800' },
  subtitle: { color: COLORS.textDim, fontSize: 14, marginTop: 4 },
  body: { flex: 1, paddingHorizontal: 20 },
  empty: {
    color: COLORS.textDim,
    textAlign: 'center',
    marginTop: 40,
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
    paddingBottom: BOTTOM_INSET,
    paddingHorizontal: 12,
  },
  linkButton: { paddingVertical: 4, paddingHorizontal: 8 },
  linkText: { fontSize: 14, fontWeight: '600' },
});
