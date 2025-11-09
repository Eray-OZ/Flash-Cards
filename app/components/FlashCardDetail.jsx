import { View, Text } from 'react-native';
import styles from '../../styles/CardStyle.js';
import CardButton from './CardButton.jsx';
import { useEffect, useState, useRef } from 'react';
import Warning from './Warnig.jsx';
import { LinearGradient } from 'expo-linear-gradient';
import CardFlip from 'react-native-card-flip';

const FlashCardDetail = ({ data }) => {
  const [isTurn, setIsTurn] = useState(false);
  const [index, setIndex] = useState(0);
  const [warning, setWarning] = useState('');
  const cardRef = useRef();

  const turnOver = () => {
    cardRef.current.flip();
    setIsTurn((prev) => !prev);
  };

  const nextCard = () => {
    if (index === Object.keys(data).length - 1) {
      setWarning('Last Card');
    } else {
      if (isTurn) {
        cardRef.current.flip();
      }
      setIndex((prevIndex) => prevIndex + 1);
      setIsTurn(false);
    }
  };

  const prevCard = () => {
    if (index === 0) {
      setWarning('First Card');
    } else {
      if (isTurn) {
        cardRef.current.flip();
      }
      setIndex((prevIndex) => prevIndex - 1);
      setIsTurn(false);
    }
  };

  useEffect(() => {
    if (warning !== '') {
      const id = setTimeout(() => {
        setWarning('');
      }, 3000);
      return () => {
        clearTimeout(id);
      };
    }
  }, [warning]);

  return (
    <View style={styles.cardContainer}>
      <CardFlip style={styles.card} ref={cardRef}>
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={['#4a90e2', '#50e3c2']}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}
          >
            <Text style={styles.cardQuestion}>{data[index].question}</Text>
          </LinearGradient>
        </View>
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={['#ac53ee', '#e5489f']}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}
          >
            <Text style={styles.cardQuestion}>{data[index].answer}</Text>
          </LinearGradient>
        </View>
      </CardFlip>

      {warning ? <Warning message={warning} /> : ''}

      <View style={styles.actionButtonsContainer}>
        <CardButton onPress={prevCard} icon={'arrow-back'} />
        <CardButton onPress={turnOver} icon={'autorenew'} />
        <CardButton onPress={nextCard} icon={'arrow-forward'} />
      </View>
    </View>
  );
};

export default FlashCardDetail;