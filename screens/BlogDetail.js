import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const BlogDetail = ({ route }) => {
  
  const { title, description, image } = route.params || {
    title: "Blog Bericht",
    description: "Geen inhoud beschikbaar.",
    image: null
  };

  return (
    <ScrollView style={styles.container}>
      {}
      {image && image.uri ? (
        <Image source={image} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>Geen afbeelding beschikbaar</Text>
        </View>
      )}

      {}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        
        {}
        <View style={styles.separator} />

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff5ef', // Jouw 'Soie' achtergrondkleur
    },
    image: {
      width: '100%',
      height: 250,
      resizeMode: 'cover',
    },
    placeholderImage: {
      width: '100%',
      height: 250,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
    },
    placeholderText: {
      color: '#888',
    },
    contentContainer: {
      padding: 20,
    },
    title: {
      fontSize: 26,
      fontWeight: '300', // Licht lettertype (simuleert CMU Extra Light)
      color: '#a24e4e', // Jouw titelkleur
      marginBottom: 10,
    },
    separator: {
      height: 4,
      width: 60,
      backgroundColor: '#a24e4e', // Decoratieve lijn in jouw kleur
      marginBottom: 20,
      borderRadius: 2,
    },
    description: {
      fontSize: 16,
      color: 'black', // Jouw tekstkleur
      fontWeight: '400', // Simuleert Muli Normal
      lineHeight: 26, 
    },
  });

export default BlogDetail;