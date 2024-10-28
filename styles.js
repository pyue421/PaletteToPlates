import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensure the background covers the entire screen
    justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    marginTop: -100, // Move the background up
  },
container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10, // Add some padding
  },
  heading: {
    fontSize: 36, // Larger font size for the heading
    fontWeight: 'bold',
    color: 'ffffff',
    marginBottom: 10, // Space below the heading
    marginTop: 350, // Move the background up
  },
  subHeading: {
    fontSize: 24, // Smaller font size for the subheading
    marginBottom: 30, // Space below the subheading
    color: 'ffffff',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  uploadButton: {
    backgroundColor: '#1a0b0b', // Green background for Search
    borderColor: '#141213',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  savedRecipesButton: {
    backgroundColor: '#00000000', // Orange background for Saved Recipes
    borderColor: '#141213',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  profileButton: {
    backgroundColor: '#00000000', // Blue background for Profile
    borderColor: '#141213',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#ffffff', // Red text for Upload Artwork button
    fontSize: 16,
  },
  savedRecipesButtonText: {
    color: '#141213', // Green text for Saved Recipes button
    fontSize: 16,
  },
  profileButtonText: {
    color: '#141213', // Blue text for Profile button
    fontSize: 16,
  },
});

export default styles;
