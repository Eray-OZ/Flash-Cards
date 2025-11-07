import { View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import styles from '../../styles/MainStyle.js'
import FlasCardFront from './FlashCardFront'
import FlashCardBack from './FlashCardBack'
import ButtonsContainer from "./ButtonsContainer.jsx"
import { useState } from "react"



const FlashCard = () => {




    const [isTurn, setIsTurn] = useState(false)



    const turnOver = () => {
        setIsTurn(!isTurn)
    }


  
    


    return (
        <LinearGradient 
            colors={['#4A00E0', '#8E2DE2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.mainContainer}>

            <View style={styles.contentArea}>
                <View style={styles.cardContainer}>
                    {!isTurn ? (<FlasCardFront/>) : (<FlashCardBack/>)}
                </View>

                
                <ButtonsContainer onPress={turnOver}/>

            </View>
        </LinearGradient>
    )
}

export default FlashCard