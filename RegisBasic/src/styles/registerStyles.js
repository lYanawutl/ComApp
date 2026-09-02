import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 40 },
  intro: { color: colors.dim, fontSize: 14, marginBottom: 18 },

  field: { marginBottom: 14 },
  label: { color: colors.text, fontSize: 14, marginBottom: 6 },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 11,
    color: colors.text,
    fontSize: 15,
  },
  inputError: { borderColor: colors.red },
  errorText: { color: colors.red, fontSize: 12, marginTop: 5 },
  hintText: { color: colors.dim, fontSize: 12, marginTop: 5 },

  row: { flexDirection: 'row', gap: 10 },
  half: { flex: 1 },

  submit: {
    backgroundColor: colors.cyan,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  submitDisabled: { backgroundColor: colors.border },
  submitText: { color: colors.bg, fontSize: 16, fontWeight: '800' },

  notice: {
    backgroundColor: colors.card,
    borderLeftWidth: 3,
    borderLeftColor: colors.green,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  noticeText: { color: colors.green, fontSize: 14 },
});
