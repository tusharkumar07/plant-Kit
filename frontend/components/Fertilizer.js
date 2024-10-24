import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";

// Sample data array
const fertilizerData = [
  {
    id: "1",
    name: "IFFCO All-Purpose Organic Fertilizer",
    description: "Balanced organic fertilizer for all crops.",
    NPK: "10-10-10",
    imageUrl:
      "https://img.freepik.com/free-photo/top-view-veggies-with-seeds-salad_23-2148622474.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹500",
    recommended: true,
  },
  {
    id: "2",
    name: "Coromandel Urea Fertilizer",
    description: "Boosts leafy growth in greens and grasses.",
    NPK: "20-5-5",
    imageUrl:
      "https://img.freepik.com/premium-photo/farmer-s-hands-are-picking-up-chemical-fertilizers_38663-594.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹600",
    recommended: true,
  },
  {
    id: "3",
    name: "Tata Rallis Phosphorus Boost",
    description: "Supports strong root and flower growth.",
    NPK: "5-20-10",
    imageUrl:
      "https://img.freepik.com/premium-photo/container-soil-that-says-ferm_622540-19132.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹450",
    recommended: true,
  },
  {
    id: "4",
    name: "Zuari Potassium-Rich Fertilizer",
    description: "Improves disease resistance in fruit crops.",
    NPK: "5-5-20",
    imageUrl:
      "https://media.istockphoto.com/id/1327227682/photo/young-adult-woman-palm-holding-complex-fertiliser-granules-for-green-tomato-plant-in.jpg?s=1024x1024&w=is&k=20&c=2gErZ3i6cIRf7P3cLj9GIp2rjaPhuEJ9I4MkflaT9pA=",
    price: "₹700",
    recommended: false,
  },
  {
    id: "5",
    name: "Godrej Agrovet Vegetable Garden Fertilizer",
    description: "Balanced mix for vegetable gardens.",
    NPK: "10-15-10",
    imageUrl:
      "https://img.freepik.com/premium-photo/green-sprout-are-growing-from-rich-soil-meaning-hope-growing_1090394-12965.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹550",
    recommended: false,
  },
  {
    id: "6",
    name: "Paradeep Phosphates Fruit Tree Fertilizer",
    description: "Ideal for healthy growth of fruit trees.",
    NPK: "8-12-16",
    imageUrl:
      "https://img.freepik.com/free-photo/close-up-planting-new-plants-nature_23-2149121339.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹750",
    recommended: false,
  },
  {
    id: "7",
    name: "Kribhco Lawn Fertilizer",
    description: "Promotes green, lush lawns.",
    NPK: "30-0-3",
    imageUrl:
      "https://img.freepik.com/premium-photo/royalty-free-images_1023251-558035.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹400",
    recommended: false,
  },
  {
    id: "8",
    name: "Mahadhan Organic Compost",
    description: "Organic compost to improve soil health.",
    NPK: "5-5-5",
    imageUrl:
      "https://img.freepik.com/premium-photo/bio-compost-heap-with-decomposed-organic-matter-emphasizing-zero-waste-eco-friendly-recycling-concept-copy-space-image-place-adding-text-design_567294-35574.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid",
    price: "₹300",
    recommended: false,
  },
  // {
  //   id: "9",
  //   name: "RCF Starter Fertilizer",
  //   description: "Best for seedlings and young plants.",
  //   NPK: "15-30-15",
  //   imageUrl:
  //     "https://img.freepik.com/free-photo/farmer-hand-holding-organic-fertilizer_1157-20736.jpg",
  //   price: "₹480",
  //   recommended: false,
  // },
  // {
  //   id: "10",
  //   name: "Dharmaj Crop Guard Slow-Release Fertilizer",
  //   description: "Slow-release nutrients for long-term feeding.",
  //   NPK: "12-12-12",
  //   imageUrl:
  //     "https://img.freepik.com/free-photo/soil-fertilizer-hand_93675-126049.jpg",
  //   price: "₹650",
  //   recommended: false,
  // },
];

// Screen component
const Fertilizer = () => {
  const renderCard = ({ item }) => {
    const npkArray = item.NPK.split("-");
    return (
      <View style={styles.card}>
        {item.recommended && (
          <View style={styles.recommendedContainer}>
            <Text style={styles.recommendedText}>RECOMMENDED</Text>
          </View>
        )}
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={{ fontSize: 12 }}>{item.description}</Text>
        </View>
        <View style={{width: '100%'}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text style={[styles.npkBox, { backgroundColor: "#9088fc" }]}>
              N:{npkArray[0]}
            </Text>
            <Text style={[styles.npkBox, { backgroundColor: "#fc8888" }]}>
              P:{npkArray[1]}
            </Text>
            <Text style={[styles.npkBox, { backgroundColor: "#fcc688" }]}>
              K:{npkArray[2]}
            </Text>
          </View>
          <Text
            style={{
              color: "red",
              textAlign: "left",
              width: "100%",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {item.price}
          </Text>
        </View>
      </View>
    );
  };

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
    backgroundColor: "#f9f9f9",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: Dimensions.get("window").width / 2 - 45, // Adjusted to make images larger
    height: 100, // Increased image height
    borderRadius: 10,
  },
  title: {
    fontSize: 14, // Increased font size for title
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  recommendedContainer: {
    position: "absolute",
    top: 5, // Distance from the top
    right: 5, // Distance from the right
    backgroundColor: "red", // Red background as per your request
    padding: 5,
    borderRadius: 5,
    zIndex: 1, // Ensure it appears on top of other elements
  },
  recommendedText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white", // Black text for good contrast
  },
  npkBox: {
    backgroundColor: "#d3d3d3",
    paddingVertical: 4,
    paddingHorizontal: 6,
    // width: "30%",
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    color: "white",
  },
});

export default Fertilizer;
