import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ConsultasScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Agendada');

  const renderContent = () => {
    const Card = ({ petName, service, time, imageSource, status }) => (
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DetalhesConsulta')}>
        <Image source={imageSource} style={styles.petImage} />
        <View style={styles.cardInfo}>
          <Text style={styles.petName}>{petName}</Text>
          <Text style={styles.service}>{service}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={[styles.statusBadgeCard, styles[`status${status}`]]}>
          <Text style={styles.statusTextCard}>{status}</Text>
        </View>
      </TouchableOpacity>
    );

    switch (activeTab) {
      case 'Agendada':
        return (
          <>
            <Card petName="Mascote 1" service="Consulta Geral" time="10:00 AM" imageSource={require('../assets/cat1.png')} status="Agendada" />
            <Card petName="Mascote 2" service="Vacinação" time="02:30 PM" imageSource={require('../assets/dog1.png')} status="Agendada" />
          </>
        );
      case 'Andamento':
        return (
          <>
            <Card petName="Mascote 3" service="Exame de Sangue" time="09:00 AM" imageSource={require('../assets/dog2.png')} status="Andamento" />
          </>
        );
      case 'Concluídas':
        return (
          <>
            <Card petName="Mascote 4" service="Tosa" time="04:00 PM" imageSource={require('../assets/cat1.png')} status="Concluída" />
            <Card petName="Mascote 5" service="Banho" time="01:00 PM" imageSource={require('../assets/dog1.png')} status="Concluída" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Consultas</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Agendada' && styles.activeTab]}
          onPress={() => setActiveTab('Agendada')}
        >
          <Text style={[styles.tabText, activeTab === 'Agendada' && styles.activeTabText]}>Agendada</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Andamento' && styles.activeTab]}
          onPress={() => setActiveTab('Andamento')}
        >
          <Text style={[styles.tabText, activeTab === 'Andamento' && styles.activeTabText]}>Andamento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Concluídas' && styles.activeTab]}
          onPress={() => setActiveTab('Concluídas')}
        >
          <Text style={[styles.tabText, activeTab === 'Concluídas' && styles.activeTabText]}>Concluídas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>{renderContent()}</ScrollView>

      <TouchableOpacity style={styles.scheduleButton} onPress={() => navigation.navigate('DetalhesConsulta')}>
        <Text style={styles.scheduleButtonText}>Agendar Consulta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEA',
    paddingHorizontal: 16,
  },
  headerContainer: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 12,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
    position: 'relative',
  },
  activeTab: {
    backgroundColor: '#A259FF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF0000',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    height: 80,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  petImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  petName: {
    fontWeight: 'bold',
    color: '#000000',
  },
  service: {
    fontSize: 12,
    color: '#7A7A7A',
  },
  time: {
    fontSize: 12,
    color: '#7A7A7A',
  },
  statusBadgeCard: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statusTextCard: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statusAgendada: {
    backgroundColor: '#A259FF',
  },
  statusAndamento: {
    backgroundColor: '#FFC107', // Example color for In Progress
  },
  statusConcluída: {
    backgroundColor: '#4CAF50', // Example color for Completed
  },
  scheduleButton: {
    backgroundColor: '#A259FF',
    height: 44,
    width: '80%',
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24, // Added for bottom spacing
  },
  scheduleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConsultasScreen;