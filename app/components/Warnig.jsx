import {View, Text} from 'react-native'




const Warning = ({message}) => {


    return (
        <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
            {message}
            </Text>
        </View>
    )
}



import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  warningContainer: {
    backgroundColor: 'white', 
    borderColor: '#FDE047',     
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,    
    paddingHorizontal: 16,
  },
  warningText: {
    textAlign: 'center',
    color: 'red', 
    fontSize: 16,
    fontWeight: '600', 
  },
});



export default Warning