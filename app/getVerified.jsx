import {
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from 'expo-router';

import InputField from "../components/InputField";
import styles from "../components/styles";

import { validateRegister } from "../validations/authValidation";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>
          Wala pako Nahuman Boss, Pahuway sa ko
        </Text>

        <Text style={styles.subtitle}>
          GGS
        </Text>
      </View>
    </SafeAreaView>
  );
}