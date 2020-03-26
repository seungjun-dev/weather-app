import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";

const API_KEY = "80c37ea7c77eaf606bdb9b0e2b925a6a";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);
    this.setState({isLoading: false, temp: data.main.temp, condition: data.weather[0].main, place: data.name});
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Cant't find you.", "So Sad");
    }
  };
  componentDidMount() {
    this.getLocation(); 
  }
  render() {
    const { isLoading, temp, condition, place } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} condition={condition} place={place}/>;
  }
}
