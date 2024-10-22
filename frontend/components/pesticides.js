import React from 'react';
import { Text, View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

// Sample data array for Pesticides
const pesticidesData = [
  {
    id: '1',
    title: 'Pesticide 1',
    description: 'This is a description for pesticide 1.',
    imageUrl: 'https://img.freepik.com/premium-photo/woman-protective-suit-mask-is-spraying-apple-tree-from-fungal-disease-vermin_1358627-36391.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
  },
  {
    id: '2',
    title: 'Pesticide 2',
    description: 'This is a description for pesticide 2.',
    imageUrl: 'https://img.freepik.com/premium-photo/tractor-spraying-young-corn-with-pesticides_662214-260691.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
  },
  {
    id: '3',
    title: 'Pesticide 3',
    description: 'This is a description for pesticide 3.',
    imageUrl: 'https://img.freepik.com/free-photo/man-trimming-bough-brush-senior-black-apron_1157-39702.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
  },
  {
    id: '4',
    title: 'Pesticide 4',
    description: 'This is a description for pesticide 4.',
    imageUrl: 'https://img.freepik.com/premium-photo/man-field-spraying-pesticide_662214-191033.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
  },
];

// Screen component for Pesticides
const Pesticides = () => {
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
        data={pesticidesData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        // No need for numColumns for a single column
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
    backgroundColor: '#f9f9f9',
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: Dimensions.get('window').width - 40, // Full width for single-column layout
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Pesticides;
