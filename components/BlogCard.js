import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const BlogCard = ({ title, description, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      
      {}
      {image && image.uri ? (
        <Image source={image} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>Geen afbeelding</Text>
        </View>
      )}
      
      {}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        
        {}
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
    
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150, 
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#888',
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default BlogCard;