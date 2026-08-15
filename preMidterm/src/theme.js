import { StatusBar, Platform } from "react-native";

export const colors = {
  bg: "#0d1117",
  surface: "#161d22",
  border: "#30363d",
  text: "#c9d1d9",
  muted: "#8b949e",
  cyan: "#61dafb",
  heart: "#f778ba",
  green: "#238636",
  amber: "#f2cc60",
};

export const TOP_INSET =
  Platform.OS === "android" ? StatusBar.currentHeight || 0 : 44;
