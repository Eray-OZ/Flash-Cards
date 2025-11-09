import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  warningContainer: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    backgroundColor: 'rgba(220, 38, 38, 0.8)',
    borderRadius: 8,
    padding: 16,
    zIndex: 1,
  },
  warningText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
