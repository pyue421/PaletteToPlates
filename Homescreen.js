// screens/HomeScreen.js

import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles'; 

const backgroundImage = require('./assets/plate.webp'); 

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState(''); //takes text input

  const handleSearch = () => {
    navigation.navigate('SearchResults', { query: searchQuery });
  };

  const handleUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (result.cancelled) {
      Alert.alert('Image upload was cancelled.');
      return;
    }

    Alert.alert('Image uploaded!', result.uri);
  };

  const handleSavedRecipes = () => {
    Alert.alert('Saved Recipes pressed!'); //need change
  };

  const handleProfile = () => {
    Alert.alert('Profile pressed!'); //need change 
  };

  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Palette to Plates</Text>
        <Text style={styles.subHeading}>Eat the Art!</Text>
        
        {/* Search Input */}
        <View style={[styles.searchContainer, { flexDirection: 'row', alignItems: 'center' }]}>
          <TextInput
            style={[styles.searchInput, { flex: 1 }]} //takes up remaining space
            placeholder="Search for artwork..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={[styles.uploadButton, { marginLeft: 10 }]} onPress={handleSearch}>
            <Text style={styles.uploadButtonText}>Search</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
            <Text style={styles.uploadButtonText}>Upload Artwork</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.savedRecipesButton} onPress={handleSavedRecipes}>
            <Text style={styles.savedRecipesButtonText}>Saved Recipes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
            <Text style={styles.profileButtonText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
