import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {weatherIconsMap} from '../constants/weather-icons-map';

const WeatherIcon = ({currentWeatherIcon}) => {
  return (
    <View style={styles.iconWrap}>
      <Image
        source={weatherIconsMap(currentWeatherIcon)}
        style={{height: 80, width: 80}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrap: {
    display: 'flex',
    flex: 1,
    height: 80,
    width: 80,
    resizeMode: 'contain',
    position: 'relative',
    marginBottom: -15,
  },
});

export default WeatherIcon;
