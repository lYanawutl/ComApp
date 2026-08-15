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
import HistoryItem from "../components/HistoryItem";

// ========== หน้าหลัก (ต้องทำ) ==========
export default function MainScreen() {
  // TODO 1: สร้าง state — current (คำถามที่แสดงตอนนี้) และ history (array คำถามที่สุ่มมาแล้ว)
  const [current, setCurrent] = useState(""); // คำถามที่แสดงอยู่ตอนนี้
  const [history, setHistory] = useState([]);

  // TODO 2: ฟังก์ชัน pickRandom()
  //   - สุ่ม 1 คำถามจาก QUESTIONS
  //   - setCurrent เป็นคำถามนั้น และเพิ่มลง history (สร้าง array ใหม่เสมอ)
  const pickRandom = () => {
    const q = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    setCurrent(q);
    setHistory((prev) => [q, ...prev]);
  };
  const clearHistory = () => setHistory([]);

  // TODO 3: useEffect ที่มี [] — ตอนเข้าหน้าให้สุ่มคำถามแรกอัตโนมัติ (ทำครั้งเดียว)
  useEffect(() => {
    pickRandom();
  }, []);

  return (
    <View style={styles.container}>
      {/* TODO 4: แสดง current เป็นข้อความใหญ่ตรงกลาง */}
      <View style={styles.card}>
        <Text style={styles.question}>{current}</Text>
      </View>
      {/* TODO 5: ปุ่ม "สุ่มใหม่" กดแล้วเรียก pickRandom */}
      <View style={styles.count}>
        <Text style={styles.counter}>สุ่มมาแล้ว {history.length} ครั้ง</Text>
        <TouchableOpacity onPress={clearHistory}>
          <Text style={styles.clearText}>ล้างประวัติ</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={pickRandom}>
          <Text style={styles.btnText}>Random</Text>
        </TouchableOpacity>
      </View>

      {/* TODO 6: FlatList แสดง history โดยใช้ component HistoryItem ที่สร้างเอง */}
      <FlatList
        style={styles.list}
        data={history}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => (
          <HistoryItem text={item} number={history.length - index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: colors.bg },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingVertical: 28,
    paddingHorizontal: 20,
    marginBottom: 16,
    borderColor: colors.green,
    borderWidth: 2,
  },
  label: {
    fontSize: 13,
    color: colors.muted,
    textAlign: "center",
    marginBottom: 10,
  },
  question: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    textAlign: "center",
    lineHeight: 34,
  },
  btn: {
    backgroundColor: colors.cyan,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  btnText: { color: "#ffffff", fontSize: 17, fontWeight: "700" },
  counter: { fontSize: 14, color: "#ffff" },
  clearText: { fontSize: 14, color: "#d14343", fontWeight: "600" },
  list: { flex: 1 },
  listContent: { paddingBottom: 24 },
  count: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 8,
  },
});
