import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Modal,
  ActivityIndicator,
  Pressable,
  TextInput,
  SafeAreaView,
} from 'react-native';

const heroes = [
  { id: '1', name: 'Dr.Strange',
    img: 'https://wallpapers.com/images/hd/superior-sorcerer-doctor-strange-looking-fierce-s58fpda55tg76g9t.jpg' },
  { id: '2', name: 'Loki',
    img: 'https://images3.alphacoders.com/134/1341704.jpeg' },
  { id: '3', name: 'Black Panther',
    img: 'https://tse3.mm.bing.net/th/id/OIP.dkiqr2rQJlbfDIa95KgQcgHaKg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '4', name: 'She Hulk',
    img: 'https://tse2.mm.bing.net/th/id/OIP.SUD67hFg9c0e5ApDZKXdhwHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '5', name: 'Miles-Morales',
    img: 'https://tse2.mm.bing.net/th/id/OIP.I4Nsu5o_OgAH_pVXi7Z9DgHaKa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [sel, setSel] = useState(null);
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return heroes;
    return heroes.filter((h) => h.name.toLowerCase().includes(q));
  }, [query]);

  const open = (hero) => {
    setSel(hero);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar style="light" />

      <TextInput
        style={s.search}
        placeholder="ค้นหารายชื่อ..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtered}
        keyExtractor={(it) => it.id}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={s.empty}>ไม่พบรายชื่อที่ค้นหา</Text>
        }
        renderItem={({ item }) => (
          <Pressable onPress={() => open(item)}>
            <View style={s.row}>
              <Image source={{ uri: item.img }} style={s.avatar} />
              <Text style={s.name}>{item.name}</Text>
            </View>
          </Pressable>
        )}
      />

      <Modal
        visible={!!sel}
        animationType="slide"
        transparent
        onRequestClose={() => setSel(null)}
      >
        <View style={s.overlay}>
          <View style={s.card}>
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <>
                <Image source={{ uri: sel?.img }} style={s.modalImg} />
                <Text style={s.modalName}>{sel?.name}</Text>
              </>
            )}
            <Pressable style={s.closeBtn} onPress={() => setSel(null)}>
              <Text style={s.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  search: {
    margin: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#161b22',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#30363d',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#30363d',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: { fontSize: 18, color: '#fff' },
  empty: {
    color: '#888',
    textAlign: 'center',
    marginTop: 40,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  card: {
    width: '80%',
    backgroundColor: '#161b22',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  modalImg: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 12,
  },
  modalName: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 16,
  },
  closeBtn: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f0a500',
  },
  closeText: {
    color: '#000',
    fontWeight: '600',
  },
});