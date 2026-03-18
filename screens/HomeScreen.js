import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TextInput, Switch, Pressable} from 'react-native';

import ProductCard from '../components/ProductCard';


const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      {}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mijn Mobile App</Text>
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
          style={styles.logo} 
        />
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
      <Pressable style={styles.button} onPress={() => navigation.navigate('ProductDetail')}>
        <Text style={styles.buttonText}>Ga naar Product Details</Text>
      </Pressable>

      {}
      <Text style={styles.sectionTitle}>Onze Producten</Text>
      <ProductCard
        title="Brush"
        description="Brush"
        price="$30"
        image={require("../assets/icon.png")}
        onPress={()=>
          navigation.navigate("Details", {
            title:"Brush",
            description:"Brush",
            price:"30",
            image:require("../assets/icon.png"),
          })
        }
      />

      <ProductCard />
      <ProductCard />

      {}
      <View style={{ marginTop: 20, marginBottom: 50 }}>
        <Button 
          title="Bekijk detailpagina" 
          onPress={() => navigation.navigate('ProductDetail')} 
        />
      </View>

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

export default HomeScreen;