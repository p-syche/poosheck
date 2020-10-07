import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {
  fullRelativeWidth,
  skyColor,
  fullWidth,
  animationTimingFunction,
} from '../assets/style_bits';
import {shuffledStars} from './star-coords';
import {Svg, Path, Polygon, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SingleStar = ({xValue, depthValue}) => {
  const twinklingStarsAnim = useRef(new Animated.Value(depthValue)).current;

  const randomizedDelay = Math.floor(Math.random() * 900) + 300;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(twinklingStarsAnim, {
          toValue: 0,
          duration: 900,
          delay: randomizedDelay,
          easing: animationTimingFunction,
          useNativeDriver: true,
        }),
        Animated.timing(twinklingStarsAnim, {
          toValue: depthValue,
          duration: 900,
          delay: randomizedDelay,
          easing: animationTimingFunction,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <AnimatedCircle
      cx={xValue}
      cy={twinklingStarsAnim}
      r={twinklingStarsAnim}
      fill="#ffffff"
    />
  );
};

const styles = StyleSheet.create({});

export default SingleStar;
