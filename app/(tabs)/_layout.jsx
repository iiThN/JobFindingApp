import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2623d3',
        tabBarInactiveTintColor: '#9098a3',
        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            activeOpacity={1}
            android_ripple={{ color: 'transparent' }}
          />
        ),
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: 8,
          height: 60,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
          zIndex: 100,

        },
        tabBarItemStyle: {
          height: 60,
        },
        tabBarShowLabel: false, 
        animation: 'none',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Octicons
              name={focused ? 'home-fill' : 'home'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="findJob"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'briefcase-search' : 'briefcase-search-outline'}
              size={27}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="jobApps"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'file-document-check' : 'file-document-check-outline'}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Octicons
              name={focused ? 'person-fill' : 'person'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}