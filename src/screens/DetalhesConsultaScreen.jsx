import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetalhesConsultaScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#A259FF" />
          </TouchableOpacity>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Agendada</Text>
          </View>
        </View>

        {/* Main Card */}
        <View style={styles.mainCard}>
          {/* Pet Info */}
          <View style={styles.petInfoContainer}>
            <Image
              source={require('../assets/cat1.png')} // Placeholder image
              style={styles.petImage}
            />
            <Text style={styles.petName}>Benjie</Text>
          </View>

          {/* Consultation Details */}
          <View style={styles.section}>
            <View style={styles.detailRow}>
              <Text style={styles.detailText}>15:23 | 05/02/2025</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailText}>Estômago</Text>
            </View>
          </View>

          {/* Symptom Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descrição dos Sintomas</Text>
            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>
                Meu cachorro acordou vomitando, ele está dormindo mais que o normal e não está comendo nada, não sei o que fazer.
              </Text>
            </View>
          </View>

          {/* Required Implements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Implementos Necessários</Text>
            <View style={styles.tagsContainer}>
              <View style={[styles.tag, styles.tagGreen]}><Text style={styles.tagTextGreen}>Termômetro</Text></View>
              <View style={[styles.tag, styles.tagGreen]}><Text style={styles.tagTextGreen}>Estetoscópio</Text></View>
              <View style={[styles.tag, styles.tagGreen]}><Text style={styles.tagTextGreen}>Soro</Text></View>
              <View style={[styles.tag, styles.tagRed]}><Text style={styles.tagTextRed}>Vermífugo</Text></View>
            </View>
          </View>

          {/* Observation */}
          <View style={styles.section}>
            <Text style={styles.observationText}>
              Dependendo do caso, recomendamos que você traga qualquer item adicional que considere levar.
            </Text>
          </View>

          {/* Location */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Localização</Text>
            <Text style={styles.locationText}>
              R. Bento Branco de Andrade Filho, 379 – Santo Amaro, São Paulo – SP, 04757-000
            </Text>
            <View style={styles.mapIconsContainer}>
              {/* Placeholder for map icons */}
              <Image source={require('../assets/icone.png')} style={styles.mapIcon} />
              <Image source={require('../assets/icone.png')} style={styles.mapIcon} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEA',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  statusBadge: {
    backgroundColor: '#A259FF',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: '90%',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.22,
    elevation: 2,
  },
  petInfoContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  petImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 8,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  section: {
    marginBottom: 12,
  },
  detailRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  detailText: {
    fontSize: 13,
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 4,
  },
  descriptionBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  descriptionText: {
    fontSize: 13,
    color: '#000000',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagGreen: {
    backgroundColor: '#E6F9F0',
  },
  tagTextGreen: {
    color: '#028A43',
    fontSize: 12,
  },
  tagRed: {
    backgroundColor: '#FDECEC',
  },
  tagTextRed: {
    color: '#C62828',
    fontSize: 12,
  },
  observationText: {
    fontSize: 12,
    color: '#7A7A7A',
  },
  locationText: {
    fontSize: 13,
    color: '#000000',
    marginBottom: 8,
  },
  mapIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mapIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default DetalhesConsultaScreen;