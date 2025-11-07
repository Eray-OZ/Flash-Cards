import { StyleSheet } from 'react-native';

// rem -> dp dönüşümü için birim (1rem = 16dp kabul edilmiştir)
const rem = 16;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  contentArea: {
    flex: 1,
    padding: rem,
    paddingBottom: 1.5 * rem,
  },

  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    actionButtonsContainer: {
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 1.5 * rem,
    paddingTop: 1.5 * rem,
  },

  actionButton: {
    width: 4 * rem, 
    height: 4 * rem, 
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 2 * rem, 
    backgroundColor: '#a061ea',
  },

  actionButtonIcon: {
    color: '#ffffff', 
    fontSize: 1.875 * rem, 
  }
});


export default styles