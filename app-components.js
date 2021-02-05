import React, {useRef, useState, useEffect} from 'react';
import RNLocation from 'react-native-location';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import Mountain from './background-components/mountain';
import Husky from './husky';
import Temperature from './weather/temperature';
import Clouds from './weather/clouds';
import Stars from './stars/stars';
import SettingsIconButton from './background-components/settings-icon-button';
import {fullRelativeWidth, skyColor, darkSkyColor} from './assets/style_bits';
import {openWeatherRequest} from './constants/open-weather';
import DenyLocationModal from './deny-location-modal';
import Snow from 'react-native-snow';

const AppComponents = ({
  navigation,
  refreshing,
  weatherResponse,
  temperatureUnit,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [avgTemp, setAvgTemp] = useState('--');
  const [currentTemp, setCurrentTemp] = useState('--');
  const [tempMin, setTempMin] = useState('--');
  const [tempMax, setTempMax] = useState('--');
  const [isThemeLight, setIsThemeLight] = useState(skyColor);
  const [weatherConditions, setWeatherConditions] = useState('Clear');
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState('');

  useEffect(() => {
    if (weatherResponse.current !== undefined) {
      setTemperatures(weatherResponse);
    }
  }, [weatherResponse]);

  const setTemperatures = (response) => {
    let averageTemp;

    const weatherIcon = response.current.weather[0].icon;
    const averageWeatherIcon = response.daily.weather[0].icon;
    if (weatherIcon.includes('d')) {
      setIsThemeLight(true);
      setAvgTemp(Math.round(response.daily.temp.day));
      setCurrentWeatherIcon(averageWeatherIcon.substring(0, 2) + 'd');
    } else {
      setIsThemeLight(false);
      setAvgTemp(Math.round(response.daily.temp.night));
      setCurrentWeatherIcon(averageWeatherIcon.substring(0, 2) + 'n');
    }

    setWeatherConditions(response.daily.weather[0].main);

    setTempMax(response.daily.temp.max);
    setTempMin(response.daily.temp.min);

    const currentRoundedTemperature = Math.round(response.current.temp);
    setCurrentTemp(currentRoundedTemperature);
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
      style={{
        ...styles.container,
        backgroundColor: displaySkyColor(),
      }}>
      <DenyLocationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {weatherConditions === 'Clouds' ? (
        <Clouds isThemeLight={isThemeLight} />
      ) : null}
      <Temperature
        avgTemp={avgTemp}
        currentTemp={currentTemp}
        tempMax={tempMax}
        tempMin={tempMin}
        currentWeatherIcon={currentWeatherIcon}
        isThemeLight={isThemeLight}
        temperatureUnit={temperatureUnit}
      />
      {!isThemeLight && <Stars />}
      {weatherConditions === 'Snow' ? <Snow snowfall="medium" /> : null}
      <Mountain />
      <Husky />
      <SettingsIconButton navigation={navigation} />
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
