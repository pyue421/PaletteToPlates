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
  searchButton: {
    backgroundColor: '#1a0b0b', 
    borderColor: '#141213',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '35%',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#00000000', 
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
    backgroundColor: '#00000000', 
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
    backgroundColor: '#00000000', 
    borderColor: '#141213',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#ffffff', 
    fontSize: 16,
  },
  uploadButtonText: {
    color: '#141213', 
    fontSize: 16,
  },
  savedRecipesButtonText: {
    color: '#141213', 
    fontSize: 16,
  },
  profileButtonText: {
    color: '#141213', 
    fontSize: 16,
  },
});

export default styles;
