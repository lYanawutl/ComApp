import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

// ========== ใบงาน ข้อ 4: Profile Form (object) ==========
export default function Ex4ProfileForm({ navigation }) {
  // ===== STATE เติมเอง() =====
  // (1) ประกาศ state ชื่อ form เป็นออบเจกต์ { firstName: '', lastName: '', age: '' }
  const [form, setForm] = useState({ firstName: "", lastName: "", age: "" });
  // (2) ฟังก์ชัน updateField(key, value): อัปเดตทีละฟิลด์

  // ข้อควรระวัง: ต้อง spread ...form เสมอ => setForm({ ...form, [key]: value })
  const updateField = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <View style={s.container}>
      <Field
        label="ชื่อ"
        value={form.firstName}
        onChangeText={(Text) => updateField("firstName", Text)}
      />
      <Field
        label="นามสกุล"
        value={form.lastName}
        onChangeText={(Text) => updateField("lastName", Text)}
      />
      <Field
        label="อายุ"
        value={form.age}
        keyboardType="numeric"
        onChangeText={(Text) => updateField("age", Text)}
      />

      <View style={s.preview}>
        <Text style={s.previewLabel}>ตัวอย่างข้อมูล</Text>

        <Text style={s.previewText}>
          {form.firstName} {form.lastName}
        </Text>

        <Text style={s.previewMeta}>อายุ {form.age} ปี</Text>
      </View>
      <Button title="Go to Ex5" onPress={() => navigation.navigate("Ex5")} />
    </View>
  );
}

function Field({ label, ...props }) {
  return (
    <View style={{ gap: 6 }}>
      <Text style={s.label}>{label}</Text>
      <TextInput style={s.input} placeholderTextColor="#6e7681" {...props} />
    </View>
  );
}

// ===== STYLE เติมเอง() =====
const s = StyleSheet.create({
  container: { padding: 20, gap: 14 },
  label: { color: "#8b949e", fontSize: 14 },
  input: {
    borderWidth: 1,
    borderBlockColor: "#30363d",
    backgroundColor: "#161b22",
    color: "#c9d1d9",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  preview: {
    marginTop: 10,
    backgroundColor: "#161b22",
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    color: "#30363d",
  },
  previewLabel: { color: "#8b949e", fontSize: 13, marginButton: 6 },
  previewText: { color: "#61dafb", fontSize: 20, fontWeight: 700 },
  previewMeta: { color: "#c9d1d9", fontSize: 15, marginTop: 4 },
});
