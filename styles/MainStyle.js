import { StyleSheet } from 'react-native';

const rem = 16;

const styles = StyleSheet.create({


  mainContainer: {
    flex: 1,
    },

  contentArea: {
    flex: 1,
    padding: rem,
  },

  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default styles