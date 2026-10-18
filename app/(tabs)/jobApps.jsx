import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { TopNav } from '../../components/Navigations';
import styles from "../../components/stylesIn";

export default function JobApps() {
  return (
    <View style={styles.container}>
      
      <SafeAreaView style={styles.homeContainer} edges={["top"]}>
        <TopNav />
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Job Applications</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}