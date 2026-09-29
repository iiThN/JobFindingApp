import { useState, useEffect, useRef } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView

} from "react-native";

import { useLocalSearchParams } from 'expo-router';

import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "../components/InputField";
import styles from "../components/styles";

import { validateRegister } from "../validations/authValidation";

export default function Register() {

  const navigation = useNavigation();
  const { role } = useLocalSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const isIntentionalNavigation = useRef(false);

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

    if (role === 'Job Seeker') {
      Alert.alert("Success", "Registration successful!", [
        {
          text: "OK",
          onPress: () => {
            isIntentionalNavigation.current = true;
            router.replace("/login");
          },
        },
      ]);
    }

    if (role === 'Employer') {
      isIntentionalNavigation.current = true;
      router.push({
        pathname: '/getVerified',
        params: { 
          role: role, 
          name: name, 
          email: email, 
          password: password 
        }
      });
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (isIntentionalNavigation.current) {
        return;
      }

      e.preventDefault();

      Alert.alert(
        "Stop creating account?",
        "If you stop now you'll lose any progress you've made.",
        [
          {
            text: "Continue creating account",
            style: "cancel",
            onPress: () => {}
          },
          {
            text: "Stop creating account",
            style: "destructive",
            onPress: () => {
              navigation.dispatch(e.data.action);
            },
          },
        ]
      );
    });

    return unsubscribe;
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding"
        style={{ flex: 1 }}>
      <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          showsVerticalScrollIndicator={false}>
      <View style={styles.card}>

        {role === 'Job Seeker' && (
          <>
            <Text style={styles.title}>
              Join as a Job Seeker
            </Text>
          </>
        )}

        {role === 'Employer' && (
          <>
            <Text style={styles.title}>
              Join as an Employer
            </Text>
          </>
        )}
        <Text style={styles.subtitle}>
          Set up your account to start 
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
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}