import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2623d3',
  },
  scrollContent: {
    flex: 1,
    padding: 20,
    paddingBottom: 90,
    minHeight: '100%',
    backgroundColor: '#ffffff' // Crucial: gives space at the bottom so content isn't hidden behind the fixed bar
  },
})

export default styles;