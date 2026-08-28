import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function HistoryItem({ text, number }) {
  return (
    <View style={styles.item}>
      <Text style={styles.number}>{number}.</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  number: { color: colors.muted, fontSize: 14 },
  text: { color: colors.text, fontSize: 14, flex: 1 },
});
