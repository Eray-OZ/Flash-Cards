import styles from '../../styles/CardStyle'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'



const CardButton = ({onPress, icon}) => {


    const triggerParentFn = () => {
        if (onPress) {
            onPress()
        }
    }


    return (
        <>
        <TouchableOpacity 
            onPress={triggerParentFn}
            style={styles.actionButton}>
                <MaterialCommunityIcons name={icon} style={styles.actionButtonIcon} />
        </TouchableOpacity>
        </>
    )
}

export default CardButton