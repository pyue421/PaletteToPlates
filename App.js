// App.js

import { StatusBar } from 'expo-status-bar'; //controls status bar at the top of the app
import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Homescreen'; //import HomeScreen 
import SearchResults from './SearchResults'; //import SearchResultsScreen
import styles from './styles'; //import styles 

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
      <StatusBar style="auto" /> 
    </NavigationContainer>
  );
}
