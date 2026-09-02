import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 40 },
  summary: { color: colors.dim, fontSize: 14, marginBottom: 14 },

  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  cardName: { color: colors.text, fontSize: 16, fontWeight: '700' },
  cardLine: { color: colors.dim, fontSize: 13, marginTop: 3 },
  hashLabel: { color: colors.dim, fontSize: 12, marginTop: 8 },
  hashValue: { color: colors.cyan, fontSize: 12 },

  empty: { color: colors.dim, textAlign: 'center', marginTop: 40, fontSize: 15 },

  clearButton: {
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  clearText: { color: colors.red, fontSize: 15, fontWeight: '600' },
});
