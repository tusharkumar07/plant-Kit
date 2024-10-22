import React from 'react';
import History from './History';
import About from './About';
import Contact from './Contact';
import TrackLink from './TrackLink';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <>
    <TrackLink />
    </>
  );
};

export default Home;
