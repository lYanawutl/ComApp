import { View, Text, TextInput } from "react-native";
import { styles } from "../styles/fieldStyles";
import { colors } from "../styles/theme";

const Field = ({ label, hint, error, style, ...inputProops }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholderTextColor={colors.dim}
        {...inputProops}
      />
      {error ? (
        <Text style={styles.errorText}>{error} </Text>
      ) : hint ? (
        <Text style={styles.hintText}>{hint}</Text>
      ) : null}
    </View>
  );
};
export default Field;
