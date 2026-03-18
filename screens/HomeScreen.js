import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Switch, Pressable } from 'react-native';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView 
      style={styles.scrollWindow} 
      contentContainerStyle={styles.scrollContent}
    >
      {}
    {}
    <View style={styles.header}>
        <Text style={styles.headerText}>Mijn Mobile App</Text>
      </View>

      {}
      <View style={styles.inputSection}>
        <Text>Zoek een product:</Text>
        <TextInput style={styles.input} placeholder="Typ hier iets..." />
      </View>

      {}
      <View style={styles.row}>
        <Text>Meldingen ontvangen?</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

{}
<Pressable 
        style={styles.button} 
        onPress={() => {}} 
      >
        <Text style={styles.buttonText}>Zoeken</Text>
      </Pressable>

      {}
      <Text style={styles.sectionTitle}>Onze Producten</Text>
      
      <ProductCard
        title="Borstel (Brush)"
        description="Een super zachte borstel voor je haar."
        price="30"
        image={require("../assets/haarborstel.jpg")}
        onPress={() =>
          navigation.navigate("ProductDetail", {
            title: "Borstel (Brush)",
            description: "Een super zachte borstel voor je haar.",
            price: "30",
            image: require("../assets/icon.png"),
          })
        }
      />

      <ProductCard
        title="Shampoo"
        description="Ruikt heerlijk naar bloemen."
        price="15"
        image={require("../assets/Shampoo.webp")}
        onPress={() =>
          navigation.navigate("ProductDetail", {
            title: "Shampoo",
            description: "Ruikt heerlijk naar bloemen.",
            price: "15",
            image: require("../assets/icon.png"),
          })
        }
      />

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