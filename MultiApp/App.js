import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import CounterScreen from './src/screen/CounterScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailScreen}></Stack.Screen>
        <Stack.Screen name="Counters" component={CounterScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
