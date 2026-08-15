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
    const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
    const question = QUESTIONS[randomIndex];
    setCurrent(question);
    setHistory((prev) => [question, ...prev]);
  };

  useEffect(() => {
    pickRandom();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{current || "กำลังสุ่มคำถาม..."}</Text>

      <TouchableOpacity style={styles.button} onPress={pickRandom}>
        <Text style={styles.buttonText}>สุ่มใหม่</Text>
      </TouchableOpacity>

      <Text style={styles.historyTitle}>ประวัติคำถาม</Text>

      <FlatList
        data={history}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => (
                  <HistoryItem text={item} number={history.length - index} />
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

  historyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 15,
  },
});
