import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Switch, Pressable } from 'react-native';
// Importeer je eigen gemaakte component
import ProductCard from './ProductCard';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      {/* Header sectie */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mijn Mobile App</Text>
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
          style={styles.logo} 
        />
      </View>

      {/* Input sectie */}
      <View style={styles.inputSection}>
        <Text>Zoek een product:</Text>
        <TextInput style={styles.input} placeholder="Typ hier iets..." />
      </View>

      {/* Switch sectie (bijv. voor Dark Mode of meldingen) */}
      <View style={styles.row}>
        <Text>Meldingen ontvangen?</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      {/* Touchable / Pressable voorbeeld */}
      <Pressable style={styles.button} onPress={() => console.log('Gedrukt!')}>
        <Text style={styles.buttonText}>Klik op mij (Pressable)</Text>
      </Pressable>

      {/* Jouw eigen ProductCards (meerdere keren weergegeven) */}
      <Text style={styles.sectionTitle}>Onze Producten</Text>
      <ProductCard />
      <ProductCard />
      <ProductCard />

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