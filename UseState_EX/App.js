import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import DetailScreen from "./src/DetailScreen";
import Ex1Counter from "./src/Ex1";
import Ex2NameInput from "./src/Ex2";
import Ex3Toggle from "./src/Ex3";
import Ex4ProfileForm from "./src/Ex4";
import Ex5TodoList from "./src/Ex5";
import Ex6TripleCount from "./src/Ex6";
import Ex7LazyInit from "./src/Ex7";
import Ex8StatePatterns from "./src/Ex8";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailScreen}></Stack.Screen>
        <Stack.Screen name="Ex1" component={Ex1Counter}></Stack.Screen>
        <Stack.Screen name="Ex2" component={Ex2NameInput}></Stack.Screen>
        <Stack.Screen name="Ex3" component={Ex3Toggle}></Stack.Screen>
        <Stack.Screen name="Ex4" component={Ex4ProfileForm}></Stack.Screen>
        <Stack.Screen name="Ex5" component={Ex5TodoList}></Stack.Screen>
        <Stack.Screen name="Ex6" component={Ex6TripleCount}></Stack.Screen>
        <Stack.Screen name="Ex7" component={Ex7LazyInit}></Stack.Screen>
        <Stack.Screen name="Ex8" component={Ex8StatePatterns}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
