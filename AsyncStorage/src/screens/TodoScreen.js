import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { COLORS } from "../constants/colors";
import { TOP_INSET } from "../constants/layout";
import { useState } from "react";

const TodoScreen = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const trimmed = text.trim();
    if (trimmed.length === 0) return;
    setTodos((prev) => [
      {
        id: Date.now().toString(),
        text: trimmed,
        done: false,
      },
      ...prev,
    ]);
    setText("");
  };

  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((task) => task.id !== id));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Screen</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="เพิ่มสิ่งที่ต้องทำ"
          placeholderTextColor={COLORS.textDim}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addText}>เพิ่ม</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => toggleTodo(item.id)}
            onLongPress={() => deleteTodo(item.id)}
          >
            <Text style={[styles.itemText, item.done && styles.itemDone]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: TOP_INSET,
    paddingHorizontal: 20,
  },
  title: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 16,
  },
  row: { flexDirection: "row", gap: 10, marginBottom: 14 },
  input: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: COLORS.text,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: COLORS.cyan,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  addText: { color: COLORS.bg, fontSize: 16, fontWeight: "700" },
  item: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
  },
  itemText: { color: COLORS.text, fontSize: 16 },
  itemDone: { color: COLORS.textDim, textDecorationLine: "line-through" },
});

export default TodoScreen;
