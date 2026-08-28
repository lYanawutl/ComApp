import { View, Text, StyleSheet } from "react-native";

export default function HistoryItem({ text, number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}.</Text>

      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  number: {
    width: 35,
    fontWeight: "bold",
    fontSize: 16,
  },

  text: {
    flex: 1,
    fontSize: 16,
  },
});
