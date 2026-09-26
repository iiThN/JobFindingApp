import { ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNav, { TopNav } from '../../components/Navigations';
import styles from "../../components/stylesIn";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav/>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

      </ScrollView>
      <BottomNav/>
    </SafeAreaView>
  );
}