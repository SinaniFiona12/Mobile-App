import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProductCard = ({ title, description, price, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {image && image.uri && <Image source={image} style={styles.image} />}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
        <Text style={styles.price}>€ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    borderColor: '#a24e4e', 
    borderWidth: 0.5,
    elevation: 3,
    shadowColor: '#a24e4e',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: { width: '100%', height: 180, resizeMode: 'cover' },
  infoContainer: { padding: 20 }, // Extra padding toegevoegd!
  title: { fontSize: 18, fontWeight: '300', color: '#a24e4e', marginBottom: 8 },
  description: { fontSize: 14, color: 'black', marginBottom: 12 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#a24e4e' },
});

export default ProductCard;