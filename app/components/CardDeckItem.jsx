import { TouchableOpacity, View, Text } from 'react-native';
import styles from '../../styles/DeckStyle';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const CardDeckItem = ({ id, title, doc, info, icon, linearcolor }) => {
  return (
    <Link
      href={{
        pathname: '/FlashCard/[id]',
        params: { id: id },
      }}
      asChild
    >
      <TouchableOpacity>
        <LinearGradient
          colors={linearcolor}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.deckCard}
        >
          <View style={styles.cardLeft}>
            <View style={styles.cardIconContainer}>
              <MaterialIcons name={icon} size={32} color="white" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardSubtitle}>{doc}</Text>
            </View>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.cardInfoText}>{info}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
};

export default CardDeckItem;