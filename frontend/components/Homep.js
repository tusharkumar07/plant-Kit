import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For other icons
import Ionicons from 'react-native-vector-icons/Ionicons'; // For profile icon
import Fertilizer from './Fertilizer';
import * as Location from 'expo-location'; // Assuming you're using Expo for geolocation

const WeatherData = () => {
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [sevenDayForecast, setSevenDayForecast] = useState([]);
  console.log(sevenDayForecast)
  console.log(currentWeather)
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentlocation, setCurrentlocation] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      //fetch loction
      const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${31.48049}&longitude=${76.1874374}&localityLanguage=en`;
      const locationResponse = await fetch(locationUrl);
      const locationData = await locationResponse.json();
      setCurrentlocation(locationData.city);
      // Fetch current weather
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=auto&current_weather=true`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
      setCurrentWeather(weatherData.current_weather);

      // Fetch 7 days weather forecast
      const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=GMT`;
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();
      console.log(forecastData)
      setSevenDayForecast(forecastData.daily.temperature_2m_max);
    };

    fetchWeatherData();
  }, []);

  return (
    <View style={styles.weatherContainer}>
      {errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <>
          <Text style={styles.locationText}>
            Location: {location ? `${currentlocation}` : 'Loading...'}
          </Text>

          {currentWeather && (
            <View style={styles.currentWeather}>
              <Ionicons name="sunny-outline" size={60} color="#FFD700" />
              <Text style={styles.temperature}>Temperature - {((currentWeather.temperature * 9 / 5) + 32).toFixed(2)} °F</Text>


              <Text style={styles.windSpeed}>Wind Speed - {currentWeather.windspeed} m/s</Text>
            </View>
          )}


<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.forecastContainer}>
  {sevenDayForecast.length > 0 &&
    sevenDayForecast.map((temp, index) => {
      const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const dayName = daysOfWeek[index % 7]; // Cycle through the week
      const tempFahrenheit = ((temp * 9 / 5) + 32).toFixed(2);

      // Choose icon based on temperature
      let weatherIcon;
      if (tempFahrenheit >= 90) {
        weatherIcon = <Ionicons name="flame-outline" size={40} color="#FF4500" />; // Hot weather
      } else if (tempFahrenheit >= 70) {
        weatherIcon = <Ionicons name="sunny-outline" size={40} color="#FFD700" />; // Sunny weather
      } else if (tempFahrenheit >= 60) {
        weatherIcon = <Ionicons name="cloudy-outline" size={40} color="#808080" />; // Cloudy weather
      } else {
        weatherIcon = <Ionicons name="snow-outline" size={40} color="#00BFFF" />; // Cold weather
      }

      return (
        <View key={index} style={styles.forecastItem}>
          {weatherIcon}
          <Text style={styles.forecastText}>{tempFahrenheit} °F</Text>
          <Text style={styles.dayText}>{dayName}</Text>
        </View>
      );
    })}
</ScrollView>


        </>
      )}
    </View>
  );
};

const Homep = () => {
  return (
    <View style={styles.container}>
      {/* Profile and Greeting Row */}
      <View style={styles.profileRow}>
        <Text style={styles.greeting}>Hi, Tushar</Text>
        {/* Circular Profile Icon */}
        <View style={styles.profileIconContainer}>
          <Ionicons name="person-outline" size={30} color="#808080" style={styles.profileIcon} />
        </View>
      </View>

      {/* Crop Data Button */}
      <ScrollView contentContainerStyle={styles.scrollableContent}>
        <View style={styles.section}>
          <TouchableOpacity style={styles.cropDataButton}>
            <Text style={styles.buttonText}>Crop data</Text>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-photo/man-orange-vest-is-kneeling-field-with-man-vest_644690-88538.jpg?uid=R169335753&ga=GA1.1.1112546074.1729362380&semt=ais_hybrid' }}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        {/* Moisture and Ph */}
        <View style={styles.dataRow}>
          <View style={styles.dataBox}>
            <Icon name="water-drop" size={24} color="#000" />
            <Text>60%</Text>
          </View>
          <View style={styles.dataBox}>
            <Icon name="science" size={24} color="#000" />
            <Text>7.5</Text>
          </View>
        </View>

        {/* NPK Values */}
        <View style={styles.npkRow}>
          <View style={styles.npkBox}>
            <Text>N</Text>
          </View>
          <View style={styles.npkBox}>
            <Text>P</Text>
          </View>
          <View style={styles.npkBox}>
            <Text>K</Text>
          </View>
        </View>

        {/* Weather Data */}
        <WeatherData />

        {/* Scrollable Fertilizer Component */}
        <View style={styles.section1}>
         <Fertilizer/>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 20,
  },
  scrollableContent: {
    paddingBottom: 20,
    alignItems: 'center', // Center the content
    width: '100%', // Full width for the content
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: '#4CAF50',
    padding: 23,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: '100%',
  },
  profileIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  greeting: {
    fontSize: 20,
  },
  section: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  section1: {
    backgroundColor: '#d3d3d3',
    padding: 0,
    marginBottom: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
  },
  cropDataButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '90%',
  },
  dataBox: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  npkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '90%',
  },
  npkBox: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  fertilizerContainer: {
    width: '95%',
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  weatherContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  currentWeather: {
    alignItems: 'center',
    marginBottom: 20,
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  windSpeed: {
    fontSize: 16,
    color: '#555',
  },
  forecastContainer: {
    flexDirection: 'row',
  },
  forecastItem: {
    alignItems: 'center',
    padding: 10,
    width: 100,
  },
  forecastText: {
    fontSize: 14,
    marginTop: 5,
  },
  dayText: {
    fontSize: 12,
    color: '#555',
  },
  locationText: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default Homep;
