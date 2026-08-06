import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar as ExpoStstusBar } from "expo-status-bar";
import AllHeroes from "./src/screens/AllHeroes";
import FavHeroes from "./src/screens/FavHeroes";
import { color,  TOP_INSET} from "./src/theme";
import { useState } from "react";



export default function App(  ) {
  const [tab, setTab] = useState('AllHeroes')
  const [favorite, setFavorite] = useState([])
    
  const toggle = (id) => {
    setFavorite((prev) => prev.includes(id)? prev.filter((x) => x !== id) : [...prev, id]);
  }
 
  return (
  <View style={styles.root}>
    <ExpoStstusBar style='light'/>
    <View style={[styles.header, {padding: TOP_INSET + 10}]}>
      <Text style={styles.title}>{tab === 'AllHeroes'? 'ฮีโร่ทั้งหมด' : 'ฮีโร่ของฉัน'}</Text>
    </View>
    <View style={styles.body}>
      {
        tab === 'AllHeroes' ?
        (<AllHeroes favorite={favorite} onToggle={toggle}/>) :
        (<FavHeroes favorite={favorite} onToggle={toggle}/>)
      }
      
    </View>
    <View style={styles.tabber}>
      <Tabbutton label='All Hero' onPress={() => setTab('AllHeroes')} active={tab === 'AllHeroes'}/>
      <Tabbutton label={`My Hero (${favorite.length})`} onPress={() => setTab('MyHeroes')} active={tab === 'MyHeroes'} />
    </View>
  </View>
  )
}
const Tabbutton = ({label, onPress, active}) => {
  return(
    <TouchableOpacity style={styles.tab} onPress={onPress}>
        <Text style={[styles.tabText, active  && styles.tabActive]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: color.bg},
  header: {paddingHorizontal: 16, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: color.border},
  title: { color: color.cyan, fontSize: 22, fontWeight: '700'},
  body: { flex: 1},
  tabber: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: color.border, backgroundColor: color.surface},
  tab: { flex: 1, paddingVertical: 14, alignItems: 'center'},
  tabText: { color: color.muted, fontSize: 16, fontWeight: '600'},
  tabActive: { color: color.cyan},
})