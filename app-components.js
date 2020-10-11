import React, {useRef, useState, useEffect} from 'react';
import RNLocation from 'react-native-location';
import {StyleSheet, View, SafeAreaView, AppState, Button} from 'react-native';
import Mountain from './background-components/mountain';
import Husky from './husky';
import Temperature from './weather/temperature';
import Clouds from './weather/clouds';
import Stars from './stars/stars';
import {fullRelativeWidth, skyColor, darkSkyColor} from './assets/style_bits';
import {openWeatherRequest} from './constants/open-weather';
import DenyLocationModal from './deny-location-modal';
import Snow from 'react-native-snow';

const AppComponents = ({navigation}) => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const [modalVisible, setModalVisible] = useState(false);
  const [avgTemp, setAvgTemp] = useState(20);
  const [currentTemp, setCurrentTemp] = useState(20);
  const [tempMin, setTempMin] = useState(20);
  const [tempMax, setTempMax] = useState(20);
  const [isThemeLight, setIsThemeLight] = useState(skyColor);
  const [weatherConditions, setWeatherConditions] = useState('Clear');
  const [cloudPercentage, setCloudPercentage] = useState(50);
  const [windSpeed, setWindSpeed] = useState(1);
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState('01d');

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      checkPermission();
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  useEffect(() => {
    checkPermission();
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

  const setTemperatures = (response) => {
    let averageTemp;

    const weatherIcon = response.current.weather[0].icon;
    if (weatherIcon.includes('d')) {
      setIsThemeLight(true);
      setAvgTemp(Math.round(response.daily[0].temp.day));
    } else {
      setIsThemeLight(false);
      setAvgTemp(Math.round(response.daily[0].temp.night));
    }

    setCurrentWeatherIcon(response.current.weather[0].icon);

    setTempMax(response.daily[0].temp.max);
    setTempMin(response.daily[0].temp.min);

    const currentRoundedTemperature = Math.round(response.current.temp);
    setCurrentTemp(currentRoundedTemperature);

    setCloudPercentage(response.daily[0].clouds);
    setWindSpeed(response.daily[0].wind_speed);
  };

  const getLatestLocation = () => {
    RNLocation.getLatestLocation({timeout: 1000}).then((latestLocation) => {
      if (latestLocation === null) {
        setModalVisible(true);
        // Sopot
        openWeatherRequest(54.44, 18.57, setVisibleWeather).then((response) => {
          setTemperatures(response);
        });
        // Antarctica
        // openWeatherRequest(-90, -139.2667, setVisibleWeather).then(
        //   (response) => {
        //     setTemperatures(response);
        //   },
        // );
        // Tokyo
        // openWeatherRequest(35.652832, 139.839478, setVisibleWeather).then(
        //   (response) => {
        //     setTemperatures(response);
        //   },
        // );
        // Rio de Janeiro
        // openWeatherRequest(-22.908333, -43.196388, setVisibleWeather).then(
        //   (response) => {
        //     setTemperatures(response, 54.44, 18.57);
        //   },
        // );
        // New York
        // openWeatherRequest(40.73, -73.935242, setVisibleWeather).then(
        //   (response) => {
        //     setTemperatures(response);
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
    setWeatherConditions(descriptionCode);
  };

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: displaySkyColor()}}>
      <DenyLocationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {weatherConditions === 'Clouds' ? (
        <Clouds
          isThemeLight={isThemeLight}
          cloudPercentage={cloudPercentage}
          windSpeed={windSpeed}
        />
      ) : null}
      <Temperature
        avgTemp={avgTemp}
        currentTemp={currentTemp}
        tempMax={tempMax}
        tempMin={tempMin}
        currentWeatherIcon={currentWeatherIcon}
        isThemeLight={isThemeLight}
      />
      {!isThemeLight && <Stars />}
      {weatherConditions === 'Snow' ? <Snow snowfall="medium" /> : null}
      <Mountain />
      <Husky />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
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
