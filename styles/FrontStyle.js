import { StyleSheet } from 'react-native';

const rem = 16;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 28 * rem,
    height: '70%', 
    maxHeight: 600,
    borderRadius: 3 * rem, 
    overflow: 'hidden',
    backgroundColor: '#f5f5dc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },

  cardBanner: {
    width: '100%',
    backgroundColor: '#1E3A8A',
    paddingVertical: 0.75 * rem,
    paddingHorizontal: 1.5 * rem,
  },

  cardBannerText: {
    color: '#ffffff',
    fontSize: 0.875 * rem, 
    fontWeight: '400',
    lineHeight: 1.5 * (0.875 * rem), 
  },

  cardBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 1.5 * rem,
    gap: 1.5 * rem, 
  },

  cardQuestion: {
    color: '#111827',
    fontSize: 1.875 * rem, 
    fontWeight: '700',
    lineHeight: 1.25 * (1.875 * rem), 
    letterSpacing: -0.015 * (1.875 * rem),
    textAlign: 'center', 
  },


});


export default styles