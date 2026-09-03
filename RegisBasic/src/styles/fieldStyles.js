import { StyleSheet } from "react-native";
import { colors } from "./theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    color: color.text,
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderBlockColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 11,
    color: colors.text,
    fontSize: 16,
  },
  inputError: {
    borderBlockColor: colors.red,
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
    marginTop: 5,
  },
  HTMLInputElementText: {
    color: colors.dim,
    fontSize: 12,
    marginTop: 5,
  },
});
