import { useState } from "react";
import { SQLiteProvider } from "expo-sqlite";
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import { DATABASE_NAME, initDB } from "./src/db/database";
import RegisterScreen from "./src/screens/RegisterScreen";
import { colors } from "./src/styles/theme";
import { styles } from "./src/styles/appStyles";
import StudentListScreen from "./src/screens/StudentListScreen";

export default function App() {
  const [tab, setTab] = useState("register");

  const [reloadKey, setReloadKey] = useState(0);

  return (
    <>
      <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDB}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>ระบบลงทะเบียนนิสิต</Text>
          </View>

          <View style={styles.tabs}>
            <TabButton
              label={"ลงทะเบียน"}
              active={tab === "register"}
              onPress={() => setTab("register")}
            />
            <TabButton
              label={"รายชื่อ"}
              active={tab === "list"}
              onPress={() => setTab("list")}
            />
          </View>

          {tab === "register" ? (
            <RegisterScreen onRegistered={() => setReloadKey((k) => k + 1)} />
          ) : (
            <StudentListScreen reloadKey={reloadKey} />
          )}
        </View>
      </SQLiteProvider>
    </>
  );
}

function TabButton({ label, active, onPress }) {
  return (
    <Pressable
      style={[styles.tab, active && styles.tabActive]}
      onPress={onPress}
    >
      <Text style={[styles.tabText, active && styles.tabTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
}
