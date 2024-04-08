import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Tipicos = ({ navigation }) => {
  const [tipicos, setTipicos] = useState([]);

  useEffect(() => {
    fetchTipicos();
  }, []);

  const fetchTipicos = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/b0e1b213-e9c4-4f83-bbc1-31abac02a58a');
      const data = await response.json();
      setTipicos(data);
    } catch (error) {
      console.error('Error fetching tipicos:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.tipicoItem} onPress={() => navigation.navigate('DetalleTipico', { tipico: item })}>
      <Image source={{ uri: item.foto }} style={styles.tipicoImage} />
      <Text style={styles.tipicoName}>{item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tipicos}
        renderItem={renderItem}
        keyExtractor={(item) => item.nombre}
        contentContainerStyle={styles.tipicoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tipicoList: {
    padding: 10,
  },
  tipicoItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  tipicoImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  tipicoName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Tipicos;