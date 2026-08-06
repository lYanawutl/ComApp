import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { color, TOP_INSET } from '../theme';
import { HEROES } from '../data';
import { useState } from 'react';
import HeroCard from '../components/HeroCard';

export default function FavHeroes({favorite, onToggle}) {
    const FavHeroes = HEROES.filter((h) => favorite.includes(h.id))

    if ( FavHeroes.length === 0 ) {
        return (
            <View style={styles.empty}>
                <Text style={styles.emptyText}>ยังไม่มีฮีโร่ที่ถูกเลือก</Text>
                <Text style={styles.emptyHing}>กดหัวใจในแท็ป ฮีโร่ของฉัน ก่อน</Text>
            </View>
        )
    }
  return (
      <FlatList
        data={FavHeroes}
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
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30},
  emptyText: {color: color.text, fontSize: 18, fontWeight: '700' },
  emptyHing: {color: color.muted, fontSize: 15, marginTop: 6}
});