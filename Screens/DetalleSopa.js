import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const DetalleSopa = ({ route, navigation }) => {
  const { sopa } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Detalles de la Sopa</Text>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: sopa.foto }} style={styles.sopaImage} />
        <Text><Text style={styles.label}>Nombre:</Text> {sopa.nombre}</Text>
        <Text><Text style={styles.label}>Descripción:</Text> {sopa.descripcion}</Text>
        <Text><Text style={styles.label}>Ingredientes:</Text> {sopa.ingredientes.join(', ')}</Text>
        <Text><Text style={styles.label}>Precio:</Text> ${sopa.precio.toFixed(2)}</Text>
        <Text><Text style={styles.label}>Región:</Text> {sopa.region}</Text>
        <Text><Text style={styles.label}>Categoría:</Text> {sopa.categoria}</Text>
      </View>
      <Button
        title="Volver"
        onPress={() => navigation.navigate('Sopas')}
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
  sopaImage: {
    width: '100%',
    aspectRatio: 2,
    resizeMode: 'cover',
    borderColor: '#000000',
    marginBottom: 10,
  },
});

export default DetalleSopa;
