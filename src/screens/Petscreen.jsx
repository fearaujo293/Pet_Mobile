import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PetScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Pet Photo */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/pet.png')} // Replace with actual pet image source
            style={styles.petImage}
          />
        </View>

        {/* Input Fields */}
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.inputField} placeholder="Nome do Pet" />

        <Text style={styles.label}>Idade</Text>
        <TextInput style={styles.inputField} placeholder="Idade do Pet" keyboardType="numeric" />

        <Text style={styles.label}>Porte</Text>
        <TextInput style={styles.inputField} placeholder="Porte do Pet" />

        <Text style={styles.label}>Raça</Text>
        <TextInput style={styles.inputField} placeholder="Raça do Pet" />

        <Text style={styles.label}>Detalhes</Text>
        <TextInput
          style={[styles.inputField, styles.multilineInput]}
          placeholder="Detalhes adicionais"
          multiline
          numberOfLines={4}
        />

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6D5',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Ensure content is not hidden by bottom navigation
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  inputField: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F44336',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PetScreen;