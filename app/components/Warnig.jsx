import {View, Text} from 'react-native'
import styles from '../../styles/WarningStyle.js'

const Warning = ({message}) => {


    return (
        <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
            {message}
            </Text>
        </View>
    )
}

export default Warning