import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export const FILTERS = [
  { key: 'all', label: 'ทั้งหมด' },
  { key: 'active', label: 'ยังไม่เสร็จ' },
  { key: 'done', label: 'เสร็จแล้ว' },
];

export default function FilterBar({ value, onChange }) {
  return (
    <View style={styles.row}>
      {FILTERS.map((f) => {
        const selected = f.key === value;
        return (
          <Pressable
            key={f.key}
            onPress={() => onChange(f.key)}
            style={[styles.chip, selected && styles.chipSelected]}
          >
            <Text style={[styles.label, selected && styles.labelSelected]}>
              {f.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.card,
  },
  chipSelected: {
    borderColor: COLORS.cyan,
    backgroundColor: 'rgba(97, 218, 251, 0.14)',
  },
  label: { color: COLORS.textDim, fontSize: 14 },
  labelSelected: { color: COLORS.cyan, fontWeight: '700' },
});
