import { Platform, StatusBar } from "react-native";

// ให้มาแล้ว ไม่ต้องแก้
export const colors = {
  bg: "#0d1117",
  surface: "#161b22",
  border: "#30363d",
  text: "#c9d1d9",
  muted: "#8b949e",
  cyan: "#61dafb",
  purple: "#bc8cff",
  green: "#238636",
};
export const TOP_INSET =
  Platform.OS === "android" ? StatusBar.currentHeight || 0 : 44;
