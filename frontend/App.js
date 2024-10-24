import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

import Login from "./components/Login";
import Home from "./components/Home";
import FirstPage from "./components/FirstPage";
import SignUp from "./components/SignUp";
import Service1 from "./components/Homep";
import Profile from "./components/Profile";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#017aff",
            },
            headerTintColor: "white",
            headerShown: false, // Hide headers for all screens
          }}
        >
          <stack.Screen
            name="FirstPage"
            component={FirstPage}
            options={{ title: "TrakLink" }}
          />
          <stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "TrakLink" }}
          />
          <stack.Screen
            name="Login"
            component={Login}
            options={{ title: "TrakLink" }}
          />
          <stack.Screen name="Home" component={Home} options={{ title: " " }} />
          <stack.Screen
            name="Service1"
            component={Service1}
            options={{ title: " " }}
          />
          <stack.Screen
            name="profile"
            component={Profile}
            options={{ title: " " }}
          />
        </stack.Navigator>
      </NavigationContainer>
      {/* <StatusBar style="light"/> */}
    </>
  );
}
