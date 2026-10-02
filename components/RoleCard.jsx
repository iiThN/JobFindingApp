import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RoleCard({ 
  iconName, 
  iconSize, 
  title, 
  subtitle, 
  onPress 
}) {
  return (
    <TouchableOpacity 
      style={styles.roleCard} 
      activeOpacity={0.5} 
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={iconName} size={iconSize} color="#2623D3" />
      </View>
      <Text style={styles.roleTitle}>{title}</Text>
      <Text style={styles.roleSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  roleCard: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#2623D3',
    width: '100%',
    padding: 20,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10,
    // borderWidth: 1.5,
    // borderColor: '#2623D3'

  },
  
  iconContainer: {
    borderRadius: '100%',
    justifyContent: "center",
    alignItems: 'center',
    width:50,
    height: 50,
    backgroundColor: '#FFFFFF',
    // borderWidth: 1.5,
    // borderColor: '#777777'
  },
  
  roleTitle:{
    fontWeight: '800',
    fontSize: 18,
    letterSpacing: 0.4,
    color: '#FFD443',
  },
  
  roleSubtitle: {
    color: '#FFFFFF'
  },
});