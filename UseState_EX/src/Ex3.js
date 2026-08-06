import { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";

// ========== ใบงาน ข้อ 3: Toggle (boolean) ==========
export default function Ex3Toggle({ navigation }) {
  // ===== STATE =====
  // (1) state ชื่อ isDark คุมโหมดมืด ค่าเริ่มต้น true
  const [isDark, setIsDark] = useState(true);

  // (2) state ชื่อ showSecret คุมการซ่อน/แสดงคำตอบ ค่าเริ่มต้น false
  const [showSecret, setShowSecret] = useState(false);

  // (3) ตัวแปรช่วย bg
  const bg = isDark ? "#0d1117" : "#ffffff";
  // (4) ตัวแปรช่วย fg
  const fg = isDark ? "#c9d1d9" : "#111111";

  return (
    <ScrollView contentContainerStyle={[s.container, { backgroundColor: bg }]}>
      <View style={s.row}>
        <Text style={[s.text, { color: fg }]}>โหมดมืด (Dark Mode)</Text>
        {/* (5) Switch: ผูก value กับ isDark และสลับค่าเมื่อเปลี่ยน */}
        <Switch value={isDark} onValueChange={(val) => setIsDark(val)} />
      </View>

      {/* (6) กดปุ่มแล้วสลับค่า showSecret จริง <-> เท็จ */}
      <TouchableOpacity
        style={s.btn}
        onPress={() => setShowSecret(!showSecret)}
      >
        <Text style={s.btnText}>{showSecret ? "ซ่อนคำตอบ" : "แสดงคำตอบ"}</Text>
      </TouchableOpacity>

      {/* (7) แสดง Text เฉพาะเมื่อ showSecret เป็นจริง ใช้ && */}
      {showSecret && (
        <Text style={[s.secret, { color: fg }]}>คำตอบของทุกสรรพสิ่งคือ 42</Text>
      )}

      <Button title="Go to Ex4" onPress={() => navigation.navigate("Ex4")} />
    </ScrollView>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { padding: 20, gap: 18, flexGrow: 1 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: { fontSize: 16 },
  btn: {
    backgroundColor: "#238636",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "#ffffff", fontSize: 16, fontWeight: "600" },
  secret: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 4,
  },
});
