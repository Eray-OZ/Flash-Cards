import { TouchableOpacity, View, Text } from "react-native"
import styles from "../../styles/DeckStyle"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { router, Link } from "expo-router"


const CardDeckItem = ({id, title, doc, info}) => {


    return(
        <Link href={{
            pathname:'/FlashCard/[id]',
            params:{id: id}
        }} asChild>
        <TouchableOpacity style={styles.deckCard}>
            <View style={styles.cardLeft}>
                <View style={styles.cardIconContainer}>
                    <MaterialCommunityIcons
                        name="arrow-right"
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
            </View>
  
        </TouchableOpacity>
        </Link>
    )

}

export default CardDeckItem