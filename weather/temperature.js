import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {fullRelativeWidth, skyColor} from '../assets/style_bits';

const Temperature = ({currentTemp, feelsLike, tempMin, tempMax}) => {
  return (
    <View style={{position: 'absolute', top: 50}}>
      <Text style={{fontSize: 24}}>
        Current temperature: {currentTemp}&deg;C
      </Text>
      <Text style={{fontSize: 24}}>Feels like: {feelsLike}&deg;C</Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontSize: 16}}>Min temp: {tempMin}&deg;C</Text>
        <Text style={{fontSize: 16}}> | </Text>
        <Text style={{fontSize: 16}}>Max temp: {tempMax}&deg;C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Temperature;
