import React, {useState, useEffect} from 'react';
import RNLocation from 'react-native-location';
import {StyleSheet, View, Text, Modal, TouchableHighlight} from 'react-native';
import Mountain from './background-components/mountain';
import Husky from './husky';
import Temperature from './weather/temperature';
import {fullRelativeWidth, skyColor, darkSkyColor} from './assets/style_bits';
import {openWeatherRequest} from './constants/open-weather';
import DenyLocationModal from './deny-location-modal';
import {getSunriseAndSunsetTime} from './constants/settings';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTemp, setCurrentTemp] = useState(20);
  const [feelsLike, setfeelsLike] = useState(20);
  const [tempMin, setTempMin] = useState(20);
  const [tempMax, setTempMax] = useState(20);
  const [isThemeLight, setIsThemeLight] = useState(skyColor);

  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 500, // Meters
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      // Android only
      androidProvider: 'auto',
      interval: 5000, // Milliseconds
      fastestInterval: 10000, // Milliseconds
      maxWaitTime: 5000, // Milliseconds
      // iOS Only
      activityType: 'other',
      allowsBackgroundLocationUpdates: false,
      headingFilter: 1, // Degrees
      headingOrientation: 'portrait',
      pausesLocationUpdatesAutomatically: false,
      showsBackgroundLocationIndicator: false,
    }).then(() => checkPermission());
  }, []);

  const checkPermission = () => {
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
  };

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
    setCurrentTemp(response.main.temp);
    setfeelsLike(response.main.feels_like);
    setTempMax(response.main.temp_max);
    setTempMin(response.main.temp_min);
    if (getSunriseAndSunsetTime(latitude, longitude) === 'day') {
      setIsThemeLight(true);
    } else {
      setIsThemeLight(false);
    }
  };

  const getLatestLocation = () => {
    RNLocation.getLatestLocation({timeout: 1000}).then((latestLocation) => {
      if (latestLocation === null) {
        setModalVisible(true);
        openWeatherRequest(54.44, 18.57).then((response) => {
          setTemperatures(response, 54.44, 18.57);
        });
      } else {
        openWeatherRequest(
          latestLocation.latitude,
          latestLocation.longitude,
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

  return (
    <View style={{...styles.container, backgroundColor: displaySkyColor()}}>
      <DenyLocationModal />
      <Temperature
        currentTemp={currentTemp}
        tempMax={tempMax}
        tempMin={tempMin}
        feelsLike={feelsLike}
      />
      <Mountain />
      <Husky />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
