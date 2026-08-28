import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { listExpenses, totalExpense, addExpense, deleteExpense } from './db';

const C = {
  bg: '#0D1117',
  card: '#161B22',
  border: '#30363D',
  text: '#E6EDF3',
  dim: '#8B949E',
  cyan: '#61DAFB',
  red: '#F85149',
};

const TOP = Platform.select({
  ios: 56,
  android: (StatusBar.currentHeight ?? 24) + 10,
  default: 24,
});

export default function ExpenseScreen() {
  // useSQLiteContext คืนฐานข้อมูลที่ SQLiteProvider เปิดไว้ให้แล้ว
  const db = useSQLiteContext();

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  // อ่านข้อมูลใหม่ทั้งหมด เรียกทุกครั้งหลังเพิ่มหรือลบ
  // เพราะ SQLite ไม่ได้แจ้ง React ว่ามีอะไรเปลี่ยน เราต้องสั่งอ่านเอง
  async function reload() {
    setItems(await listExpenses(db));
    setTotal(await totalExpense(db));
  }

  useEffect(() => {
    reload();
  }, []);

  async function handleAdd() {
    const money = Number(amount);

    if (title.trim() === '' || !Number.isInteger(money) || money <= 0) {
      Alert.alert('กรอกไม่ครบ', 'ใส่รายการ และจำนวนเงินเป็นจำนวนเต็มมากกว่า 0');
      return;
    }

    await addExpense(db, title.trim(), money);
    setTitle('');
    setAmount('');
    await reload();
  }

  function handleDelete(item) {
    Alert.alert('ลบรายการ', `${item.title} ${item.amount} บาท`, [
      { text: 'ยกเลิก', style: 'cancel' },
      {
        text: 'ลบ',
        style: 'destructive',
        onPress: async () => {
          await deleteExpense(db, item.id);
          await reload();
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>บันทึกรายจ่าย</Text>
      <Text style={styles.total}>รวม {total} บาท</Text>

      <View style={styles.form}>
        <TextInput
          style={[styles.input, { flex: 2 }]}
          value={title}
          onChangeText={setTitle}
          placeholder="รายการ"
          placeholderTextColor={C.dim}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={amount}
          onChangeText={setAmount}
          placeholder="บาท"
          placeholderTextColor={C.dim}
          keyboardType="number-pad"
        />
        <Pressable style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addText}>เพิ่ม</Text>
        </Pressable>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Pressable style={styles.row} onLongPress={() => handleDelete(item)}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={styles.rowDate}>{item.spent_at}</Text>
            </View>
            <Text style={styles.rowAmount}>{item.amount} บาท</Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>ยังไม่มีรายการ ลองเพิ่มดูสิ</Text>
        }
        keyboardShouldPersistTaps="handled"
      />

      <Text style={styles.hint}>แตะค้างที่รายการเพื่อลบ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.bg,
    paddingTop: TOP,
    paddingHorizontal: 20,
  },
  heading: { color: C.text, fontSize: 26, fontWeight: '800' },
  total: { color: C.cyan, fontSize: 18, fontWeight: '700', marginTop: 4 },
  form: { flexDirection: 'row', gap: 8, marginTop: 16, marginBottom: 14 },
  input: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 11,
    color: C.text,
    fontSize: 15,
  },
  addButton: {
    backgroundColor: C.cyan,
    borderRadius: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  addText: { color: C.bg, fontSize: 15, fontWeight: '700' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
  },
  rowTitle: { color: C.text, fontSize: 16 },
  rowDate: { color: C.dim, fontSize: 12, marginTop: 2 },
  rowAmount: { color: C.text, fontSize: 16, fontWeight: '700' },
  empty: { color: C.dim, textAlign: 'center', marginTop: 40, fontSize: 15 },
  hint: {
    color: C.dim,
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
