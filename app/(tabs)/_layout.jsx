import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >

      <Stack.Screen name="index"/>
      <Stack.Screen name="findJob"/>
      <Stack.Screen name="jobApps"/>
      <Stack.Screen name="profile"/>
  
    </Stack>
  );
}