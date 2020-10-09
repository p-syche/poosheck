import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Animated, Easing} from 'react-native';
import {fullRelativeWidth, skyColor} from '../assets/style_bits';

const Clouds = ({isThemeLight}) => {
  const customFontColor = isThemeLight ? '#000000' : '#ffffff';
  const moveCloud = useRef(new Animated.Value(0)).current;
  const moveCloud2 = useRef(new Animated.Value(0)).current;
  const moveCloud3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveCloud, {
        toValue: fullRelativeWidth + 300,
        duration: 3200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveCloud2, {
        toValue: fullRelativeWidth + 500,
        duration: 4300,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveCloud3, {
        toValue: fullRelativeWidth + 500,
        duration: 3900,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: -50,
        alignContent: 'center',
      }}>
      <Animated.View
        style={[
          styles.cloud,
          styles.cloud1,
          {transform: [{translateX: moveCloud}]},
        ]}
      />
      <Animated.View
        style={[
          styles.cloud,
          styles.cloud2,
          {transform: [{translateX: moveCloud2}]},
        ]}
      />
      <Animated.View
        style={[
          styles.cloud,
          styles.cloud3,
          {transform: [{translateX: moveCloud3}]},
        ]}
      />
      <Animated.View style={[styles.cloud, styles.cloud4]} />
      <Animated.View style={[styles.cloud, styles.cloud5]} />
    </View>
  );
};

const styles = StyleSheet.create({
  cloud: {
    width: 100,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 100,
    position: 'relative',
  },
  cloud1: {},
  cloud2: {
    left: -200,
    transform: [{scale: 0.6}],
    opacity: 0.6,
  },
  cloud3: {
    left: -250,
    top: 80,
    transform: [{scale: 0.8}],
    opacity: 0.8,
  },
  cloud4: {},
  cloud5: {},
});

export default Clouds;
