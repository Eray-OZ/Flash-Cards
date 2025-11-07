import styles from '../../styles/MainStyle'
import { View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'



const ButtonsContainer = ({onPress}) => {


    const triggerParentFn = () => {
        if (onPress) {
            onPress()
        }
    }


    return (
    <View style={styles.actionButtonsContainer}>

        <TouchableOpacity 
            onPress={triggerParentFn}
            style={styles.actionButton}>
                <MaterialCommunityIcons name="sync" style={styles.actionButtonIcon} />
        </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <MaterialCommunityIcons name="arrow-right" style={styles.actionButtonIcon} />
            </TouchableOpacity>
    </View>
    )
}

export default ButtonsContainer