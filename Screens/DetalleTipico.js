import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const DetalleTipico = ({ route, navigation }) => {
  const { tipico } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Detalles del Típico</Text>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: tipico.foto }} style={styles.flagImage} />
        <Text><Text style={styles.label}>Nombre:</Text> {tipico.nombre}</Text>
        <Text><Text style={styles.label}>Descripción:</Text> {tipico.descripcion}</Text>
        <Text><Text style={styles.label}>Ingredientes:</Text> {tipico.ingredientes.join(', ')}</Text>
        <Text><Text style={styles.label}>Precio:</Text> ${tipico.precio.toFixed(2)}</Text>
        <Text><Text style={styles.label}>Región:</Text> {tipico.region}</Text>
        <Text><Text style={styles.label}>Categoría:</Text> {tipico.categoria}</Text>
      </View>
      <Button
        title="Volver"
        onPress={() => navigation.navigate('Tipicos')}
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
  flagImage: {
    width: '100%',
    aspectRatio: 2,
    resizeMode: 'cover',
    borderColor: '#000000',
    marginBottom: 10,
  },
});

export default DetalleTipico;