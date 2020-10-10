import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  fullRelativeWidth,
  skyColor,
  mainFontFamily,
  darkSkyFontFamily,
} from '../assets/style_bits';
import WeatherIcon from './weather-icon';

const Temperature = ({
  avgTemp,
  currentTemp,
  tempMin,
  tempMax,
  currentWeatherIcon,
  isThemeLight,
}) => {
  const customFontFamily = isThemeLight ? mainFontFamily : darkSkyFontFamily;
  const customFontColor = isThemeLight ? '#000000' : '#ffffff';
  const customFontStyles = {
    fontFamily: customFontFamily,
    color: customFontColor,
    fontSize: 24,
  };

  const customFontStylesNoOutline = {
    fontFamily: mainFontFamily,
    color: customFontColor,
  };

  return (
    <View style={{position: 'absolute', top: 50, alignContent: 'center'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 20,
          justifyContent: 'space-between',
          alignContent: 'flex-end',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'flex-end',
          }}>
          <Text
            style={{
              ...customFontStylesNoOutline,
              fontSize: 16,
              alignSelf: 'flex-end',
            }}>
            Average:{'  '}
          </Text>
          <Text style={{...customFontStyles, alignSelf: 'flex-end'}}>
            {avgTemp}&deg;C
          </Text>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <WeatherIcon currentWeatherIcon={currentWeatherIcon} />
        </View>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: customFontColor,
          width: fullRelativeWidth,
          height: 1,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text
          style={{
            ...customFontStylesNoOutline,
            fontSize: 16,
            alignSelf: 'flex-end',
          }}>
          Currently:{'  '}
        </Text>
        <Text style={{...customFontStyles, fontSize: 23}}>
          {currentTemp}&deg;C
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            ...customFontStylesNoOutline,
            fontSize: 14,
            alignSelf: 'flex-end',
          }}>
          Min:{' '}
        </Text>
        <Text
          style={{...customFontStyles, fontSize: 16, alignSelf: 'flex-end'}}>
          {tempMin}&deg;C
        </Text>
        <Text
          style={{...customFontStyles, fontSize: 18, alignSelf: 'flex-end'}}>
          {' '}
          |{' '}
        </Text>
        <Text
          style={{
            ...customFontStylesNoOutline,
            fontSize: 14,
            alignSelf: 'flex-end',
          }}>
          Max:{' '}
        </Text>
        <Text
          style={{...customFontStyles, fontSize: 16, alignSelf: 'flex-end'}}>
          {tempMax}&deg;C
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    // fontFamily: mainFontFamily,
  },
});

export default Temperature;
