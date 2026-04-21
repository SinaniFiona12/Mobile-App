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
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    // Een subtiel randje in de 'Soie' kleur maakt het meer één geheel
    borderColor: '#a24e4e', 
    borderWidth: 0.5,
    // Schaduw voor luxe uitstraling
    elevation: 3,
    shadowColor: '#a24e4e',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '300', // Elegante lichte letters
    color: '#a24e4e',   // Jouw button kleur
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a24e4e',   // Prijs in dezelfde kleur als de button
  },
});

export default ProductCard;