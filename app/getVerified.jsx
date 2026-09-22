import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from 'expo-router';

import InputField from "../components/InputField";
import styles from "../components/styles";

import { validateGetVerified, validateRegister } from "../validations/authValidation";
import { useState } from "react";

export default function GetVerified() {
  const { role, name, email, password } = useLocalSearchParams();

  const [ companyName, setCompanyName ] = useState("")
  const [ branch, setBranch ] = useState("")
  const [ companyLoc, setCompanyLoc ] = useState("")
 
  const [error, setError] = useState("");

  const handleRegisterEmployer = () => {
  const validationError = validateGetVerified(companyName, companyLoc,);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    Alert.alert("Account Ceated Successfully", "Registration successful, but your verification request is still in process. We'll get back to you soon.", [
      {
        text: "OK",
        onPress: () => router.replace("/login"),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior="padding"
      style={{ flex: 1 }}
    >
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.card}>
        <Text style={styles.title}>
          Verify Employer Account
        </Text>
        <Text style={styles.subtitle}>
          Submit your business details and compliance documents for verification
        </Text>
          
        <View style={styles.form}>
          <InputField
            label="Company Name"
            placeholder="Enter your company Name"
            value={companyName}
            onChangeText={(text) => {
              setCompanyName(text);
              setError("");
            }}
          />

          <InputField
            label="Branch"
            placeholder="Enter branch, leave blank if none"
            value={branch}
            onChangeText={(text) => {
              setBranch(text);
              setError("");
            }}
          />

          <InputField
            label="Company Location"
            placeholder="Complete address of the company"
            value={companyLoc}
            onChangeText={(text) => {
              setCompanyLoc(text);
              setError("");
            }}
          />

          {error === "" ? null : (
            <Text style={styles.errorText}>
              {error}
            </Text>
          )}

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegisterEmployer}>
            <Text style={styles.registerButtonText}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
          
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}