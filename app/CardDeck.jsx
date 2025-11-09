import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/DeckStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardDeckItem from './components/CardDeckItem';
import { MaterialIcons } from '@expo/vector-icons';

const decks = [
  {
    id: 0,
    title: 'World Capitals',
    subtitle: 'All countries and their capitals.',
    count: 195,
    icon: 'public',
  },
  {
    id: 1,
    title: 'Periodic Table',
    subtitle: 'Mastering the elements of the periodic table.',
    count: 118,
    icon: 'science',
  },
  {
    id: 2,
    title: 'Art History',
    subtitle: 'Key movements from the Renaissance.',
    count: 88,
    icon: 'palette',
  },
  {
    id: 3,
    title: 'Calculus Formulas',
    subtitle: 'Essential formulas and theorems.',
    count: 45,
    icon: 'calculate',
  },
    {
    id: 4,
    title: 'Calculus Formulas',
    subtitle: 'Essential formulas and theorems.',
    count: 45,
    icon: 'calculate',
  },
    {
    id: 5,
    title: 'Calculus Formulas',
    subtitle: 'Essential formulas and theorems.',
    count: 45,
    icon: 'calculate',
  },
    {
    id: 6,
    title: 'Calculus Formulas',
    subtitle: 'Essential formulas and theorems.',
    count: 45,
    icon: 'calculate',
  },
    {
    id: 7,
    title: 'Calculus Formulas',
    subtitle: 'Essential formulas and theorems.',
    count: 45,
    icon: 'calculate',
  },
    {
    id: 8,
    title: 'Calculus Formulas',
    subtitle: 'Essential formulas and theorems.',
    count: 45,
    icon: 'calculate',
  },
];

const LinearColors = [
  ['#4a90e2', '#50e3c2'], // Original blue-green
  ['#ac53ee', '#e5489f'], // Purple-pink
  ['#f97e15', '#f8b914'], // Orange-yellow
  ['#df4654', '#a056a3'], // Red-indigo
  ['#11998e', '#38ef7d'], // Green gradient
  ['#c0392b', '#8e44ad'], // Red-purple
  ['#16a085', '#f4d03f'], // Green-yellow
  ['#d35400', '#f39c12'], // Orange
];

const CardDeck = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Decks</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          {decks.map((deck) => (
            <CardDeckItem
              key={deck.id}
              id={deck.id}
              title={deck.title}
              doc={deck.subtitle}
              info={`${deck.count} Cards`}
              icon={deck.icon}
              linearcolor={LinearColors[deck.id % 8]}
            />
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.fab}>
          <MaterialIcons name="add" size={32} color="#1a1c1e" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CardDeck;