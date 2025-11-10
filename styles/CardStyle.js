import { StyleSheet } from 'react-native';

const rem = 16;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#1a1c1e',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: rem,
  },
  card: {
    width: '100%',
    height: '70%',
    maxHeight: 600,
    borderRadius: rem * 0.75,
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: rem * 0.75,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cardBack: {
    // transform: [{ rotateY: '180deg' }] // Initial rotation is handled by reanimated
  },
  cardGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rem * 0.75,
    padding: rem * 2,
  },
  cardQuestion: {
    color: '#ffffff',
    fontSize: rem * 1.875,
    fontWeight: 'bold',
    lineHeight: rem * 2.25,
    textAlign: 'center',
  },
  hr: {
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    marginVertical: rem,
  },
  progressText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: rem * 1.5,
    padding: rem * 1.5,
    backgroundColor: 'transparent',
  },
  actionButton: {
    width: rem * 4,
    height: rem * 4,
    borderRadius: rem * 2,
    backgroundColor: '#2c2f33',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionButtonIcon: {
    color: '#ffffff',
    fontSize: rem * 2.25,
  },
});

export default styles;