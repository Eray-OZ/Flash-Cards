import { StyleSheet } from "react-native";


const colors = {
  primary: "#4A90E2",
  backgroundLight: "#F5F7FA",
  backgroundDark: "#1a1c1e",
  cardLight: "#ffffff",
  cardDark: "#2c2f33",
  textPrimaryLight: "#333333",
  textPrimaryDark: "#e0e0e0",
  textSecondaryLight: "#757575",
  textSecondaryDark: "#a0a0a0",
};


const styles = StyleSheet.create({
safeArea: {
      flex: 1,
      backgroundColor: colors.backgroundLight,
    },
    container: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 8,
      backgroundColor:"#719efa",
    },
    headerTitle: {
      color:'black',
      fontSize: 24, 
      fontWeight: '700', 
      fontFamily: 'Lexend_700Bold', 
    },
    scrollView: {
      flex: 1,
    },
    scrollViewContent: {
      padding: 16,
      gap: 16,
    },
    deckCard: {
      flexDirection: 'row',
      gap: 16, 
      backgroundColor: "#f17f1cff",
      padding: 0, 
      borderRadius: 12, 
      width: '100%',
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 2, 
    },
    cardLeft: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 8, 
      flexGrow: 1,
    },
    cardIconContainer: {
      width: 48, 
      height: 48,
      borderRadius: 12, 
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0, 
    },
    cardTextContainer: {
      flex: 1, 
      justifyContent: 'center', 
    },
    cardTitle: {
      color: "black",
      fontSize: 18, 
      fontWeight: '600', 
      fontFamily: 'Lexend_600SemiBold',
    },
    cardSubtitle: {
      color: "black",
      fontSize: 14, 
      fontWeight: '400',
      marginTop: 4, 
      fontFamily: 'Lexend_400Regular',
    },
    cardInfoContainer: {
      justifyContent: 'flex-end', 
      flexShrink: 0, 
    },
    cardInfoText: {
      color: "black",
      fontSize: 14, 
      fontWeight: '500', 
      fontFamily: 'Lexend_500Medium',
      marginRight:20
    },
    fab: {
      position: 'absolute',
      bottom: 24, 
      right: 24, 
      width: 56,
      height: 56, 
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 28,
      backgroundColor: colors.primary,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
})


export default styles