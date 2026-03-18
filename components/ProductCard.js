import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductCard = ({ title, description, price, image, onPress }) => {
  return (
    <View style={styles.card}>
      <Image
        source={image || { uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>{title || "Product Naam"}</Text>
      <Text style={styles.description}>
        {description || "Dit is een korte beschrijving."}
      </Text>
      
      <Button
        title="Bestel nu"
        color="#FF69B4" 
        onPress={onPress}
      />
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
    marginVertical: 10,
  },
});

export default ProductCard;