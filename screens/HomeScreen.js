import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Switch, Pressable } from 'react-native';
import ProductCard from '../components/ProductCard';
import { Picker } from '@react-native-picker/picker';

const categoryNames = {
  "": "Alle categorieën",
  "699f1c417be611fc818a8ed1": "other",
  "699ef98c01b0cf73dbedd440": "Brushes",
  "699f13c379978f7f9353d3f1": "makeup",
  "699f13189064a4db62a2ef2e": "texture",
};

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    // JOUW ORIGINELE FETCH CODE (met 2 kleine veiligheidsaanpassingen)
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
          price: (item.skus[0]?.fieldData?.price?.value || 0) / 100, // Extra vraagtekens voor de zekerheid
          
          // Let op: category staat nu BUITEN image, en met veilige checks (?.)
          category: item.product.fieldData.category 
            ? categoryNames[item.product.fieldData.category[0]] || "Onbekende categorie" 
            : "Onbekende categorie",
            
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

  // JOUW FILTER LOGICA
  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });


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
        <TextInput 
          style={styles.input}
          placeholder="Typ hier..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.row}>
        <Text>Meldingen ontvangen?</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      {/* JOUW PICKER CODE */}
      <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}
      >
        <Picker.Item label="Prijs: Laag naar Hoog" value="price-asc" />
        <Picker.Item label="Prijs: Hoog naar Laag" value="price-desc" />
        <Picker.Item label="Naam: A-Z" value="name-asc" />
        <Picker.Item label="Naam: Z-A" value="name-desc" />
      </Picker>

      <Pressable 
        style={styles.button} 
        onPress={() => {}} 
      >
        <Text style={styles.buttonText}>Zoeken</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Onze Producten</Text>
      
      {/* LUS OVER DE GEFILTERDE PRODUCTEN */}
      {sortedProducts.map((product) => (
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
  inputSection: { marginVertical: 10 },
  input: { height: 40, borderColor: 'gray', borderBottomWidth: 1, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  button: { backgroundColor: '#FFB6C1', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontWeight: 'bold' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 10 },
  picker: { backgroundColor: '#fff', marginVertical: 10, borderRadius: 5 }
});

export default HomeScreen;