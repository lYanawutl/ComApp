import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

    return (
        <View style={styles.container}>
        <Text style={styles.title}> 🥵 Counter Screen 😍</Text>
        <TouchableOpacity style={styles.plus} onPress={() => {setCounter(counter+1), console.log('UP')}}>
            <Text style={styles.btnText}> Top </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CTxT} onPress={() => {setCounter(0), console.log('0')}}>
            <Text style={styles.btnTextC}> {counter} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minus} onPress={() => {setCounter(counter-1), console.log('DOWN')}}>
            <Text style={styles.btnText}> DOWN </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 30,
    color: '#ffff'
  },
  CounterTxT: {
    fontSize: 250,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffff',
  },
  btnText: {
    color: '#000000',
    fontSize: 50,
    fontWeight: 'bold',
  },
  btnTextC: {
    color: '#ffffff',
    fontSize: 250,
    fontWeight: 'bold',
  },
  plus: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f0a500',
  },
  minus: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f0a500',
  },
  CTxT: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,

  },
});

export default CounterScreen;