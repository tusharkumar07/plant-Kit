import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

const Tutorials = () => {
  // Sample data array
  const [tutorialsData] = useState([
    {
      id: "1",
      title: "Soil Preparation for Healthy Crops",
      description:
        "Proper soil preparation is key to ensuring healthy crop growth and maximizing yields. This tutorial covers essential steps like tilling, adding organic matter, and testing the soil’s pH level to create the optimal growing environment. Learn about different soil types and how to amend them using natural compost, fertilizers, and aeration techniques. By investing time in preparing your soil, you'll give your crops the foundation they need to grow strong and produce abundant harvests throughout the growing season.",
      imageUrl:
        "https://img.freepik.com/free-photo/compost-still-life-concept_23-2149068936.jpg?t=st=1729789889~exp=1729793489~hmac=8fccf8e1a94cf76b7df13a0c1705519d74da5ffbbdc5761420028c2b954cdf06&w=360",
      recommended: true,
    },
    {
      id: "2",
      title: "Irrigation Techniques for Efficient Water Usage",
      description:
        "Water management is critical in farming, especially in regions prone to drought. This tutorial explains the various irrigation techniques available to farmers, such as drip irrigation, sprinklers, and surface methods. Discover how these systems help conserve water while delivering the right amount to your crops at the right time. You’ll also learn about scheduling and monitoring water usage to avoid wastage, improve soil moisture retention, and boost crop productivity, helping you save resources and increase yield efficiency.",
      imageUrl:
        "https://img.freepik.com/free-photo/person-watering-plant_23-2149401204.jpg?t=st=1729789996~exp=1729793596~hmac=2285927df427d1876a9edbf9589c77f7fe44a4cf2d7add7ee14852be4a81a782&w=360",
      recommended: true,
    },
    {
      id: "3",
      title: "Pest Control Methods for Organic Farming",
      description:
        "Controlling pests without chemicals is a key challenge for organic farmers. This tutorial provides a comprehensive guide to natural pest control methods, including the use of beneficial insects, companion planting, and organic sprays made from neem oil, garlic, and other natural substances. Learn how to monitor and manage pest populations in a way that protects your crops while maintaining an eco-friendly approach. By using these techniques, you can reduce crop damage and ensure a healthier, chemical-free harvest.",
      imageUrl:
        "https://img.freepik.com/premium-photo/gigapixel-view-hazmat-worker-dispersing-green-growth_505557-65672.jpg?w=1060",
      recommended: true,
    },
    {
      id: "4",
      title: "Crop Rotation to Maintain Soil Fertility",
      description:
        "Crop rotation is a simple yet effective technique for maintaining soil fertility and reducing the risk of pests and diseases. This tutorial teaches you how to plan rotations based on crop families and the nutrient needs of different plants. You will also learn about the long-term benefits of rotating legumes, grains, and vegetables, as well as how to implement green manure crops to restore nitrogen levels. Proper crop rotation will help you preserve the health of your soil, ensuring sustainable farming for years to come.",
      imageUrl:
        "https://img.freepik.com/free-photo/gardener_23-2148013533.jpg?t=st=1729790159~exp=1729793759~hmac=dead3f6de13a7928b998a781d1bb5013a7d5e513b512387f082ffcfcfa854dab&w=996",
      recommended: false,
    },
    {
      id: "5",
      title: "Composting Techniques for Fertilizing Your Land",
      description:
        "Composting is one of the most sustainable and cost-effective ways to fertilize your farm. In this tutorial, learn how to start a compost pile using kitchen scraps, yard waste, and animal manure. Discover the balance between 'green' and 'brown' materials, how to turn your pile for aeration, and the ideal moisture levels to encourage decomposition. Compost enriches the soil with essential nutrients and beneficial microorganisms, helping you reduce chemical fertilizers while improving crop growth and yield. This organic method enhances soil structure and fertility over time.",
      imageUrl:
        "https://img.freepik.com/premium-photo/global-action-greener-future-earth-day-inspiration-climate-warriors-green-living_1155162-3099.jpg?w=1060",
      recommended: false,
    },
    {
      id: "6",
      title: "Greenhouse Farming for Year-Round Crop Production",
      description:
        "Greenhouse farming allows you to extend the growing season and protect crops from extreme weather conditions. This tutorial covers the basics of greenhouse setup, from selecting the right structure to choosing appropriate materials and maintaining optimal temperature and humidity levels. Learn how to control pests and diseases within the greenhouse environment, as well as which crops thrive best under these conditions. Greenhouse farming provides consistent and reliable crop production, making it ideal for small-scale farmers looking to grow produce all year round.",
      imageUrl:
        "https://img.freepik.com/premium-photo/modern-polytunnel-greenhouse-smart-agriculture_976492-97910.jpg?w=1060",
      recommended: false,
    },
    {
      id: "7",
      title: "Efficient Seed Selection for High Yield",
      description:
        "Selecting the right seeds for your crops is crucial for maximizing yield. In this tutorial, learn how to evaluate seed varieties based on factors such as climate, soil type, and resistance to pests and diseases. You’ll also discover the benefits of hybrid seeds versus open-pollinated varieties, as well as tips for sourcing high-quality seeds from trusted suppliers. By choosing the best seeds for your farm, you can increase your chances of producing a successful and abundant harvest.",
      imageUrl:
        "https://img.freepik.com/premium-photo/farmer-hands-hold-shovel-with-seeds-put-into-agricultural-planting-tray-hand-holding-plant-seeds-agricultural-equipment-cultivation-nursery_1014179-559.jpg?w=996",
      recommended: false,
    },
    {
      id: "8",
      title: "Sustainable Practices to Reduce Farm Waste",
      description:
        "Sustainability is key to long-term farming success. This tutorial focuses on practices that can help you reduce waste on your farm, such as recycling organic material, water conservation, and using cover crops to prevent soil erosion. You will also learn how to minimize the use of chemical inputs by relying on natural alternatives like composting and crop rotation. These practices not only lower your operational costs but also contribute to environmental preservation, ensuring that your farm remains productive for future generations.",
      imageUrl:
        "https://img.freepik.com/free-photo/recycle-background-with-woman-holding-box_23-2147825482.jpg?t=st=1729790419~exp=1729794019~hmac=77774d66038ff134cfeff111a6cf89680a53c9d3fd1e8e06d5e248fb49920a4c&w=996",
      recommended: false,
    },
  ]);

  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleDescription = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      {item.recommended && (
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedText}>RECOMMENDED</Text>
        </View>
      )}
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>

      {expandedCardId === item.id && (
        <>
          <Text style={styles.description}>{item.description}</Text>
        </>
      )}
      <TouchableOpacity onPress={() => toggleDescription(item.id)}>
        <Text>Read {expandedCardId === item.id ? 'less' : 'more'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Tutorials</Text>
        {/* <Text style={styles.headerSubtitle}>
          Explore various tutorials to improve your knowledge
        </Text> */}
      </View>
      <Text style={styles.headerSubtitle}>
          Explore various tutorials to improve your knowledge
        </Text>
      <FlatList
        data={tutorialsData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </View>
  );
};

export default Tutorials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  headerContainer: {
    padding: 20,
    backgroundColor: "#4CAF50",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  headerTitle: {
    marginTop: 16,
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#8c8c8c",
    margin: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    position: "relative",
  },
  recommendedContainer: {
    position: 'absolute',
    top: 10,       // Distance from the top
    right: 10,     // Distance from the right
    backgroundColor: "red", // Red background as per your request
    padding: 5,
    borderRadius: 5,
    zIndex: 1,     // Ensure it appears on top of other elements
},
  recommendedText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white", // Black text for good contrast
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: "justify",
    color: "#555",
  },
});