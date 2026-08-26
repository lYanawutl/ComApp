import { StatusBar } from "expo-status-bar";
import { COLORS } from "./src/constants/colors";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <TodoScreen />
    </>
  );
}
