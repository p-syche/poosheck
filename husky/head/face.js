import React, {useRef, useEffect} from 'react';
import {Animated, Easing, View} from 'react-native';
import {headStyles} from '../../assets/husky_styles_head';
import {fullRelativeWidth, fullRelativeHeight} from '../../assets/style_bits';
import Eyes from './eyes';
import Nose from './nose';
import Mouth from './mouth';

const Face = () => {
  const moveRightLeftAnim = useRef(new Animated.Value(0)).current;
  const moveUpDownAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveRightLeftAnim, {
          toValue: -(fullRelativeWidth * 0.03),
          duration: 700,
          delay: 2100,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(moveRightLeftAnim, {
            toValue: 0,
            duration: 800,
            delay: 1800,
            easing: Easing.bezier(0.645, 0.045, 0.355, 1),
            useNativeDriver: true,
          }),
          Animated.timing(moveUpDownAnim, {
            toValue: -(fullRelativeHeight * 0.02),
            duration: 800,
            delay: 1800,
            easing: Easing.bezier(0.645, 0.045, 0.355, 1),
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(moveUpDownAnim, {
          toValue: 0,
          duration: 700,
          delay: 1000,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true,
        }),
        Animated.timing(moveUpDownAnim, {
          toValue: 0,
          duration: 2900,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  return (
    <Animated.View
      style={{
        transform: [
          {translateY: moveRightLeftAnim},
          {translateX: moveUpDownAnim},
        ],
      }}>
      <View style={headStyles.face} />
      <Eyes />
      <Nose />
      <Mouth />
    </Animated.View>
  );
};

export default Face;
