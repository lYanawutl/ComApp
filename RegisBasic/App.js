import { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar } from "react-native";
import { SQLiteProvider } from "expo-sqlite";
import { DATABASE_NAME, initDB } from "./src/db/database";
import RegisterScreen from "./src/screens/RegisterScreen";
import StudentListScreen from "./src/screens/StudentListScreen";
import { styles } from "./src/styles/appStyles";

export default function App() {
  return (
    <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDB}>
      <StatusBar barStyle="light-content" />
      <Main />
    </SQLiteProvider>
  );
}

function Main() {
  const [tab, setTab] = useState("register");
  const [reloadKey, setReloadKey] = useState(0);

  function go(t) {
    setTab(t);
    if (t === "list") setReloadKey((k) => k + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ระบบลงทะเบียนนิสิต</Text>
      </View>

      <View style={styles.tabs}>
        <TabButton
          label="ลงทะเบียน"
          active={tab === "register"}
          onPress={() => go("register")}
        />
        <TabButton
          label="รายชื่อ"
          active={tab === "list"}
          onPress={() => go("list")}
        />
      </View>

      <View style={{ flex: 1 }}>
        {tab === "register" ? (
          <RegisterScreen onReg={() => setReloadKey((k) => k + 1)} />
        ) : (
          <StudentListScreen reloadKey={reloadKey} />
        )}
      </View>
    </View>
  );
}

function TabButton({ label, active, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.tab, active && styles.tabActive]}
    >
      <Text style={[styles.tabText, active && styles.tabTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
