import React, { use, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Switch, Pressable } from 'react-native';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/698c7fccd5523d8c665d8dee/products",
      {
        headers: {
          Authorization:
            "Bearer 8e2655f878897fc31247e18a55b595646d22de7d412e75fb3fd01c890fce8b48",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          subtitle: item.product.fieldData.description,
          price: (item.skus[0]?.fieldData.price.value || 0) / 100,
          image: {
            uri: item.skus[0]?.fieldData["main-image"]?.url,
          },
        }));

        setProducts(formattedProducts);
      })
      .catch((error) =>
        console.error("Error fetching products:", error)
      );
  }, []);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView 
      style={styles.scrollWindow} 
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Mijn Mobile App</Text>
      </View>

      <View style={styles.inputSection}>
        <Text>Zoek een product:</Text>
        <TextInput style={styles.input} placeholder="Typ hier iets..." />
      </View>

      <View style={styles.row}>
        <Text>Meldingen ontvangen?</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      <Pressable 
        style={styles.button} 
        onPress={() => {}} 
      >
        <Text style={styles.buttonText}>Zoeken</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Onze Producten</Text>
      
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.subtitle}
          price={product.price}
          image={product.image}
          onPress={() =>
            navigation.navigate("ProductDetail", product)
          }
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollWindow: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollContent: { padding: 20, paddingTop: 50, paddingBottom: 100 },
  header: { alignItems: 'center', marginBottom: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold' },
  logo: { width: 50, height: 50, marginTop: 10 },
  inputSection: { marginVertical: 10 },
  input: { height: 40, borderColor: 'gray', borderBottomWidth: 1, paddingHorizontal: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  button: { backgroundColor: '#FFB6C1', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontWeight: 'bold' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 30 },
});

export default HomeScreen;