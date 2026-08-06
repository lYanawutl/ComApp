import { StatusBar } from "expo-status-bar";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <View style={s.box}>
      <TextInput
        style={s.input}
        placehold="Type your name"
        value={name}
        onChangeText={setName}
      />
      <Pressable style={s.btn} onPress={() => setMsg("Hello, " + name)}>
        <Text style={s.t}>OK</Text>
      </Pressable>
      <Text style={s.result}>{msg}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  box: { flex: 1, padding: 24, justifyContent: "center" },
  input: { borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 12 },
  btn: { backgroundColor: "#2563eb", padding: 12, borderRadius: 8 },
  t: { color: "#ffff", textAlign: "center" },
  result: { fontSize: 18, marginTop: 16 },
});
