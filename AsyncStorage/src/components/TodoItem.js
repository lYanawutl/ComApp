import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function TodoItem({ item, onToggle, onDelete }) {
  return (
    <Pressable
      onPress={() => onToggle(item.id)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={[styles.checkbox, item.done && styles.checkboxDone]}>
        {item.done && <Text style={styles.checkmark}>{'\u2713'}</Text>}
      </View>

      <Text
        style={[styles.text, item.done && styles.textDone]}
        numberOfLines={2}
      >
        {item.text}
      </Text>

      <Pressable
        onPress={() => onDelete(item.id)}
        hitSlop={10}
        style={({ pressed }) => [styles.delete, pressed && { opacity: 0.6 }]}
      >
        <Text style={styles.deleteText}>ลบ</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 8,
  },
  cardPressed: { borderColor: COLORS.cyan },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.textDim,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: { backgroundColor: COLORS.green, borderColor: COLORS.green },
  checkmark: {
    color: COLORS.bg,
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 16,
  },
  text: { flex: 1, color: COLORS.text, fontSize: 16 },
  textDone: { color: COLORS.textDim, textDecorationLine: 'line-through' },
  delete: { paddingHorizontal: 6, paddingVertical: 2 },
  deleteText: { color: COLORS.red, fontSize: 14, fontWeight: '600' },
});
