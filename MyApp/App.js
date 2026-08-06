import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
    <View>
        <Image 
          style={styles.avatar}
          source={{ uri: 'https://static.wixstatic.com/media/4fd644_71575122423c43018c084c9ea98e2ecc~mv2.jpg/v1/fill/w_602,h_903,al_c,q_85,enc_auto/4fd644_71575122423c43018c084c9ea98e2ecc~mv2.jpg'}}>
        </Image>
    </View>
      <View style={styles.circle}>
        <Text style={styles.circleText}> KU </Text>
     </View>
      <Text style={styles.title}> Hello Moto 📱 </Text>
      <Text style={styles.name}> 😎My Name is Yanawut Phiraban.😎 </Text>
      <Text style={styles.id}> My id is 6721651254. </Text>
      <Text style={styles.icon}> 👽 </Text>
      <Text style={styles.icon2}> 🚀 🚀 </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#173f5f',
    alignItems:"center",
    justifyContent:'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9d17e5' 
  },
  name: {
    fontSize: 22,
    fontWeight: 'normal',
    color: '#ff0000' 
  },
  id: {
    fontSize: 22,
    fontWeight: 'normal',
    color: '#00ff22' 
  },
  icon: {
    fontSize: 150,
  },
  icon2: {
    fontSize: 50,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#f4f800',
    backgroundColor: '#237a00',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24
  },
  circleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#000000',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24
  }
});

