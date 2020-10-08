import React, {useState, useEffect} from 'react';
import RNLocation from 'react-native-location';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import Mountain from './background-components/mountain';
import Husky from './husky';
import Temperature from './weather/temperature';
import Stars from './stars/stars';
import {fullRelativeWidth, skyColor, darkSkyColor} from './assets/style_bits';
import {openWeatherRequest} from './constants/open-weather';
import DenyLocationModal from './deny-location-modal';
import Snow from 'react-native-snow';

const AppComponents = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTemp, setCurrentTemp] = useState(20);
  const [feelsLike, setfeelsLike] = useState(20);
  const [tempMin, setTempMin] = useState(20);
  const [tempMax, setTempMax] = useState(20);
  const [isThemeLight, setIsThemeLight] = useState(skyColor);
  const [isSnowing, setIsSnowing] = useState(false);

  useEffect(() => {
    RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'fine', // or 'fine'
      },
    }).then((currentPermission) => {
      if (currentPermission === false) {
        requestPermission();
      } else {
        getLatestLocation();
      }
    });
  }, []);

  const requestPermission = () => {
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show you the weather in your area',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    }).then((currentPermission) => {
      if (currentPermission === false) {
        setModalVisible(true);
        openWeatherRequest(54.44, 18.57).then((response) => {
          setTemperatures(response);
        });
      } else {
        getLatestLocation();
      }
    });
  };

  const setTemperatures = (response, latitude, longitude) => {
    const roundedTemperature = Math.round(response.main.temp);
    const roundedFeelsLike = Math.round(response.main.feels_like);
    setCurrentTemp(roundedTemperature);
    setfeelsLike(roundedFeelsLike);
    setTempMax(response.main.temp_max);
    setTempMin(response.main.temp_min);
    const weatherIcon = response.weather[0].icon;
    if (weatherIcon.includes('d')) {
      setIsThemeLight(true);
    } else {
      setIsThemeLight(false);
    }
  };

  const getLatestLocation = () => {
    RNLocation.getLatestLocation({timeout: 1000}).then((latestLocation) => {
      if (latestLocation === null) {
        setModalVisible(true);
        // Sopot
        openWeatherRequest(54.44, 18.57, setVisibleWeather).then((response) => {
          setTemperatures(response, 54.44, 18.57);
        });
        // Antarctica
        // openWeatherRequest(-90, -139.2667, setVisibleWeather).then(
        //   (response) => {
        //     setTemperatures(response, 54.44, 18.57);
        //   },
        // );
        // Tokyo
        // openWeatherRequest(35.652832, 139.839478, setVisibleWeather).then(
        //   (response) => {
        //     setTemperatures(response, 54.44, 18.57);
        //   },
        // );
      } else {
        openWeatherRequest(
          latestLocation.latitude,
          latestLocation.longitude,
          setVisibleWeather,
        ).then((response) => {
          setTemperatures(
            response,
            latestLocation.latitude,
            latestLocation.longitude,
          );
        });
      }
    });
  };

  const displaySkyColor = () => {
    if (isThemeLight) {
      return skyColor;
    } else {
      return darkSkyColor;
    }
  };

  const setVisibleWeather = (descriptionCode) => {
    if (descriptionCode === 'Snow' || descriptionCode === 'Clouds') {
      setIsSnowing(true);
    } else {
      console.log('and the weather CODE IS!!!', descriptionCode);
    }
  };

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: displaySkyColor()}}>
      <DenyLocationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Temperature
        currentTemp={currentTemp}
        tempMax={tempMax}
        tempMin={tempMin}
        feelsLike={feelsLike}
        isThemeLight={isThemeLight}
      />
      {!isThemeLight && <Stars />}
      {isSnowing && <Snow snowfall="medium" />}
      <Mountain />
      <Husky />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppComponents;
