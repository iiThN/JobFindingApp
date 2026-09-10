import { useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import InputField from "../components/InputField";
import styles from "../components/styles";

import { validateLogin } from "../validations/authValidation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    const validationError = validateLogin(email, password);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    Alert.alert("Success", "Login successful!", [
      {
        text: "OK",
        onPress: () => router.replace("/(tabs)"),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>
          Welcome Back!
        </Text>

        <Text style={styles.subtitle}>
          Login to your account to continue
        </Text>

        <View style={styles.form}>

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

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() =>
              Alert.alert(
                "Forgot Password",
                "This feature is coming soon."
              )
            }
          >
            <Text style={styles.forgotText}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {error === "" ? null : (
            <Text style={styles.errorText}>
              {error}
            </Text>
          )}

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.registerContainer}>

          <Text style={styles.registerText}>
            Don't have an account?
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/register")}
          >
            <Text style={styles.registerLink}>
              Register
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}