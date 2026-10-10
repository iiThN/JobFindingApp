import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>

        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="getVerified"
          options={{
            headerShown: true,
            title: "",
            headerStyle: {
              backgroundColor: "rgba(244, 246, 248, 0.8)",
            },
            headerShadowVisible: false,
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="selectRole"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="register"
          options={{
            headerShown: true,
            title: "",
            headerStyle: { backgroundColor: "#f4f6f8c7" },
            headerShadowVisible: false,
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}