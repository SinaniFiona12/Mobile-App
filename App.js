import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';
import BlogDetail from './screens/BlogDetail'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#fff5ef' }, 
          headerTintColor: '#a24e4e', 
          headerTitleStyle: { fontWeight: '300' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Soie' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Product Details' }} />
        <Stack.Screen name="BlogDetail" component={BlogDetail} options={{ title: 'Blog Artikel' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}