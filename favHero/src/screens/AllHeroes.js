import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { color, TOP_INSET } from '../theme';
import { HEROES } from '../data';
import { useState } from 'react';
import HeroCard from '../components/HeroCard';

export default function AllHeroes({favorite, onToggle}) {
  return (
      <FlatList
        data={HEROES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({item}) => {
          return (
            <HeroCard hero={item} isFav={ favorite.includes(item.id) } onToggle={onToggle}/>
          )
        }}
      />
    
  );
}

const styles = StyleSheet.create({
  
  list:{
    padding: 14,
  },
  row:{
    justifyContent: 'space-between',
  },
});