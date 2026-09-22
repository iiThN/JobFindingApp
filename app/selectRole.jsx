import { useState } from "react";
import RoleCard from "../components/RoleCard";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../components/styles";

import { validateRegister } from "../validations/authValidation";

export default function SelectRole(){

  const [role, setRole] = useState("");
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.title}>
          Choose Your Role
        </Text>

        <Text style={styles.subtitle}>
          Select role before creating an account
        </Text>

        <View style={styles.roleSelection}>
          <RoleCard
            iconName="briefcase-search"
            iconSize={26}
            title="Job Seeker"
            subtitle="Browse for Jobs and Apply"
            onPress={() => router.push({
              pathname: '/register',
              params: { role: 'Job Seeker' }
            })}
          />

          <RoleCard
            iconName="account-tie"
            iconSize={30}
            title="Employer"
            subtitle="Post Job Openings and accept Applicants"
            onPress={() => router.push({
              pathname: '/register',
              params: { role: 'Employer' }
            })}
          />
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/login")}>
            <Text style={styles.loginLink}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}