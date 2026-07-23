import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { color } from './src/theme';
import { HEROES } from './src/data';
import { useState } from 'react';

export default function App() {

  const [favorite, setFavorite] = useState([])
  const toggle = (id) => {
    setFavorite((prev) => prev.includes(id)? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={HEROES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({item}) => {
          const isFav = favorite.includes(item.id)
          return (
            <View style={styles.card}>
              <Image style={styles.image} source={{uri: item.uri}}/>
              <View style={styles.footer}>
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity onPress={() => toggle(item.id)}>
                  <Text style={[styles.heart, isFav && styles.heartON]}>{'\u2665'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      />
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
  list:{
    padding: 14,
  },
  row:{
    justifyContent: 'space-between',
  },
  card:{
    width: '48%',
    marginBottom: 14,
    backgroundColor: color.surface,
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  title: {
    flex: 1,
    color: color.text,
    fontSize: 18,
    marginRight: 8,
  },
  heart: {
    fontSize: 24,
    color: color.muted,
    opacity: 0.35
  },
  heartON: {
    color: color.heart,
    opacity: 1
  },
});