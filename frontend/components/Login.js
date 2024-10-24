import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import axios from "axios";
import { BASE_URL } from "./url"; // Import BASE_URL from config

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const sendData = () => {
        !email ? setEmailErr(true) : setEmailErr(false);
        !password ? setPasswordErr(true) : setPasswordErr(false);

        if (!email || !password) {
            return false;
        }

        const infoCheck = { email, password };

        axios.post(`${BASE_URL}/login`, infoCheck).then((res) => {
            if (res.data === true) {
                props.navigation.navigate('Home');
            } else {
                props.navigation.navigate('Login');
            }
        }).catch((err) => {
            console.warn(`err in log in: ${err}`);
            props.navigation.navigate('Login');
        });

        setEmail("");
        setPassword("");
    }

    const goToSingUp = () => {
        props.navigation.navigate('SignUp');
    }
    const goToHome = () => {
      props.navigation.navigate('Home');
  }

    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={{
                    uri: 'https://img.freepik.com/premium-photo/green-plant-sprout-tube-biotechnology-concept_1218000-4721.jpg',
                }} style={styles.backgroundImage}>
                    <StatusBar style="auto" />
                    <Text style={styles.header}>Log In Form</Text>

                    <View style={styles.inputCont}>
                        <TextInput style={styles.inputBox1} placeholder='Enter your Email' value={email}
                            onChangeText={(e) => { setEmail(e) }} />
                        {emailErr ? <Text style={styles.err}>Please enter valid email</Text> : null}

                        <TextInput style={styles.inputBox1} placeholder='Enter your Password' value={password}
                            onChangeText={(e) => { setPassword(e) }} secureTextEntry={true} />
                        {passwordErr ? <Text style={styles.err}>Please enter valid Password</Text> : null}
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.loginButton} onPress={goToHome}>
                            <Text style={styles.buttonText}>Enter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signUpButton} onPress={goToSingUp}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.btnText}>New User? Click on Sign Up</Text>
                    {/* <TouchableOpacity style={styles.signUpButton} onPress={goToHome}>
                            <Text style={styles.buttonText}>Home Page</Text>
                        </TouchableOpacity> */}
                </ImageBackground>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95a5a6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontWeight: 'bold',
        marginTop: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: "center",
        width: "100%",
    },
    header: {
      position: 'absolute', 
      top: 50, // Distance from the top of the screen
      left: 0,
      right: 0,
      zIndex: 1,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 30, // Increased font size for better visibility
      color: 'white', // Set primary text color
      letterSpacing: 2, // Add letter spacing for elegance
      textTransform: 'uppercase', // Make the text all uppercase for impact
      shadowColor: '#000', // Add shadow to make text stand out
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5, // Apply shadow on Android
      textDecorationLine: 'underline', // Add underline to make it stylish
      textDecorationStyle: 'double', // Use double underline style for uniqueness
      textDecorationColor: '#FF6347', // Tomato color underline
      backgroundColor: 'rgba(0,0,0,0.5)', // Add semi-transparent background behind text
      paddingVertical: 10, // Padding for spacing around text
      paddingHorizontal: 20, // Padding for spacing horizontally
      borderRadius: 10, // Add rounded corners to background
      overflow: 'hidden', // Ensure background is confined within borderRadius
  },
    inputCont: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        marginLeft: 40,
    },
    inputBox1: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: '90%',
        marginBottom: 30,
        backgroundColor: "white",
        paddingLeft: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    err: {
        color: "red",
        marginTop: -15,
        marginBottom: 30,
        marginLeft: 50,
    },
    btnContainer: {
        marginTop: 20,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    loginButton: {
        backgroundColor: '#4CAF50', // Green background color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // Shadow for Android
        width: '35%',
        alignItems: 'center',
    },
    signUpButton: {
        backgroundColor: '#2196F3', // Blue background color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // Shadow for Android
        width: '35%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
