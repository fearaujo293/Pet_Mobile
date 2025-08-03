import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PetList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Pets</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default PetList;
