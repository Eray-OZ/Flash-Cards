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
    backgroundColor: '#1a1c1e',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 16,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
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
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    flexGrow: 1,
  },
  cardIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  cardSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginTop: 4,
  },
  cardInfoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cardInfoText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#facc15',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});


export default styles