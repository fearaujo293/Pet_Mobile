import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas
import HomeScreen from './src/screens/HomeScreen';
import PetList from './src/screens/PetList';
import AddPet from './src/screens/AddPetScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: '', // Remove o texto "Home" do topo
            headerStyle: {
              backgroundColor: '#FFF3B0', // Igual ao fundo da barra superior na HomeScreen
            },
            headerShadowVisible: false, // Remove a sombra da header (opcional)
          }}
        />
        <Stack.Screen 
          name="PetList" 
          component={PetList}
          options={{
            title: 'Meus Pets',
          }}
        />
        <Stack.Screen 
          name="AddPet" 
          component={AddPet}
          options={{
            title: 'Adicionar Pet',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
