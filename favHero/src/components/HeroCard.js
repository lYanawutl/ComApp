import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import { color } from "../theme"

const HeroCard = ({ hero, isFav, onToggle }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: hero.uri}}/>
            <View style={styles.footer}>
                <Text style={styles.title}>{hero.name}</Text>
                <TouchableOpacity onPress={() => onToggle(hero.id)}>
                  <Text style={[styles.heart, isFav && styles.heartON]}>{'\u2665'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})
export default HeroCard