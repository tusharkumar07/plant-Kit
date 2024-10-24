import React from 'react';
import About from './About';
import Contact from './Contact';
import Service1 from './Homep';
import Service2 from './Tutorials';
import Service3 from './Profile';
import Service4 from './Shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon library

const Tab = createBottomTabNavigator();

export default function TrackLink() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#4CAF50',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14,
          fontWeight: "600",
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Service1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} /> // Icon for Home
          ),
          tabBarStyle: { paddingVertical: 3 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Service4}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart-outline" color={color} size={size} /> // Icon for Shop
          ),
          tabBarStyle: { paddingVertical: 3 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tutorials"
        component={Service2}
        options={{
          tabBarLabel: 'Tutorials',
          tabBarIcon: ({ color, size }) => (
            <Icon name="book-outline" color={color} size={size} /> // Icon for Tutorials
          ),
          tabBarStyle: { paddingVertical: 3 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Service3}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" color={color} size={size} /> // Icon for Profile
          ),
          tabBarStyle: { paddingVertical: 3 },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
