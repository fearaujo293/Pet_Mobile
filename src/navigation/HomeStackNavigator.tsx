import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddPetScreen from '../screens/AddPetScreen';
import PetsScreen from '../screens/Petscreen';
import ConsultasScreen from '../screens/ConsultasScreen';

// Define os tipos de parâmetros para cada tela
export type HomeStackParamList = {
  Home: undefined;
  AddPet: undefined;
  PetScreen: { petId: string };
  Consultas: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddPet" component={AddPetScreen} />
      <Stack.Screen name="PetScreen" component={PetsScreen} />
      <Stack.Screen name="Consultas" component={ConsultasScreen} />
    </Stack.Navigator>
  );
}