import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/DeckStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardDeckItem from './components/CardDeckItem';
import { MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';
import * as DocumentPicker from 'expo-document-picker'


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

  const [decks, setDecks] = useState([])
  const [userId, setUserId] = useState('')


  const getUser = async () => {
    try {
      const {data: { user }} = await supabase.auth.getUser()
      if (user!==null){
        setUserId(user.id)
      }
      else {
        setUserId('')
      }      
    } catch (error) {
      console.error("Auth error: " + error)
    }
  }




  useEffect(() => {

    const fetchDecks = async () => {
        const {data, error} = await supabase
        .from("decks")
        .select('*, flashcards(count)')
        .order('created_at', { ascending: false })
       
        if (error) {
          console.error(error)
          return
        }
        setDecks(data)
      }

    getUser()
    fetchDecks()

  }, [])

  

  const pickAndUploadPdfDocument = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf', 
      copyToCacheDirectory: true, 
    });

    if (!result.assets || result.assets.length === 0) {
        console.log('PDF Picking cancelled or failed.');
        return;
    }

    const file = result.assets[0];


    const {data, error} = await supabase
    .storage
    .from('files')
    .upload(userId + "/" + Date.now(), file, {
    contentType: file.mimeType || 'application/pdf', 
    upsert: true
})
    
    if (error) {console.log(error)}

  } catch (err) {
    console.error('File Selection Error:', err);
  }

};






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
        
        {decks.map(deck => (
          <CardDeckItem
          key={deck.id}
          id={deck.id}
          title={deck.title}
          doc={deck.description}
          info={deck.flashcards && deck.flashcards.length > 0 ? deck.flashcards[0].count : 0}
          icon={deck.category}
          linearcolor={LinearColors[decks.length%8]}
          />
        ))}
 
        </ScrollView>

        <TouchableOpacity style={styles.fab} onPress={pickAndUploadPdfDocument}>
          <MaterialIcons name="add" size={32} color="#1a1c1e" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CardDeck;