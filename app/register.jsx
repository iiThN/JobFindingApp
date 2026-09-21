import { useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useLocalSearchParams } from 'expo-router';

import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "../components/InputField";
import styles from "../components/styles";

import { validateRegister } from "../validations/authValidation";

export default function Register() {

  const { role } = useLocalSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const handleRegister = () => {
    const validationError = validateRegister(
      name,
      email,
      password,
      confirmPassword
    );

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    {role === 'Job Seeker' && (
      Alert.alert("Success", "Registration successful!", [
            {
              text: "OK",
              onPress: () => router.replace("/login"),
            },
          ])
    )}

    {role === 'Employer' && (
      router.push('/getVerified')
    )}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>
          Create Account
        </Text>

        <Text style={styles.subtitle}>
          Registering as
          {role === 'Job Seeker' && (<Text> a</Text>)}
          {role === 'Employer' && (<Text> an</Text>)}
          <Text style={{color: '#1C2834', fontWeight: 'bold'}}> {role}</Text>
        </Text>

        <View style={styles.form}>

          <InputField
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              setError("");
            }}
          />

          <InputField
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setError("");
            }}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setError("");
            }}
            secureTextEntry
          />

          <InputField
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setError("");
            }}
            secureTextEntry
          />

          {error === "" ? null : (
            <Text style={styles.errorText}>
              {error}
            </Text>
          )}


          {role === 'Job Seeker' && (
            <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}>
            <Text style={styles.registerButtonText}>
              Register
            </Text>
          </TouchableOpacity>
          )}

          {role === 'Employer' && (
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}>
              <Text style={styles.registerButtonText}>
                Get Verified
              </Text>
          </TouchableOpacity>
          )}

        </View>

        <View style={styles.loginContainer}>

          <Text style={styles.loginText}>
            Already have an account?
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/login")}
          >
            <Text style={styles.loginLink}>
              Login
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}