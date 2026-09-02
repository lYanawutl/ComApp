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
} from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { styles } from "../styles/registerStyles";
import { colors } from "../styles/theme";

const RegisterScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.intro}>กรุณากรอกข้อมูลให้ครบทุกช่อง</Text>

      <View style={styles.row}>
        <Field style={styles.half} label="ชื่อ" placeholder="สมชาย" />
        <Field style={styles.half} label="นามสกุล" placeholder="เข็มขัด" />
      </View>
      <Field
        label="รหัสนิสิต"
        placeholder="6721651254"
        keyboardType="number-pad"
        maxlength={10}
      />
      <Field
        label="ชื่อผู้ใช้"
        placeholder="somchi"
        hint="ห้ามซ้ำกับผู้ใช้คนอื่น"
        autoCapitalize="none"
        maxlength={20}
      />
      <Field
        label="รหัสผ่าน"
        hint="อย่างน้อย 8 ตัว มีทั้งตัวอักษรและตัวเลข"
        placeholder="อย่า่งน้อย 8 ตัวอักษร"
        secureTextEntery
        autoCapitalize="none"
      />
      <Field
        label="ยืนยันรหัสผ่าน"
        placeholder="พิมพ์รหัสผ่านอีกครั้ง"
        secureTextEntery
        autoCapitalize="none"
      />
      <Pressable style={styles.submit}>
        <Text style={styles.submitText}>ลงทะเบียน</Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreen;
