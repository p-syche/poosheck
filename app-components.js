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
import {getSunriseAndSunsetTime} from './constants/settings';

const AppComponents = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTemp, setCurrentTemp] = useState(20);
  const [feelsLike, setfeelsLike] = useState(20);
  const [tempMin, setTempMin] = useState(20);
  const [tempMax, setTempMax] = useState(20);
  const [isThemeLight, setIsThemeLight] = useState(skyColor);

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
        console.log('hey ho RESPONSE', latestLocation);

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
      />
      {!isThemeLight && <Stars />}
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
