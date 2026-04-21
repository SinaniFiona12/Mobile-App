import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const BlogCard = ({ title, description, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {image && image.uri ? (
        <Image source={image} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage}><Text style={styles.placeholderText}>Geen foto</Text></View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    borderColor: '#a24e4e',
    borderWidth: 0.5,
    elevation: 2,
  },
  image: { width: '100%', height: 150, resizeMode: 'cover' },
  placeholderImage: { width: '100%', height: 150, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' },
  placeholderText: { color: '#888' },
  textContainer: { padding: 20 },
  title: { fontSize: 18, fontWeight: '300', color: '#a24e4e', marginBottom: 5 },
  description: { fontSize: 14, color: 'black', lineHeight: 20 },
});

export default BlogCard;