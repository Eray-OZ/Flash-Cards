import styles from '../../styles/CardStyle'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'



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
                <MaterialIcons name={icon} style={styles.actionButtonIcon} />
        </TouchableOpacity>
        </>
    )
}

export default CardButton