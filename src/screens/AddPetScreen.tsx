import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Para a funcionalidade de escolher foto, você precisará de uma biblioteca como a 'expo-image-picker'.
// Ex: import * as ImagePicker from 'expo-image-picker';

// Placeholder para a imagem padrão do avatar
const placeholderAvatar = require('../assets/cat1.png'); // Usando uma imagem existente como placeholder

export default function AddPetScreen() {
  const navigation = useNavigation();
  const [image, setImage] = useState<string | null>(null);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [porte, setPorte] = useState('');
  const [raca, setRaca] = useState('');
  const [detalhes, setDetalhes] = useState('');

  const handleChoosePhoto = async () => {
    // A lógica para escolher uma imagem da galeria iria aqui.
    // Exemplo com expo-image-picker:
    /*
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    */
    Alert.alert("Funcionalidade indisponível", "A seleção de imagem precisa ser implementada com uma biblioteca externa.");
  };

  const handleAddPet = () => {
    // Lógica para salvar os dados do pet
    console.log({ nome, idade, porte, raca, detalhes, image });
    Alert.alert("Sucesso", "Novo pet adicionado!");
    navigation.goBack(); // Volta para a tela anterior
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Pets</Text>

        <TouchableOpacity onPress={handleChoosePhoto} style={styles.avatarContainer}>
          <Image
            source={image ? { uri: image } : placeholderAvatar}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Flinter"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.input}
              value={idade}
              onChangeText={setIdade}
              placeholder="6"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Porte</Text>
            <TextInput
              style={styles.input}
              value={porte}
              onChangeText={setPorte}
              placeholder="Pequeno"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Raça</Text>
            <TextInput
              style={styles.input}
              value={raca}
              onChangeText={setRaca}
              placeholder="Siamês"
            />
          </View>
        </View>

        <Text style={styles.label}>Detalhes</Text>
        <TextInput
          style={styles.detailsInput}
          value={detalhes}
          onChangeText={setDetalhes}
          placeholder="Escreva algo sobre o pet..."
          multiline
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddPet}>
            <Text style={styles.buttonText}>ADICIONAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFDF5', // Cor de fundo amarelada claro
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  avatarContainer: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputGroup: {
    width: '48%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    fontSize: 16,
  },
  detailsInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    height: 120,
    padding: 12,
    fontSize: 16,
    textAlignVertical: 'top', // Para Android
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#34D399', // Verde
    paddingVertical: 15,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#EF4444', // Vermelho
    paddingVertical: 15,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});