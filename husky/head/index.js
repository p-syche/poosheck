import React, {useState, useEffect} from 'react';
import {Animated, Easing, View} from 'react-native';
import {headStyles} from '../../assets/husky_styles_head';
import {animationTimingFunction} from '../../assets/style_bits';
import Ear from './ear';
import Face from './face';

const Head = () => {
  const [moveHeadRightLeftAnim] = useState(new Animated.Value(0));
  const wobble = moveHeadRightLeftAnim.interpolate({
    inputRange: [
      0,
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
      110,
      120,
      130,
      140,
      150,
    ],
    outputRange: [
      '0deg',
      '0deg',
      '0deg',
      '-14deg',
      '-13deg',
      '-14deg',
      '-7deg',
      '-6deg',
      '-13deg',
      '-14deg',
      '-7deg',
      '-6deg',
      '-7deg',
      '0deg',
      '0deg',
      '0deg',
    ],
  });
  useEffect(() => {
    Animated.loop(
      Animated.timing(moveHeadRightLeftAnim, {
        toValue: 150,
        duration: 9000,
        delay: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);
  return (
    <View style={headStyles.before}>
      <Animated.View
        style={{
          transform: [{rotate: wobble}],
        }}>
        <View style={headStyles.actualHead} />
        <Ear />
        <Face />
      </Animated.View>
    </View>
  );
};

export default Head;
