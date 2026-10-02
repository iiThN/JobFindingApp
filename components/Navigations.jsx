import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons, Octicons, Feather, Entypo } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const botNavItems = [
    { 
      route: '/', 
      library: Octicons,
      inactiveIcon: 'home', 
      activeIcon: 'home-fill',
      size: 24,
    },
/*     { 
      route: '/explore', 
      library: Octicons,
      inactiveIcon: 'search', 
      activeIcon: 'search',
      size: 24,

    }, */
    {
      route: '/findJob',
      library: MaterialCommunityIcons,
      inactiveIcon: 'briefcase-search-outline',
      activeIcon: 'briefcase-search',
      size: 27,
    },
    {
      route: '/jobApps',
      library: MaterialCommunityIcons,
      inactiveIcon: 'file-document-check-outline',
      activeIcon: 'file-document-check',
      size: 26,
    },
    { 
      route: '/profile',
      library: Octicons,
      inactiveIcon: 'person', 
      activeIcon: 'person-fill',
      size: 24,
    },
    
  ];

  return (
    <View style={styles.botNavContainer}>
      {botNavItems.map((item, index) => {
        const isActive = pathname === item.route || pathname === item.route + '/';
        const IconComponent = item.library;
        
        return (
          <TouchableOpacity
            key={index}
            style={styles.botNavItem}
            activeOpacity={0.5}
            onPress={() => router.navigate(item.route)}
          >
            <IconComponent
              name={isActive ? item.activeIcon : item.inactiveIcon}
              size={item.size || 24} // Uses item.size if defined, otherwise defaults to 24
              color={isActive ? '#2623d3' : '#9098a3'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export function TopNav() {
  const router = useRouter();

  <Menu strokeWidth={2.5} />

  const TopNavItems = [
    { 
      route: '/menu',
      library: Feather,
      icon: 'menu', 
      size: 28,
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
              size={item.size || 24}
              color="#ffffff"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  botNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    zIndex: 100,
  },
  botNavItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topNavContainer: {
    height: 56,
    backgroundColor: '#2623D3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  topNavItem: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});