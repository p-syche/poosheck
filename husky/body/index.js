import React, {useState, useEffect} from 'react';
import {Animated, Easing, View} from 'react-native';
import Mane from './mane';
import FrontLegs from './front-legs';
import HindLegs from './hind-legs';
import Tail from './tail';
import {torsoStyles} from '../../assets/husky_styles';
import {
  fullRelativeHeight,
  animationTimingFunction,
} from '../../assets/style_bits';
import Head from '../head';

const Body = () => {
  const [moveUpDownAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveUpDownAnim, {
          toValue: fullRelativeHeight * 0.015,
          duration: 800,
          delay: 1000,
          easing: animationTimingFunction,
          useNativeDriver: true,
        }),
        Animated.timing(moveUpDownAnim, {
          toValue: 0,
          duration: 700,
          easing: animationTimingFunction,
          useNativeDriver: true,
        }),
        Animated.timing(moveUpDownAnim, {
          toValue: fullRelativeHeight * 0.006,
          duration: 700,
          delay: 1000,
          easing: animationTimingFunction,
          useNativeDriver: true,
        }),
        Animated.timing(moveUpDownAnim, {
          toValue: 0,
          duration: 800,
          easing: animationTimingFunction,
          useNativeDriver: true,
        }),
      ]),
    );
  }, []);
  return (
    <View>
      <Animated.View
        style={{
          transform: [{translateY: moveUpDownAnim}],
        }}>
        <Head />
        <View style={torsoStyles.before} />
        <View style={torsoStyles.after} />
      </Animated.View>
      <Tail />
      <HindLegs />
      <FrontLegs />
      <Mane />
    </View>
  );
};

export default Body;
