import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Button } from 'react-native';

// ========== ใบงาน ข้อ 7: Lazy Initial State ==========
function expensiveInit() {
  console.log('คำนวณค่าเริ่มต้น... ควรเห็นครั้งเดียว');
  let sum = 0;
  for (let i = 0; i < 1000000; i++) sum += i;
  return sum;
}

export default function Ex7LazyInit({navigation}) {
  // ===== STATE =====
  // (1) ส่ง "ฟังก์ชัน" เข้าไป ไม่ใช่ "ผลลัพธ์ของฟังก์ชัน"
  //     useState(expensiveInit())   -> เรียกทุกครั้งที่ render (ผิด)
  //     useState(() => expensiveInit()) -> เรียกครั้งเดียวตอน mount (ถูก)
  const [total] = useState(() => expensiveInit());

  // (2) state ตัวเลข ไว้บังคับ re-render
  const [renders, setRenders] = useState(0);

  return (
    <View style={s.container}>
      <Text style={s.label}>ผลรวม 0..999999</Text>

      {/* (3) แสดงค่า total */}
      <Text style={s.value}>{total.toLocaleString()}</Text>

      {/* (4) แสดงค่า renders */}
      <Text style={s.renderLabel}>จำนวนครั้งที่ re-render: {renders}</Text>

      {/* (5) functional update */}
      <TouchableOpacity style={s.btn} onPress={() => setRenders((prev) => prev + 1)}>
        <Text style={s.btnText}>บังคับ re-render</Text>
      </TouchableOpacity>

      <View style={s.note}>
        <Text style={s.noteText}>
          เปิด Console จะเห็น "คำนวณค่าเริ่มต้น" แค่ครั้งเดียว แม้กด re-render กี่ครั้ง
        </Text>
      </View>
      <Button title="Go to Ex8" onPress={() => navigation.navigate("Ex8")} />
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', gap: 8 },
  label: { color: '#8b949e', fontSize: 15, marginTop: 10 },
  value: { color: '#61dafb', fontSize: 40, fontWeight: '800', marginVertical: 6 },
  renderLabel: { color: '#c9d1d9', fontSize: 16, marginTop: 14 },
  btn: {
    backgroundColor: '#21262d',
    borderWidth: 1,
    borderColor: '#30363d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 6,
  },
  btnText: { color: '#c9d1d9', fontSize: 16, fontWeight: '600' },
  note: {
    marginTop: 16,
    backgroundColor: '#161b22',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  noteText: { color: '#8b949e', fontSize: 14, lineHeight: 21 },
});