import React from 'react';
import { Text, View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

// Sample data array for Pesticides
const pesticidesData = [
  {
    id: "1",
    name: "Bayer CropScience Confidor",
    description: "Effective insecticide for controlling sucking pests.",
    imageUrl:
      "https://img.freepik.com/free-photo/agricultural-engineer-analyzing-plant-sample-while-doing-quality-control-inspection-plant-nursery_637285-1571.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹850",
    recommended: true,
  },
  {
    id: "2",
    name: "Syngenta Amistar",
    description: "Fungicide that protects crops from fungal diseases.",
    imageUrl:
      "https://img.freepik.com/premium-photo/farmer-spraying-pesticide-field-mask-harvest-protective-chemical_159341-1635.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹950",
    recommended: true,
  },
  {
    id: "3",
    name: "PI Industries Osheen",
    description: "Insecticide for effective control of leafhoppers.",
    imageUrl:
      "https://img.freepik.com/premium-photo/spray-bottle-lush-lawn-labeled-mosquito-repellent-with-blurred-green-background_1194386-8204.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹750",
    recommended: false,
  },
  {
    id: "4",
    name: "Rallis India Takumi",
    description: "Insecticide that helps in controlling caterpillars.",
    imageUrl:
      "https://img.freepik.com/free-photo/female-biologist-using-syringe-adding-fertilizer-potted-plant-greenhouse_637285-1690.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹670",
    recommended: false,
  },
  {
    id: "5",
    name: "UPL Saaf",
    description: "Fungicide for controlling powdery mildew and blight.",
    imageUrl:
      "https://img.freepik.com/free-photo/female-gardener-with-sprayer-standing-greenhouse_23-2147918605.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹520",
    recommended: false,
  },
  {
    id: "6",
    name: "Godrej HIT Anti-Roach Gel",
    description: "Pesticide gel for eliminating cockroaches effectively.",
    imageUrl:
      "https://img.freepik.com/premium-photo/woman-working-greenhouse-with-sprayer-gardener-respirator-taking-care-cucumber-plants_151544-320.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹200",
    recommended: false,
  },
  {
    id: "7",
    name: "Coromandel Phoskill",
    description: "Broad-spectrum insecticide for soil and foliage pests.",
    imageUrl:
      "https://img.freepik.com/premium-photo/gardener-planting-rain_1271117-3688.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹620",
    recommended: false,
  },
  {
    id: "8",
    name: "Excel Crop Care Fipronil",
    description: "Systemic insecticide for termite control.",
    imageUrl:
      "https://img.freepik.com/premium-photo/agriculture-gardening-organic-farming-concept-squashes-summer-garden-bed_380164-177644.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹800",
    recommended: false,
  },
  // {
  //   id: "9",
  //   name: "Dhanuka M-45",
  //   description: "Effective fungicide for leaf spot and fruit rot control.",
  //   imageUrl:
  //     "https://img.freepik.com/free-photo/pesticides-man-spraying-sprayer-plantation_1157-50924.jpg",
  //   price: "₹480",
  //   recommended: false,
  // },
  // {
  //   id: "10",
  //   name: "Mahindra Agriservices Vapcom",
  //   description: "Pesticide to control mealy bugs and whiteflies.",
  //   imageUrl:
  //     "https://img.freepik.com/free-photo/man-spraying-pesticide-vegetables-garden_1157-51015.jpg",
  //   price: "₹900",
  //   recommended: false,
  // },
];


// Screen component for Pesticides
const Pesticides = () => {
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      {item.recommended && (
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedText}>RECOMMENDED</Text>
        </View>
      )}
      <View>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={{fontSize: 12}}>{item.description}</Text>
      </View>
      <Text style={{color: 'red', textAlign: 'left', width: '100%', fontSize: 16, fontWeight: '600'}}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pesticidesData}
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
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: Dimensions.get('window').width / 2 - 40, // Adjusted to make images larger
    height: 100, // Increased image height
    borderRadius: 10,
  },
  title: {
    fontSize: 14, // Increased font size for title
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  recommendedContainer: {
    position: 'absolute',
    top: 5,       // Distance from the top
    right: 5,     // Distance from the right
    backgroundColor: "red", // Red background as per your request
    padding: 5,
    borderRadius: 5,
    zIndex: 1,     // Ensure it appears on top of other elements
},
  recommendedText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white", // Black text for good contrast
  },
});

export default Pesticides;
