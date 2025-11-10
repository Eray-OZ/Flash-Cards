import { View, Text } from 'react-native';
import styles from '../../styles/CardStyle.js';
import CardButton from './CardButton.jsx';
import { useEffect, useState } from 'react';
import Warning from './Warnig.jsx';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';

const FlashCardDetail = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [warning, setWarning] = useState('');

  const rotate = useSharedValue(0);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
    };
  });

  const turnOver = () => {
    rotate.value = withTiming(rotate.value === 0 ? 1 : 0, { duration: 500 });
  };

  const resetCard = (callback) => {
    if (rotate.value !== 0) {
      rotate.value = withTiming(0, { duration: 500 });
    }
    // Execute callback after flip animation duration
    setTimeout(() => {
        if(callback) callback();
    }, rotate.value !== 0 ? 500 : 0);
  }

  const nextCard = () => {
    if (index === Object.keys(data).length - 1) {
      setWarning('Last Card');
    } else {
      resetCard(() => setIndex((prevIndex) => prevIndex + 1));
    }
  };

  const prevCard = () => {
    if (index === 0) {
      setWarning('First Card');
    } else {
      resetCard(() => setIndex((prevIndex) => prevIndex - 1));
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

  // Reset flip state when card index changes, without animation
  useEffect(() => {
    rotate.value = 0;
  }, [index]);


  return (
    <View style={styles.cardContainer}>
      {warning ? <Warning message={warning} /> : null}
      <Text style={styles.progressText}>{index + 1}/{Object.keys(data).length}</Text>
      <View style={styles.card}>
        <Animated.View style={[styles.cardFace, frontAnimatedStyle]}>
           <LinearGradient
            colors={['#4a90e2', '#50e3c2']}
            style={styles.cardGradient}
          >
            <Text style={styles.cardQuestion}>{data[index].question}</Text>
          </LinearGradient>
        </Animated.View>
        <Animated.View style={[styles.cardFace, styles.cardBack, backAnimatedStyle]}>
           <LinearGradient
            colors={['#ac53ee', '#e5489f']}
            style={styles.cardGradient}
          >
            <Text style={styles.cardQuestion}>{data[index].answer}</Text>
          </LinearGradient>
        </Animated.View>
      </View>

      <View style={styles.actionButtonsContainer}>
        {index > 0 ? (<CardButton onPress={prevCard} icon={'arrow-back'} />) : (<View style={{width: 64}} />)}
        <CardButton onPress={turnOver} icon={'autorenew'} />
        {index !== Object.keys(data).length - 1 ? (<CardButton onPress={nextCard} icon={'arrow-forward'} />) : (<View style={{width: 64}} />)}
      </View>
    </View>
  );
};

export default FlashCardDetail;
