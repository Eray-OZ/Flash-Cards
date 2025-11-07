import { View, Text } from "react-native"
import styles from '../../styles/FrontStyle.js'


const FlashCardFront = () => {






    return (
        <View style={styles.card}>

            <View style={styles.cardBanner}>
                <Text style={styles.cardBannerText}>
                    Cat:Test
                </Text>
            </View>

            <View style={styles.cardBody}>
                <Text style={styles.cardQuestion}>
                    Test Card
                </Text>
            </View>
        </View>
    )



}


export default FlashCardFront