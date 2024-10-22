import React from 'react';
import { Text, View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

// Sample data array
const fertilizerData = [
  {
    id: '1',
    title: 'Fertilizer 1',
    description: 'This is a description for fertilizer 1.',
    imageUrl: 'https://img.freepik.com/premium-photo/young-sprouts-green-corn-grow-farm_561246-328.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
  },
  {
    id: '2',
    title: 'Fertilizer 2',
    description: 'This is a description for fertilizer 2.',
    imageUrl: 'https://img.freepik.com/free-photo/still-life-plant-soil_23-2148198710.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
  },
  {
    id: '3',
    title: 'Fertilizer 3',
    description: 'This is a description for fertilizer 3.',
    imageUrl: 'https://img.freepik.com/premium-photo/soil-dirt-crop-isolated-white-background_1028938-198289.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
  },
  {
    id: '4',
    title: 'Fertilizer 4',
    description: 'This is a description for fertilizer 4.',
    imageUrl: 'https://img.freepik.com/premium-photo/cropped-hand-holding-plant_1048944-17993444.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
  },
];

// Screen component
const Fertilizer = () => {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={fertilizerData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={2} // Set number of columns to 2
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: Dimensions.get('window').width / 2 - 40, // Adjust width to fit grid
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Fertilizer;
