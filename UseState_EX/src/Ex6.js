import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

// ========== ใบงาน ข้อ 6: Functional Update ==========
export default function Ex6TripleCount({ navigation }) {
  // ===== STATE เติมเอง() =====
  // (1) ประกาศ state ชื่อ count ชนิดตัวเลข เริ่มต้น 0
  const [state, setState] = useState(0);
  // (2) addThreeWrong: เรียก setCount(count + 1) สามครั้ง จะได้( +1 เพราะ count เป็นค่าเก่า)
  const addThreeWrong = () => {
    setState(state + 1);
    setState(state + 1);
    setState(state + 1);
  };

  // (3) addThreeRight: เรียก setCount(prev => prev + 1) สามครั้ง จะได้( +3)
  const addThreeRight = () => {
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
  };

  return (
    <View style={s.container}>
      <Text style={s.number}>{state}</Text>
      <TouchableOpacity style={[s.btn, s.wrong]} onPress={addThreeWrong}>
        <Text style={s.btnText}>+3 แบบผิด( − ได้แค่ +1)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[s.btn, s.right]} onPress={addThreeRight}>
        <Text style={s.btnText}>+3 แบบถูก( − prev =&gt; prev + 1)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[s.btn, s.reset]} onPress={() => setState(0)}>
        <Text style={s.btnText}>รีเซ็ต (0)</Text>
      </TouchableOpacity>
      <Button title="Go to Ex7" onPress={() => navigation.navigate("Ex7")} />
    </View>
  );
}

// ===== STYLE เติมเอง() =====
const s = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    gap: 12,
  },
  number: {
    fontSize: 72,
    fontWeight: "800",
    color: "#61dafb",
    marginVertical: 16,
  },
  btn: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  wrong: { backgroundColor: "#8b2c2c" },
  right: { backgroundColor: "#238636" },
  reset: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#30363d",
  },
  btnText: { color: "white", fontSize: 16, fontWeight: "600" },
  btnTextGhost: { color: "#8b949e", fontSize: 16, fontWeight: "600" },
});
