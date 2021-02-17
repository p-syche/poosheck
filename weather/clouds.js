import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Animated, Easing} from 'react-native';
import {fullRelativeWidth, skyColor} from '../assets/style_bits';
import SingleCloud from './single-cloud';

const Clouds = ({isThemeLight}) => {
  const customFontColor = isThemeLight ? '#000000' : '#ffffff';
  const moveCloud = useRef(new Animated.Value(0)).current;
  const moveCloud2 = useRef(new Animated.Value(0)).current;
  const moveCloud3 = useRef(new Animated.Value(0)).current;
  const moveCloud4 = useRef(new Animated.Value(0)).current;
  const moveCloud5 = useRef(new Animated.Value(0)).current;

  const cloudSpeed = 7500;

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveCloud, {
        toValue: fullRelativeWidth + 300,
        duration: cloudSpeed + 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveCloud2, {
        toValue: fullRelativeWidth + 500,
        duration: cloudSpeed + 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveCloud3, {
        toValue: fullRelativeWidth + 600,
        duration: cloudSpeed + 900,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveCloud4, {
        toValue: fullRelativeWidth + 600,
        duration: cloudSpeed - 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveCloud5, {
        toValue: fullRelativeWidth + 600,
        duration: cloudSpeed + 900,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <View
      style={{
        position: 'absolute',
        top: 30,
        left: -150,
        alignContent: 'center',
      }}>
      <Animated.View
        style={[styles.cloud1, {transform: [{translateX: moveCloud}]}]}>
        <SingleCloud />
      </Animated.View>
      <Animated.View
        style={[styles.cloud2, {transform: [{translateX: moveCloud2}]}]}>
        <SingleCloud />
      </Animated.View>
      <Animated.View
        style={[styles.cloud3, {transform: [{translateX: moveCloud3}]}]}>
        <SingleCloud />
      </Animated.View>
      <Animated.View
        style={[styles.cloud4, {transform: [{translateX: moveCloud4}]}]}>
        <SingleCloud />
      </Animated.View>
      <Animated.View
        style={[styles.cloud5, {transform: [{translateX: moveCloud5}]}]}>
        <SingleCloud />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cloud1: {
    top: 10,
    opacity: 0.9,
  },
  cloud2: {
    left: -100,
    top: 160,
    transform: [{scale: 0.6}],
    opacity: 0.6,
  },
  cloud3: {
    left: -150,
    top: 60,
    transform: [{scale: 0.8}],
    opacity: 0.8,
  },
  cloud4: {
    left: -270,
    top: -60,
    transform: [{scale: 0.7}],
    opacity: 0.7,
  },
  cloud5: {
    left: -50,
    top: -150,
    transform: [{scale: 0.4}],
    opacity: 0.4,
  },
});

export default Clouds;
