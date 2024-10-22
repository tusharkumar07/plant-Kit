import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

// Get device width and height using "screen"
const { width, height } = Dimensions.get("screen");

// Responsive font size calculation
const calculateFontSize = (multiplier) => width * multiplier;

export default function FirstPage(props) {
    const goToSignup = () => {
        props.navigation.navigate("SignUp");
    }
    const goToLogin = () => {
        props.navigation.navigate("Login");
    }

    return (
        <>
            <ImageBackground source={{
        uri: 'https://img.freepik.com/premium-photo/green-plant-sprout-tube-biotechnology-concept_1218000-4721.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid',
      }} style={styles.backgroundImage}>
                <StatusBar style="auto" />
                <View style={styles.textDiv}>
                    <Text style={styles.text1}>Farm</Text>
                    <Text style={styles.text2}>with Confidence</Text>
                    {/* <Text style={styles.text3}>Confidence</Text> */}
                </View>
                <View style={styles.logSign}>
                    <TouchableOpacity style={styles.loginButton} onPress={goToLogin}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUpButton} onPress={goToSignup}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    textDiv: {
        marginTop: height * 0.2, // 20% from the top
    },
    text1: {
        fontSize: calculateFontSize(0.1), // Responsive font size
        fontWeight: "bold",
        color: "white",
        marginLeft: width * 0.1, // 10% margin left
    },
    text2: {
        fontSize: calculateFontSize(0.1), // Responsive font size
        fontWeight: "bold",
        color: "white",
        marginLeft: width * 0.25, // 25% margin left
    },
    text3: {
        fontSize: calculateFontSize(0.1), // Responsive font size
        fontWeight: "bold",
        color: "white",
        marginLeft: width * 0.6, // 60% margin left
    },
    logSign: {
        position: "absolute", // Ensures the container is placed at the bottom
        bottom: height * 0.05, // 5% from the bottom of the screen
        width: "100%", // Make the container span the full width
        flexDirection: "row",  
        justifyContent: "space-evenly", // Ensures equal spacing between the buttons
        alignItems: "center", // Vertically centers the buttons within the container
        paddingHorizontal: width * 0.05, // Adds some padding on the left and right (5% each)
    },
    loginButton: {
        backgroundColor: '#4CAF50', // Green background color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10, // Rounded corners
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // Shadow for Android
        width: width * 0.35, // 35% width
        alignItems: 'center',
    },
    signUpButton: {
        backgroundColor: '#2196F3', // Blue background color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10, // Rounded corners
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // Shadow for Android
        width: width * 0.35, // 35% width
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
