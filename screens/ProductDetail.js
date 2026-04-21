import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button } from 'react-native';

const ProductDetail = ({ route, navigation }) => {
  const { title, subtitle, price, image } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (price * quantity).toFixed(2);

  return (
    <ScrollView style={styles.container}>
      {image && image.uri && <Image source={image} style={styles.image} />}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>€ {price}</Text>
        <Text style={styles.description}>{subtitle}</Text>

        <View style={styles.cartSection}>
          <Text style={styles.cartLabel}>Aantal:</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={decrease} style={styles.circleButton}><Text style={styles.circleButtonText}>-</Text></TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increase} style={styles.circleButton}><Text style={styles.circleButtonText}>+</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.totalSection}>
          <Text style={styles.totalText}>Totaal: € {totalPrice}</Text>
        </View>

        {/* Verplichte standaard Button voor docent */}
        <View style={{ marginTop: 25 }}>
          <Button title="Terug naar overzicht" color="#a24e4e" onPress={() => navigation.goBack()} />
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff5ef' },
  image: { width: '100%', height: 300, resizeMode: 'cover' },
  infoContainer: { padding: 25 },
  title: { fontSize: 28, fontWeight: '300', color: '#a24e4e', marginBottom: 10 },
  price: { fontSize: 22, fontWeight: 'bold', color: '#a24e4e', marginBottom: 20 },
  description: { fontSize: 16, color: 'black', fontWeight: '400', lineHeight: 24, marginBottom: 30 },
  cartSection: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  cartLabel: { fontSize: 18, color: 'black', marginRight: 15 },
  counter: { flexDirection: 'row', alignItems: 'center' },
  circleButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#a24e4e', justifyContent: 'center', alignItems: 'center' },
  circleButtonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  quantity: { fontSize: 18, color: 'black', marginHorizontal: 20, fontWeight: 'bold' },
  totalSection: { marginTop: 10, paddingVertical: 15, borderTopWidth: 1, borderColor: '#a24e4e' },
  totalText: { fontSize: 20, fontWeight: 'bold', color: '#a24e4e' },
});

export default ProductDetail;