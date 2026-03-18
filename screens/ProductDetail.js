import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Switch, Pressable, Touchable, TouchableOpacity} from 'react-native';
// Importeer je eigen gemaakte component
import ProductCard from '../components/ProductCard';

const ProductDetail = (route) => {
  const {title, description, price, image} = route.params;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity +1);
    const decreaseQuanitiy = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>

      <View style={styles.quantityContainer}>
        <Touchable onPress={decreaseQuanitiy} style={styles.button}>
          <Text style={styles.buttonText}></Text>
        </Touchable>
        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity style= {styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalPrice}>Totaal: €{price * quantity}</Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, paddingTop: 50 },
  header: { alignItems: 'center', marginBottom: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold' },
  logo: { width: 50, height: 50, marginTop: 10 },
  inputSection: { marginVertical: 20 },
  input: { height: 40, borderColor: 'gray', borderBottomWidth: 1, paddingHorizontal: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 30 },
});

export default ProductDetail;