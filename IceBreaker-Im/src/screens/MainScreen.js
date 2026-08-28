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

export default function MainScreen() {
  const [current, setCurrent] = useState("");
  const [history, setHistory] = useState([]);

  const pickRandom = () => {
    if (QUESTIONS.length === 0) return;

    let question;

    if (QUESTIONS.length === 1) {
      question = QUESTIONS[0];
    } else {
      do {
        const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
        question = QUESTIONS[randomIndex];
      } while (question === current);
    }

    setCurrent(question);
    setHistory((prev) => [question, ...prev]);
  };

  useEffect(() => {
    pickRandom();
  }, []);

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{current || "กำลังสุ่มคำถาม..."}</Text>

      <TouchableOpacity style={styles.button} onPress={pickRandom}>
        <Text style={styles.buttonText}>สุ่มใหม่</Text>
      </TouchableOpacity>

      <Text style={styles.count}>สุ่มมาแล้ว {history.length} ครั้ง</Text>

      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>ประวัติคำถาม</Text>

        <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
          <Text style={styles.clearButtonText}>ล้างประวัติ</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={history}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => (
          <HistoryItem text={item} number={index + 1} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background || "#fff",
  },

  question: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },

  button: {
    backgroundColor: colors.primary || "#2196F3",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  count: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 16,
  },

  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 15,
  },

  historyTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  clearButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#f44336",
  },

  clearButtonText: {
    fontSize: 14,
    color: "#fff",
  },
});
