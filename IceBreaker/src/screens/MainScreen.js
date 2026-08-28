import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { QUESTIONS } from "../data";
import { colors } from "../theme";
import HistoryItem from "../components/HistoryITem";

// ========== หน้าหลัก (ต้องทำ) ==========
export default function MainScreen() {
  // TODO 1: สร้าง state — current (คำถามที่แสดงตอนนี้) และ history (array คำถามที่สุ่มมาแล้ว)
  const [current, setCurrent] = useState('');
  const [history, setHistory] = useState('');

  // TODO 2: ฟังก์ชัน pickRandom()
  //   - สุ่ม 1 คำถามจาก QUESTIONS
  //   - setCurrent เป็นคำถามนั้น และเพิ่มลง history (สร้าง array ใหม่เสมอ)
  const pickRandom = () => {
    const q = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    setCurrent(q);
    setHistory((prev) => [q, ...prev]);
  };

  // TODO 3: useEffect ที่มี [] — ตอนเข้าหน้าให้สุ่มคำถามแรกอัตโนมัติ (ทำครั้งเดียว)
  useEffect(() => {
    pickRandom();
  }, []);

  return (
    <View style={styles.container}>
      {/* TODO 4: แสดง current เป็นข้อความใหญ่ตรงกลาง */}
      <View style={styles.container}>
        <View style={styles.Card}>
          <Text style={styles.Questions}>{current}</Text>
        </View>
        {/* TODO 5: ปุ่ม "สุ่มใหม่" กดแล้วเรียก pickRandom */}
        <TouchableOpacity style={styles.btn} onPress={pickRandom}>
          <Text style={styles.Textbtn}>Random</Text>
        </TouchableOpacity>
      </View>
      {/* TODO 6: FlatList แสดง history โดยใช้ component HistoryItem ที่สร้างเอง */}
      <FlatList
        style={{ width: "100%" }}
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <HistoryItem text={item} number={history.length - index} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16 },
  placeholder: {
    color: colors.muted,
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
  // TODO: เพิ่ม style ของ current / ปุ่ม / list ตามต้องการ
  btn: {
    backgroundColor: colors.green,
    borderColor: colors.border,
    borderRadius: 5,
    borderWidth: 2,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  Textbtn: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
  },
  Questions: {
    color: colors.purple,
    fontSize: 18,
    fontWeight: "600",
    padding: 2,
  },
  Card: {
    borderRadius: 14,
    borderWidth: 2,
    backgroundColor: colors.border,
    padding: 16,
    gap: 6,
  },
  Text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffff",
  },
});
