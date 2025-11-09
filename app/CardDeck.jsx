import { View, Text, ScrollView} from 'react-native'
import styles from '../styles/DeckStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardDeckItem from './components/CardDeckItem'
import { LinearGradient } from 'expo-linear-gradient'

const decks = [
  {
    id:0,
    title: "World Capitals",
    subtitle: "All countries and their capitals.",
    count: 195,
  },
  {
    id:1,
    title: "Periodic Table",
    subtitle: "Mastering the elements of the periodic table.",
    count: 118,
  },
  {
    id:2,
    title: "Art History",
    subtitle: "Key movements from the Renaissance.",
    count: 88,
  },
  {
    id:3,
    title: "Calculus Formulas",
    subtitle: "Essential formulas and theorems.",
    count: 45,
  },
];


const LinearColors = [
  ['#f97e15', '#f8b914'],
  ['#ac53ee', '#e5489f'],
  ['#df4654','#a056a3'],
  ['#ac53ef','#e548a0']
]

const CardDeck = () => {


    return (
        <SafeAreaView style={styles.safeArea}> 

        <LinearGradient 
            colors={['#719efa', '#af88fb']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}>  
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Decks</Text>
            </View>



      
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}>
            
            {decks.map(deck => (
                <CardDeckItem
                key={deck.id}
                id={deck.id}
                title={deck.title}
                doc={deck.subtitle}
                info={deck.count}
                linearcolor={LinearColors[deck.id%4]}
                />
            ))}
        

        </ScrollView>
        </LinearGradient>
        </SafeAreaView>
    )

}


export default CardDeck