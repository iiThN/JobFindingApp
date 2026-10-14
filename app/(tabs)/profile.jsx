import { ScrollView, View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNav, { TopNav } from '../../components/Navigations';
import styles from "../../components/stylesIn";

export default function Profile() {
  return (
    <View style={styles.container}>
      <TopNav/>
      <SafeAreaView>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}