import { SQLiteProvider } from "expo-sqlite";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { DATABASE_NAME, initDB } from "./src/db/database";
import RegisterScreen from "./src/screens/RegisterScreen";
import { colors } from "./src/styles/theme";
import { styles } from "./src/styles/appStyles";

export default function App() {
  return (
    <>
      <SQLiteProvider databaseName={DATABASE_NAME} onInit={initDB}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>ระบบลงทะเบียนนิสิต</Text>
          </View>
          <RegisterScreen />
        </View>
      </SQLiteProvider>
    </>
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
