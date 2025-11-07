import { View, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import styles from '../../styles/MainStyle.js'
import FlasCardFront from './FlashCardFront'
import FlashCardBack from './FlashCardBack'
import CardButton from "./CardButton.jsx"
import Warning from "./Warnig.jsx"
import { useEffect, useState } from "react"



const FlashCard = () => {


    const [cardData, setCardData] = useState(
        [
  {
    "id": "fc-001",
    "category": "Coğrafya",
    "question": "Japonya'nın başkenti nedir?",
    "answer": "Tokyo",
    "explanation": "Tokyo, 1868 yılından bu yana Japonya'nın başkentidir ve 'Doğu'nun Başkenti' anlamına gelir. Aynı zamanda dünyanın en kalabalık metropol alanlarından biridir."
  },
  {
    "id": "fc-002",
    "category": "Bilim (Biyoloji)",
    "question": "Fotosentez nedir?",
    "answer": "Bitkilerin ışık enerjisini kimyasal enerjiye dönüştürme işlemi.",
    "explanation": "Fotosentez, bitkilerin, alglerin ve bazı bakterilerin güneş ışığını kullanarak su ve karbondioksiti, oksijen ve glikoz (şeker/enerji) gibi besinlere dönüştürdüğü hayati bir süreçtir."
  },
  {
    "id": "fc-003",
    "category": "Teknoloji",
    "question": "React'te 'State' (Durum) nedir?",
    "answer": "Bir bileşenin zaman içinde değişebilen verilerini tutan bir objedir.",
    "explanation": "State, bir React bileşeninin 'hafızası' gibidir. Bir bileşenin kullanıcı etkileşimleri veya ağ yanıtları gibi nedenlerle değişen ve arayüzün (UI) güncellenmesini tetikleyen verileri depolamak için kullanılır. 'useState' hook'u ile yönetilir."
  },
  {
    "id": "fc-004",
    "category": "Tarih",
    "question": "İstanbul'un Fethi hangi yılda gerçekleşmiştir?",
    "answer": "1453",
    "explanation": "29 Mayıs 1453 tarihinde, Fatih Sultan Mehmed komutasındaki Osmanlı ordusu, o zamanki adıyla Konstantinopolis olan İstanbul'u fethederek Bizans İmparatorluğu'na son vermiştir."
  },
  {
    "id": "fc-005",
    "category": "Bilim (Kimya)",
    "question": "Periyodik tablodaki 'Au' sembolü hangi elementi temsil eder?",
    "answer": "Altın",
    "explanation": "'Au' sembolü, Latince 'aurum' kelimesinden gelir ve 'parlayan şafak' anlamına gelir. Altın, atom numarası 79 olan değerli bir metaldir."
  }
]
)


    const [isTurn, setIsTurn] = useState(false)
    const [index, setIndex] = useState(0)
    const [warning, setWarning] = useState('')

 

    const turnOver = () => {
        setIsTurn(prev => !prev)
    }

    const nextCard = () => {
        if(index==cardData.length-1) {
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
        <LinearGradient 
            colors={['#4A00E0', '#8E2DE2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.mainContainer}>



            <View style={styles.contentArea}>
                <View style={styles.cardContainer}>
                    {!isTurn ? (<FlasCardFront data={cardData[index]}/>) : (<FlashCardBack data={cardData[index]}/>)}
                </View>

                {warning ? <Warning message={warning}/> : ''}


                <View style={styles.actionButtonsContainer}>
                    <CardButton onPress={prevCard} icon={"arrow-left"}/>
                    <CardButton onPress={turnOver} icon={"sync"}/>
                    <CardButton onPress={nextCard} icon={"arrow-right"}/>
                </View>
            </View>
        </LinearGradient>
    )
}

export default FlashCard