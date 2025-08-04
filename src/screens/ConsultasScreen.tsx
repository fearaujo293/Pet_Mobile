import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importar as imagens dos pets (usar as mesmas do seu projeto)
const cat1 = require('../assets/cat1.png');
const dog2 = require('../assets/dog2.png');

interface Consulta {
  id: string;
  mascote: string;
  servico: string;
  horario: string;
  imagem: any;
  status: 'pendente' | 'concluida';
}

const consultasData: Consulta[] = [
  {
    id: '1',
    mascote: 'Gato',
    servico: 'Consulta de rotina',
    horario: 'Noite',
    imagem: cat1,
    status: 'pendente',
  },
  {
    id: '2',
    mascote: 'Cachorro',
    servico: 'Vacinação',
    horario: 'Tarde',
    imagem: dog2,
    status: 'concluida',
  },
];

export default function ConsultasScreen() {
  const navigation = useNavigation();
  const [filtroAtivo, setFiltroAtivo] = useState<'pendente' | 'concluida'>('pendente');

  const consultasFiltradas = consultasData.filter(consulta => 
    consulta.status === filtroAtivo
  );

  const contadorPendentes = consultasData.filter(c => c.status === 'pendente').length;
  const contadorConcluidas = consultasData.filter(c => c.status === 'concluida').length;

  const renderConsultaItem = (item: Consulta) => (
    <TouchableOpacity key={item.id} style={styles.consultaCard}>
      <Image source={item.imagem} style={styles.petImage} />
      <View style={styles.consultaInfo}>
        <Text style={styles.label}>Mascote: <Text style={styles.info}>{item.mascote}</Text></Text>
        <Text style={styles.label}>Serviço: <Text style={styles.info}>{item.servico}</Text></Text>
        <Text style={styles.label}>Horário: <Text style={styles.info}>{item.horario}</Text></Text>
      </View>
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>&gt;</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Consultas</Text>
      </View>

      {/* Filtros */}
      <View style={styles.filtroContainer}>
        <TouchableOpacity
          style={[
            styles.filtroButton,
            filtroAtivo === 'pendente' && styles.filtroAtivo
          ]}
          onPress={() => setFiltroAtivo('pendente')}
        >
          <Text style={[
            styles.filtroText,
            filtroAtivo === 'pendente' && styles.filtroTextAtivo
          ]}>
            Pendentes
          </Text>
          {contadorPendentes > 0 && (
            <View style={styles.contador}>
              <Text style={styles.contadorText}>{contadorPendentes}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filtroButton,
            filtroAtivo === 'concluida' && styles.filtroAtivo
          ]}
          onPress={() => setFiltroAtivo('concluida')}
        >
          <Text style={[
            styles.filtroText,
            filtroAtivo === 'concluida' && styles.filtroTextAtivo
          ]}>
            Concluídas
          </Text>
          {contadorConcluidas > 0 && (
            <View style={styles.contador}>
              <Text style={styles.contadorText}>{contadorConcluidas}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Lista de Consultas */}
      <ScrollView style={styles.consultasList} showsVerticalScrollIndicator={false}>
        {consultasFiltradas.map(renderConsultaItem)}
      </ScrollView>

      {/* Botão Agendar Consulta */}
      <TouchableOpacity
        style={styles.agendarButton}
        onPress={() => {
          // Aqui você pode navegar para uma tela de agendamento
          console.log('Agendar nova consulta');
        }}
      >
        <Text style={styles.agendarButtonText}>Agendar Consulta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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
  filtroContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 4,
  },
  filtroButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  filtroAtivo: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  filtroText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  filtroTextAtivo: {
    color: '#333',
  },
  contador: {
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  contadorText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  consultasList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  consultaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 6,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  consultaInfo: {
    flex: 1,
  },
  label: {
    fontWeight: '600',
    color: '#333',
    fontSize: 14,
    marginBottom: 2,
  },
  info: {
    fontWeight: 'normal',
    color: '#666',
  },
  arrowContainer: {
    backgroundColor: '#9F70FD',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  agendarButton: {
    backgroundColor: '#9F70FD',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  agendarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});