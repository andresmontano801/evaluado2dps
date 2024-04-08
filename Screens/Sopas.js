import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Sopas = ({ navigation }) => {
  const [sopas, setSopas] = useState([]);

  useEffect(() => {
    fetchSopas();
  }, []);

  const fetchSopas = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/41beca31-125c-439f-8047-5c371b90f284');
      const data = await response.json();
      setSopas(data);
    } catch (error) {
      console.error('Error fetching sopas:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.sopaItem} onPress={() => navigation.navigate('DetalleSopa', { sopa: item })}>
      <Image source={{ uri: item.foto }} style={styles.sopaImage} />
      <Text style={styles.sopaName}>{item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sopas}
        renderItem={renderItem}
        keyExtractor={(item) => item.nombre}
        contentContainerStyle={styles.sopaList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sopaList: {
    padding: 10,
  },
  sopaItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sopaImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  sopaName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Sopas;