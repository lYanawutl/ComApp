import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

// ========== ใบงาน ข้อ 1: Counter (number) ==========
export default function Ex1Counter({ navigation }) {
  // ===== STATE เติมเอง() =====
  // (1) ประกาศ state ชื่อ count ชนิดตัวเลข ค่าเริ่มต้น 0 ได้ทั้ง( count และ setCount)
  const [counter, setCounter] = useState(0);

  return (
    <View style={s.container}>
      <Text style={s.number}>{counter}</Text>
      <View style={s.row}>
        <TouchableOpacity
          style={s.btn}
          onPress={() => {
            setCounter(counter - 1);
            console.log("DOWN");
          }}
        >
          <Text style={s.btnText}>− ลด</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[s.btn, s.primary]}
          onPress={() => {
            setCounter(counter + 1);
            console.log("UP");
          }}
        >
          <Text style={s.btnText}>+ เพิ่ม</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[s.btn, s.ghost]}
        onPress={() => {
          setCounter(0);
          console.log("0");
        }}
      >
        <Text style={s.btnTextGhost}>รีเซ็ต</Text>
      </TouchableOpacity>
      <Button title="Go to Ex2" onPress={() => navigation.navigate("Ex2")} />
    </View>
  );
}

// ===== STYLE เติมเอง() =====
const s = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    gap: 14,
  },
  number: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#61dafb",
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  btn: {
    backgroundColor: "#21262d",
    borderWidth: 1,
    borderColor: "#30363d",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    minWidth: 110,
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#238636",
    borderColor: "#238636",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  btnText: {
    color: "#c9d1d9",
    fontSize: 16,
    fontWeight: "600",
  },
  btnTextGhost: {
    color: "#8b949e",
    fontSize: 16,
    fontWeight: "600",
  },
});
