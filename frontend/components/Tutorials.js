import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const Tutorials = () => {
  // Sample data array
  const [tutorialsData] = useState([
    {
      id: '1',
      title: 'Tutorial 1',
      description: 'This is a detailed description for tutorial 1.',
      imageUrl: 'https://img.freepik.com/premium-photo/man-orange-vest-is-kneeling-field-with-man-vest_644690-88538.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
    },
    {
      id: '2',
      title: 'Tutorial 2',
      description: 'This is a detailed description for tutorial 2.',
      imageUrl: 'https://img.freepik.com/premium-photo/man-is-looking-map-that-says-field-is-green_644690-88782.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
    },
    {
      id: '3',
      title: 'Tutorial 3',
      description: 'This is a detailed description for tutorial 3.',
      imageUrl: 'https://img.freepik.com/premium-photo/biologist-woman-wearing-glasses-studying-botanical-plants-nature-with-magnifying-glass-bot_470400-1958.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
    },
  ]);

  // State to manage the currently expanded card's ID
  const [expandedCardId, setExpandedCardId] = useState(null);

  // Function to toggle the description visibility
  const toggleDescription = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  // Render card function
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <TouchableOpacity onPress={() => toggleDescription(item.id)}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>

      {expandedCardId === item.id && (
        <>
          <Text style={styles.description}>{item.description}</Text>
          <Button title="Close Description" onPress={() => toggleDescription(item.id)} />
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Tutorials</Text>
        <Text style={styles.headerSubtitle}>Explore various tutorials to improve your knowledge</Text>
      </View>

      {/* Tutorial Cards */}
      <FlatList
        data={tutorialsData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={1} // Single column layout
      />
    </View>
  );
};

export default Tutorials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light background color for better contrast
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#4CAF50', // Green header background (Crops related theme)
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerTitle: {
    marginTop:16,
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#f0f0f0',
    marginTop: 5,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
    color: '#555',
  },
});
