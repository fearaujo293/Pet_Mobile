// src/screens/AddPetScreen.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddPetScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [porte, setPorte] = useState('');
  const [raca, setRaca] = useState('');
  const [detalhes, setDetalhes] = useState('');

  const handleSave = () => {
    if (!nome || !idade || !porte || !raca) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const newPet = {
      nome,
      idade,
      porte,
      raca,
      detalhes,
    };

    console.log('Novo pet salvo:', newPet);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pets</Text>

      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/pet.png')} // Placeholder image
          style={styles.avatar}
        />
      </View>

      <View style={styles.form}>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do pet"
              placeholderTextColor="#7A7A7A"
              value={nome}
              onChangeText={setNome}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.input}
              placeholder="Idade"
              placeholderTextColor="#7A7A7A"
              keyboardType="numeric"
              value={idade}
              onChangeText={setIdade}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Porte</Text>
            <TextInput
              style={styles.input}
              placeholder="Porte do pet"
              placeholderTextColor="#7A7A7A"
              value={porte}
              onChangeText={setPorte}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Raça</Text>
            <TextInput
              style={styles.input}
              placeholder="Raça do pet"
              placeholderTextColor="#7A7A7A"
              value={raca}
              onChangeText={setRaca}
            />
          </View>
        </View>

        <Text style={styles.label}>Detalhes</Text>
        <TextInput
          style={styles.detailsInput}
          placeholder="Detalhes adicionais"
          placeholderTextColor="#7A7A7A"
          multiline
          value={detalhes}
          onChangeText={setDetalhes}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEA',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 16,
    marginBottom: 12,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  form: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  inputContainer: {
    width: '48%',
  },
  label: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    fontSize: 14,
    color: '#000000',
  },
  detailsInput: {
    height: 120,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 14,
    color: '#000000',
    textAlignVertical: 'top',
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  saveButton: {
    backgroundColor: '#00C851',
    width: 140,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF0000',
    width: 140,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});