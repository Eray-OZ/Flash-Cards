import { View, Text } from "react-native"
import styles from '../../styles/CardStyle.js'
import CardButton from "./CardButton.jsx"
import { useEffect, useState } from "react"
import Warning from './Warnig.jsx'


const FlashCardDetail = ({data}) => {


        const [isTurn, setIsTurn] = useState(false)
        const [index, setIndex] = useState(0)
        const [warning, setWarning] = useState('')
    

        const turnOver = () => {
            setIsTurn(prev => !prev)
        }
    
        const nextCard = () => {
            if(index==Object.keys(data).length-1) {
                setWarning("Last Card")
            }
            else {
            setIndex(prevIndex => prevIndex+1)
            setIsTurn(false)
        }
        }
    
    
        const prevCard = () => {
            if(index==0) {
                setWarning("First Card")
            }
            else {
            setIndex(prevIndex => prevIndex-1)
            setIsTurn(false)
        }
        }
    
    
    
        useEffect(() => {
            if (warning!==''){
                const id = setTimeout(()=> {
                    setWarning('')
                },3000)
                return () => {
                    clearTimeout(id)
                }
            }
        }, [warning])

 


    return (
        <View style={styles.cardContainer}>
            <View style={styles.card} id={data.id}>

            <View style={styles.cardBanner}>
                <Text style={styles.cardBannerText}>
                    Category: {data[index].category}
                </Text>
            </View>

            <View style={styles.cardBody}>
                <Text style={styles.cardQuestion}>
                    {!isTurn ? (data[index].question) : (data[index].answer )}
                </Text>
            </View>

            {warning ? <Warning message={warning}/> : ''}

            </View>

            <View style={styles.actionButtonsContainer}>
                <CardButton onPress={prevCard} icon={"arrow-left"}/>
                <CardButton onPress={turnOver} icon={"sync"}/>
                <CardButton onPress={nextCard} icon={"arrow-right"}/>
            </View>
        </View>
    )



}


export default FlashCardDetail