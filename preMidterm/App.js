import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors, TOP_INSET } from "./src/theme";
import { QUOTE } from "./src/data";

export default function App() {
  const [quote, setQuote] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    //console.log(Quote[Math.floor(Math.random() * Quote.length)]);
    setQuote(QUOTE[Math.floor(Math.random() * QUOTE.length)]);
    console.log(quote);
  }, [count]);

  return (
    <View style={styles.root}>
      <View style={[styles.header, { paddingTop: TOP_INSET + 10 }]}>
        <Text style={styles.title}>คำคม สดๆร้อนๆ</Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.card, styles.stable]}>
          <Text style={styles.cardHead}>ทำงานครั้งเดียวตอนเริ่ม</Text>
          <Text style={styles.row}>คำคมประจำวัน:</Text>
          <Text style={styles.quote}>{quote}</Text>
          <Text style={styles.note}>กด re-reder แล้วยังไม่เปลี่ยน</Text>
        </View>
        <Text style={styles.count}>จำนวนครั้งที่ re-render: {count} </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.textBtn}>Re-Render</Text>
        </TouchableOpacity>
      </View>
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
