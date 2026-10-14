import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

import { MaterialCommunityIcons, Octicons, Feather, Entypo } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';

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
      type: 'image',
      source: require('../assets/images/inJob-horizontal-light.png'), 
    },
    { 
      route: '/notifications', 
      library: Octicons,
      icon: 'bell-fill', 
      size: 22,
    }
  ];

  return (
    <View style={styles.topNavContainer}>
      {TopNavItems.map((item, index) => {
        if (item.type === 'image') {
          return (
            <View key={index} style={styles.topNavItem}>
              <Image 
                source={item.source} 
                style={styles.logoImg} 
                resizeMode="contain" 
              />
            </View>
          );
        }

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
              color="#ffffff"
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
    paddingTop: 34,
    backgroundColor: '#2623D3',
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