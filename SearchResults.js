// screens/SearchResultsScreen.js

import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; // Adjust the path if needed

const SearchResultsScreen = ({ route }) => {
  const { query } = route.params;

  // Dummy data for demonstration
  const mockArtworks = [
    {
      id: 1,
      title: "Starry Night",
      artist: "Vincent van Gogh",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/The_Starry_Night.jpg",
    },
    // More mock artworks can be added here
  ];

  const artworks = mockArtworks.filter(artwork => 
    artwork.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Results for "{query}"</Text>
      {artworks.length > 0 ? (
        artworks.map(artwork => (
          <View key={artwork.id} style={styles.artworkItem}>
            <Image source={{ uri: artwork.imageUrl }} style={styles.artworkImage} />
            <Text style={styles.artworkTitle}>{artwork.title}</Text>
            <Text style={styles.artworkArtist}>{artwork.artist}</Text>
          </View>
        ))
      ) : (
        <Text>No artworks found.</Text>
      )}
    </View>
  );
};

export default SearchResultsScreen;
