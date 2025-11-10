import { View } from "react-native"
import styles from '../../styles/MainStyle.js'
import FlashCardDetail from '../components/FlashCardDetail.jsx'
import { useEffect, useState } from "react"
import { useLocalSearchParams } from "expo-router"
import { supabase } from "../../lib/supabase.ts"

const FlashCard = () => {



    const { id } = useLocalSearchParams(); 
    const [index, setIndex] = useState(id)
    const [flashCards, setFlashCards] = useState([])

    useEffect(() => {
      const fetchFlashCards = async () => {
      const {data, error} = await supabase
      .from("flashcards")
      .select('*')
      .eq("deck_id", id)
      .order('created_at', { ascending: false })


      if (error) {
        console.error(error)
        return
      }

      setFlashCards(data)
    }
    

    fetchFlashCards()


    }, [])

   


    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentArea}>
              <FlashCardDetail data={flashCards}/>
            </View>      
        </View>
    )
}

export default FlashCard