import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const BlogDetail = ({ route }) => {
  const { title, description, image } = route.params;

  return (
    <ScrollView style={styles.container}>
      {image && image.uri ? (
        <Image source={image} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage}><Text style={styles.placeholderText}>Geen afbeelding</Text></View>
      )}

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff5ef' },
  image: { width: '100%', height: 250, resizeMode: 'cover' },
  placeholderImage: { width: '100%', height: 250, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' },
  placeholderText: { color: '#888' },
  contentContainer: { padding: 25 },
  title: { fontSize: 28, fontWeight: '300', color: '#a24e4e', marginBottom: 10 },
  separator: { height: 4, width: 60, backgroundColor: '#a24e4e', marginBottom: 20, borderRadius: 2 },
  description: { fontSize: 16, color: 'black', fontWeight: '400', lineHeight: 26 },
});

export default BlogDetail;