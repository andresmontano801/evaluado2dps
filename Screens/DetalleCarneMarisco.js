import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const DetalleCarneMarisco = ({ route, navigation }) => {
  const { plato } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Detalles del Plato</Text>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: plato.foto }} style={styles.platoImage} />
        <Text><Text style={styles.label}>Nombre:</Text> {plato.nombre}</Text>
        <Text><Text style={styles.label}>Descripción:</Text> {plato.descripcion}</Text>
        <Text><Text style={styles.label}>Ingredientes:</Text> {plato.ingredientes.join(', ')}</Text>
        <Text><Text style={styles.label}>Precio:</Text> ${plato.precio.toFixed(2)}</Text>
        <Text><Text style={styles.label}>Región:</Text> {plato.region}</Text>
        <Text><Text style={styles.label}>Categoría:</Text> {plato.categoria}</Text>
      </View>
      <Button
        title="Volver"
        onPress={() => navigation.navigate('CarneMarisco')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 20,
    width: '80%',
  },
  label: {
    fontWeight: 'bold',
  },
  platoImage: {
    width: '100%',
    aspectRatio: 2,
    resizeMode: 'cover',
    borderColor: '#000000',
    marginBottom: 10,
  },
});

export default DetalleCarneMarisco;