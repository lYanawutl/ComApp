import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

// ========== ใบงาน ข้อ 5: Todo List (array) ==========
export default function Ex5TodoList({ navigation }) {
  // ===== STATE =====
  // (1) state ชื่อ text ชนิดข้อความ เริ่มต้น ''
  const [text, setText] = useState("");
  // (2) state ชื่อ todos ชนิดอาเรย์ เริ่มต้น []
  const [todos, setTodos] = useState([]);
  // (3) addTodo: เพิ่มงานใหม่โดยไม่แก้อาเรย์เดิม แล้วล้างช่อง text
  const addTodo = () => {
    if (text.trim() == "") return;
    const newItem = { id: Date.now().toString(), title: text, done: false };
    setTodos([...todos, newItem]);
    setText("");
  };
  // (4) removeTodo(id): ลบด้วย todos.filter(...)
  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  // (5) toggleDone(id): สลับ done ของ item ที่ตรง id
  const toggleDone = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };
  const doneCount = todos.filter((t) => t.done).length;
  return (
    <View style={s.container}>
      <View style={s.inputRow}>
        <TextInput
          style={s.input}
          placeholder="เพิ่มงานที่ต้องทำ..."
          placeholderTextColor="#6e7681"
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTodo}
        />
        <TouchableOpacity style={s.addBtn} onPress={addTodo}>
          <Text style={s.addBtnText}>เพิ่ม</Text>
        </TouchableOpacity>
      </View>
      <Text style={s.counter}>
        ทั้งหมด {todos.length} รายการ เสร็จแล้ว {doneCount}
      </Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={s.item}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => toggleDone(item.id)}
            >
              <Text style={[s.itemText, item.done && s.itemDone]}>
                {item.done ? "X" : "O"} {item.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTodo(item.id)} hitSlop={10}>
              <Text style={s.delete}>ลบ</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={s.empty}>ยังไม่มีรายการ - ลองเพิ่มดูสิ</Text>
        }
      />
      <Button title="Go to Ex6" onPress={() => navigation.navigate("Ex6")} />
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  inputRow: { flexDirection: "row", gap: 8, marginBottom: 12 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#30363d",
    backgroundColor: "#161b22",
    color: "#c9d1d9",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: "#238636",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 10,
  },
  addBtnText: { color: "#ffffff", fontWeight: "700", fontSize: 16 },
  counter: { color: "#8b949e", fontSize: 13, marginBottom: 10 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#161b22",
    borderWidth: 1,
    borderColor: "#30363d",
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
  },
  itemText: { color: "#c9d1d9", fontSize: 16 },
  itemDone: { color: "#6e7681", textDecorationLine: "line-through" },
  delete: { color: "#f85149", fontWeight: "600", fontSize: 14, marginLeft: 12 },
  empty: {
    color: "#6e7681",
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
  },
});
