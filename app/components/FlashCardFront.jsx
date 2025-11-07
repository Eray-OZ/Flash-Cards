import { View, Text } from "react-native"
import styles from '../../styles/FrontStyle.js'


const FlashCardFront = ({data}) => {






    return (
        <View style={styles.card} key={data.id}>

            <View style={styles.cardBanner}>
                <Text style={styles.cardBannerText}>
                    Category: {data.category}
                </Text>
            </View>

            <View style={styles.cardBody}>
                <Text style={styles.cardQuestion}>
                    {data.question}
                </Text>
            </View>
        </View>
    )



}


export default FlashCardFront