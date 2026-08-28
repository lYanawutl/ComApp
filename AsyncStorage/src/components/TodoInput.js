import { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    const trimmed = text.trim();
    if (trimmed.length === 0) return;
    onAdd(trimmed);
    setText('');
  };

  const disabled = text.trim().length === 0;

  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAdd}
        placeholder="พิมพ์สิ่งที่ต้องทำ..."
        placeholderTextColor={COLORS.textDim}
        returnKeyType="done"
        maxLength={120}
      />
      <Pressable
        onPress={handleAdd}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          disabled && styles.buttonDisabled,
          pressed && !disabled && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>เพิ่ม</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  input: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: COLORS.text,
    fontSize: 16,
  },
  button: {
    backgroundColor: COLORS.cyan,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  buttonDisabled: { backgroundColor: COLORS.border },
  buttonPressed: { opacity: 0.75 },
  buttonText: { color: COLORS.bg, fontSize: 16, fontWeight: '700' },
});
