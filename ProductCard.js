import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductCard = () => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.image} 
      />
      <Text style={styles.title}>Product Naam</Text>
      <Text style={styles.description}>Dit is een korte beschrijving van het product. Het ziet er nu al goed uit!</Text>
      <Button title="Bestel nu" color="#FF6347" onPress={() => alert('Besteld!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Voor Android schaduw
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
});

export default ProductCard;