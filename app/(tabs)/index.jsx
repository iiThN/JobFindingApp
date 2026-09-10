import {
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../../components/styles";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>
          JobFindingApp
        </Text>

        <Text style={styles.subtitle}>
          Find your next job opportunity.
        </Text>

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Welcome!
          </Text>

          <Text style={styles.cardText}>
            Your job search dashboard will appear here.
          </Text>

        </View>

      </View>
    </SafeAreaView>
  );
}