import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Imagens exemplo de pets (substitua pelas suas imagens reais)
import dog1 from '../assets/dog1.png';
import dog2 from '../assets/dog2.png';
import cat1 from '../assets/cat1.png';

const pets = [
  {
    id: '1',
    nome: 'Cachorro',
    servico: 'Consulta urgente',
    horario: 'O mais antes possível',
    imagem: dog1,
  },
  {
    id: '2',
    nome: 'Cachorro',
    servico: 'Vacinação',
    horario: 'Manhã',
    imagem: dog2,
  },
  {
    id: '3',
    nome: 'Gato',
    servico: 'Consulta urgente',
    horario: 'Tarde',
    imagem: cat1,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderPetItem = ({ item }: { item: typeof pets[0] }) => (
    <View style={styles.petCard}>
      <Image source={item.imagem} style={styles.petImage} />
      <View style={styles.petInfo}>
        <Text style={styles.label}>Mascote: <Text style={styles.info}>{item.nome}</Text></Text>
        <Text style={styles.label}>Serviço: <Text style={styles.info}>{item.servico}</Text></Text>
        <Text style={styles.label}>Horário: <Text style={styles.info}>{item.horario}</Text></Text>
      </View>
      <Text style={styles.arrow}>&gt;</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pets</Text>
      </View>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddPet' as never)}
      >
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>

      {/* Rodapé fixo (pode ser trocado por Tab.Navigator) */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.icon}>🐶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.icon}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.icon}>🐾</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.icon}>🩺</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.icon}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFF3B0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 12,
    elevation: 3,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 12,
  },
  petInfo: {
    flex: 1,
  },
  label: {
    fontWeight: '600',
    color: '#333',
  },
  info: {
    fontWeight: 'normal',
    color: '#333',
  },
  arrow: {
    fontSize: 22,
    color: '#6A0DAD',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#9F70FD',
    marginHorizontal: 50,
    marginVertical: 10,
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#FFEFEF',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconButton: {
    padding: 6,
  },
  icon: {
    fontSize: 22,
  },
});
