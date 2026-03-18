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
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, paddingTop: 50, alignItems: 'center' },
  image: { width: 200, height: 200, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 },
  price: { fontSize: 20, fontWeight: 'bold', color: '#FF69B4', marginBottom: 30 },
  
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  quantityText: { fontSize: 24, marginHorizontal: 20, fontWeight: 'bold' },
  
  button: { backgroundColor: '#FF69B4', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  
  totalPrice: { fontSize: 22, fontWeight: 'bold' },
  totalPrice: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  
  actionButton: { backgroundColor: '#FFB6C1', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20, width: '100%' },
  actionButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }

});

export default ProductDetail;