// AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddPetScreen from '../screens/AddPetScreen';
import PetList from '../screens/PetList';
import FavoritesScreen from '../screens/FavoritesScreen';
import PetScreen from '../screens/Petscreen'; // ou PetDetailScreen, dependendo do nome

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddPet" component={AddPetScreen} />
      <Stack.Screen name="PetList" component={PetList} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="PetScreen" component={PetScreen} />
    </Stack.Navigator>
  );
}
