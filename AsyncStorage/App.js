import { StatusBar } from 'react-native';
import TodoScreen from './src/screens/TodoScreen';
import { COLORS } from './src/constants/colors';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <TodoScreen />
    </>
  );
}
