import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeStackNavigator from './HomeStackNavigator';

// Ícones para as abas
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: any;
            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favoritos') {
              iconName = focused ? 'heart' : 'heart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6A0DAD',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Início" component={HomeStackNavigator} /> 
        <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}