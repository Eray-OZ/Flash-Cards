import { TouchableOpacity, View, Text } from "react-native"
import styles from "../../styles/DeckStyle"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Link } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"

const CardDeckItem = ({id, title, doc, info, linearcolor}) => {


    return(

        <Link href={{
            pathname:'/FlashCard/[id]',
            params:{id: id}
        }} asChild>
        <TouchableOpacity style={styles.deckCard}>
        <LinearGradient 
            colors={[linearcolor[0], linearcolor[1]]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.cardLeft}
            > 
                <View style={styles.cardIconContainer}>
                    <MaterialCommunityIcons
                        name="card-multiple-outline"
                        size={30} 
                        color={styles.primary}
                  />
                </View>

            <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardSubtitle}>{doc}</Text>
            </View>

            <View style={styles.cardInfoContainer}>
                <Text style={styles.cardInfoText}>{info} Cards</Text>
            </View>
            
            </LinearGradient>
        </TouchableOpacity>
        </Link>
    )

}

export default CardDeckItem