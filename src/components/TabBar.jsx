import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

export default function TabBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="home" size={24} color="#333" />
        <Text style={styles.tabText}>Início</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('PetList')}
      >
        <Icon name="pets" size={24} color="#333" />
        <Text style={styles.tabText}>Pets</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('AddPet')}
      >
        <Icon name="add-circle" size={24} color="#333" />
        <Text style={styles.tabText}>Adicionar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('Favorites')}
      >
        <Icon name="favorite" size={24} color="#333" />
        <Text style={styles.tabText}>Favoritos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('Consultations')}
      >
        <Icon name="event" size={24} color="#333" />
        <Text style={styles.tabText}>Consultas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => navigation.navigate('Schedule')}
      >
        <Icon name="schedule" size={24} color="#333" />
        <Text style={styles.tabText}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFF3B0',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: width,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
});