import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import loginTrain from "../images/loginTrain.jpg";

const stack = createNativeStackNavigator();

// Get device width and height using "screen"
const { width, height } = Dimensions.get("screen");

export default function FirstPage(props) {
    const goToSignup = () => {
        props.navigation.navigate("SignUp");
    }
    const goToLogin = () => {
        props.navigation.navigate("Login");
    }

    return (
        <>
            <ImageBackground source={loginTrain} style={styles.backgroundImage}>
                <StatusBar style="auto" />
                <View>
                    <Text style={styles.text4}>Experience the Joy of Rail Travel</Text>
                </View>
                <View style={styles.textDiv}>
                    <Text style={styles.text1}>Your</Text>
                    <Text style={styles.text2}>Travelling</Text>
                    <Text style={styles.text3}>Partner</Text>
                </View>
                <View style={styles.logSign}>
                    <View style={styles.log}>
                        <Button title="Log In" onPress={goToLogin} />
                    </View>
                    <View style={styles.sign}>
                        <Button title="Sign Up" onPress={goToSignup} color={"green"} />
                    </View>
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
    text4: {
        position: "absolute",
        top: height * 0.05, // 5% from the top
        left: width * 0.1, // 10% from the left
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        borderBottomWidth: 3,
        borderColor: "white",
    },
    text1: {
        fontSize: width * 0.1, // Responsive font size
        fontWeight: "bold",
        color: "white",
        marginLeft: width * 0.1, // 10% margin left
    },
    text2: {
        fontSize: width * 0.1, // Responsive font size
        fontWeight: "bold",
        color: "white",
        marginLeft: width * 0.25, // 25% margin left
    },
    text3: {
        fontSize: width * 0.1, // Responsive font size
        fontWeight: "bold",
        color: "white",
        marginLeft: width * 0.6, // 60% margin left
    },
    logSign: {
        position: "absolute",
        bottom: height * 0.05, // 5% from the bottom
        display: "flex",
        flexDirection: "row",
        marginLeft: width * 0.05, // 5% from the left
        marginBottom: height * 0.03, // 3% margin bottom
    },
    log: {
        width: width * 0.35, // 35% width
        marginLeft: width * 0.05, // 5% margin left
    },
    sign: {
        width: width * 0.35, // 35% width
        marginLeft: width * 0.2, // 20% margin between buttons
    },
});
