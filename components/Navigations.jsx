import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Feather, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export function TopNav() {
  const router = useRouter();

  <Menu strokeWidth={2.5} />

  const TopNavItems = [
    { 
      route: '/drawer/menu',
      library: Feather,
      icon: 'menu', 
      size: 28,
    },
    { 
      route: '/notifications', 
      library: Octicons,
      icon: 'bell-fill', 
      size: 21,
    }
  ];

  return (
    <View style={styles.topNavContainer}>
      {TopNavItems.map((item, index) => {
        const IconComponent = item.library;
        return (
          <TouchableOpacity
            key={index}
            style={styles.topNavItem}
            activeOpacity={0.5}
            onPress={() => router.navigate(item.route)}
          >
            <IconComponent
              name={item.icon}
              size={item.size}
              color="#111C4B"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({

  topNavContainer: {
    width: '100%',
    backgroundColor: '#F6F8FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  topNavItem: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: 20,
    width: 100,
    resizeMode: 'contain',  
  }
});