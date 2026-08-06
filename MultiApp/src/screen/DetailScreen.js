import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailScreen = ( { navigation} ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen 📚</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Counters')}/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default DetailScreen