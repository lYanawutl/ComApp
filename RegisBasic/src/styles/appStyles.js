import { StyleSheet } from 'react-native';
import { colors, topInset } from './theme';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },

  header: { paddingTop: topInset, paddingHorizontal: 20, paddingBottom: 12 },
  title: { color: colors.text, fontSize: 24, fontWeight: '800' },

  tabs: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  tabActive: {
    borderColor: colors.cyan,
    backgroundColor: 'rgba(97, 218, 251, 0.14)',
  },
  tabText: { color: colors.dim, fontSize: 14 },
  tabTextActive: { color: colors.cyan, fontWeight: '700' },
});
