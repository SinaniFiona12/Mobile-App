import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

const ProductDetail = ({ route }) => {
  // Haal de doorgestuurde data op (of gebruik standaard waarden als er iets mis gaat)
  const { title, description, price, image } = route.params || {
    title: "Product", description: "", price: "0", image: null
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={image || require('../assets/haarborstel.jpg')} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>Prijs: €{price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        
        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalPrice}>Totaal: €{Number(price) * quantity}</Text>
      
      {}
      <TouchableOpacity 
        style={styles.actionButton} 
        onPress={() => alert('Toegevoegd aan winkelwagen!')}
      >
        <Text style={styles.actionButtonText}>In winkelwagen</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5ef', // Jouw 'Soie' achtergrondkleur
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '300', // Licht lettertype (simuleert CMU Extra Light)
    color: '#a24e4e', // Jouw titelkleur
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#a24e4e', // Jouw titelkleur
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'black', // Jouw tekstkleur
    fontWeight: '400', // Simuleert Muli Normal
    lineHeight: 24,
    marginBottom: 30,
  },
  // ... de rest van je stijlen (zoals de + en - knoppen) kun je zo laten of ook #a24e4e geven!
});

export default ProductDetail;