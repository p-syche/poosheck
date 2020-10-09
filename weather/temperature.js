import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  fullRelativeWidth,
  skyColor,
  mainFontFamily,
  darkSkyFontFamily,
} from '../assets/style_bits';

const Temperature = ({
  currentTemp,
  feelsLike,
  tempMin,
  tempMax,
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
      <Text style={{...customFontStyles, marginBottom: 20}}>
        {currentTemp}&deg;C
      </Text>
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
        <Text style={{...customFontStylesNoOutline, fontSize: 18}}>
          Feels like:{'  '}
        </Text>
        <Text style={{...customFontStyles, fontSize: 23}}>
          {feelsLike}&deg;C
        </Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={{...customFontStylesNoOutline, fontSize: 16}}>Min: </Text>
        <Text style={{...customFontStyles, fontSize: 16}}>{tempMin}&deg;C</Text>
        <Text style={{...customFontStyles, fontSize: 16}}> | </Text>
        <Text style={{...customFontStylesNoOutline, fontSize: 16}}>Max: </Text>
        <Text style={{...customFontStyles, fontSize: 16}}>{tempMax}&deg;C</Text>
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
