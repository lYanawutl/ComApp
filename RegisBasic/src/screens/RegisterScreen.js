import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { styles } from "../styles/registerStyles";
import { colors } from "../styles/theme";
import Field from "../components/Field";

const EMPTY_FORM = {
  name: "",
  surname: "",
  studentID: "",
  username: "",
  password: "",
  confirm: "",
};

const RegisterScreen = () => {
  const db = useSQLiteContext();

  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState({});
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");

  function setField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (error[field]) {
      setError((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function headleSubmit() {
    console.log("cacacaccd", form);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.intro}>กรุณากรอกข้อมูลให้ครบทุกช่อง</Text>

        {success !== "" && (
          <View style={styles.notice}>
            <Text style={styles.noticeText}>{success}</Text>
          </View>
        )}

        <View style={styles.row}>
          <Field
            style={styles.half}
            label="ชื่อ"
            value={form.name}
            onChangeText={(v) => setField("name", v)}
            error={error.name}
            placeholder="สมชาย"
          />
          <Field
            style={styles.half}
            label="นามสกุล"
            value={form.surname}
            onChangeText={(v) => setField("surname", v)}
            error={error.surname}
            placeholder="เข็มขัด"
          />
        </View>
        <Field
          label="รหัสนิสิต"
          value={form.studentID}
          onChangeText={(v) => setField("studentID", v)}
          error={error.studentID}
          placeholder="6721651254"
          keyboardType="number-pad"
          maxlength={10}
        />
        <Field
          label="ชื่อผู้ใช้"
          value={form.username}
          onChangeText={(v) => setField("username", v)}
          error={error.username}
          placeholder="somchi"
          hint="ห้ามซ้ำกับผู้ใช้คนอื่น"
          autoCapitalize="none"
          maxlength={20}
        />
        <Field
          label="รหัสผ่าน"
          hint="อย่างน้อย 8 ตัว มีทั้งตัวอักษรและตัวเลข"
          value={form.password}
          onChangeText={(v) => setField("password", v)}
          error={error.password}
          placeholder="อย่า่งน้อย 8 ตัวอักษร"
          secureTextEntry
          autoCapitalize="none"
        />
        <Field
          label="ยืนยันรหัสผ่าน"
          value={form.confirm}
          onChangeText={(v) => setField("confirm", v)}
          error={error.confirm}
          placeholder="พิมพ์รหัสผ่านอีกครั้ง"
          secureTextEntry
          autoCapitalize="none"
        />
        <Pressable style={[styles.submit, saving && styles.submitDisabled]}>
          <Text style={styles.submitText}>
            {saving ? "กำลังบันทึก" : "ลงทะเบียน"}
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
