import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors, TOP_INSET } from "./src/theme";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    Alert.alert("Warning⚠️", "สวัสดี โมโต");
  }, []);

  return (
    <View style={styles.container}>
      <Text>count: {count}</Text>
      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => {
          setCount(count + 1);
          console.log("UP");
        }}
      >
        <Text style={styles.btnText}>+ เพิ่ม</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  btn: {
    backgroundColor: colors.green,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    minWidth: 110,
    alignItems: "center",
  },
  textBtn: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "700",
  },
  root: { flex: 1, backgroundColor: colors.bg },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: { color: colors.cyan, fontSize: 22, fontWeight: "700" },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    gap: 6,
    backgroundColor: colors.surface,
  },
  stable: { borderColor: colors.green },
  live: { borderColor: colors.amber },
  cardHead: {
    color: colors.cyan,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 9,
  },
  row: { color: colors.text, fontSize: 15 },
  val: { fontWeight: "700", color: colors.text },
  quote: { color: colors.amber, fontSize: 18, fontWeight: "600", marginTop: 2 },
  note: { color: colors.muted, fontSize: 13, marginTop: 2 },
  count: {
    color: colors.text,
    fontSize: 16,
    textAlign: "center",
    marginTop: 6,
  },
});
