import { SQLiteProvider } from "expo-sqlite";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { colors } from "./src/styles/theme";
import { DATABASE_NAME, initDB } from "./src/db/database";

export default function App() {
  return (
    <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDB}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={{ color: colors.green, fontSize: 18 }}>
          ฐานข้อมูลพร้อมแล้ว
        </Text>
      </View>
    </SQLiteProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
  },
});
