import { View, Text, StyleSheet } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import MainScreen from './src/screens/MainScreen';
import { colors, TOP_INSET } from './src/theme';

export default function App() {
  return (
    <View style={styles.root}>
      <ExpoStatusBar style="light" />
      <View style={[styles.header, { paddingTop: TOP_INSET + 10 }]}>
        <Text style={styles.title}>สุ่มคำถามชวนคุย</Text>
      </View>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  header: {
    paddingHorizontal: 16, paddingBottom: 14,
    borderBottomWidth: 1, borderBottomColor: colors.border, backgroundColor: colors.surface,
  },
  title: { color: colors.cyan, fontSize: 22, fontWeight: '700' },
});
