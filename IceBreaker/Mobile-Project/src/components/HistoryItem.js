import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function HistoryItem({ text, number }) {
  return (
    <View style={styles.row}>
      <View style={styles.badge}>
        <Text style={styles.numTxt}>{number}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  badge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  numTxt: { fontSize: 13, fontWeight: "700", color: colors.text },
  text: { flex: 1, fontSize: 15, color: colors.bg, lineHeight: 22 },
});
