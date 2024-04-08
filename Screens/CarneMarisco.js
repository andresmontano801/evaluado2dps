import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CarneMarisco = ({ navigation }) => {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    fetchPlatos();
  }, []);

  const fetchPlatos = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/ba3c61b9-8718-4ee5-a12a-46554a1ccb0b');
      const data = await response.json();
      setPlatos(data);
    } catch (error) {
      console.error('Error fetching platos:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.platoItem} onPress={() => navigation.navigate('DetalleCarneMarisco', { plato: item })}>
      <Image source={{ uri: item.foto }} style={styles.platoImage} />
      <Text style={styles.platoName}>{item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={platos}
        renderItem={renderItem}
        keyExtractor={(item) => item.nombre}
        contentContainerStyle={styles.platoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  platoList: {
    padding: 10,
  },
  platoItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  platoImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  platoName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default CarneMarisco;