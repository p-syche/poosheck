import React, {useState, useEffect} from 'react';
import {Animated, Easing, View} from 'react-native';
import {headStyles} from '../../assets/husky_styles_head';

const Ear = () => {
  const [moveHeadRightLeftAnim] = useState(new Animated.Value(0));
  const shakeEar = moveHeadRightLeftAnim.interpolate({
    inputRange: [0, 10, 20, 30, 40, 50, 60, 70],
    outputRange: [
      '0deg',
      '6deg',
      '6deg',
      '15deg',
      '15deg',
      '6deg',
      '6deg',
      '0deg',
    ],
  });
  useEffect(() => {
    Animated.loop(
      Animated.timing(moveHeadRightLeftAnim, {
        toValue: 70,
        duration: 4000,
        delay: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);
  return (
    <View>
      <View style={headStyles.beforeLeftEar}>
        <View style={[headStyles.earExterior, headStyles.earExteriorLeft]}>
          <View style={headStyles.earInterior} />
        </View>
      </View>
      <View style={headStyles.beforeRightEar}>
        <View style={[headStyles.earExterior, headStyles.earExteriorRight]}>
          <View style={[headStyles.earInterior, headStyles.earInteriorRight]} />
        </View>
      </View>
    </View>
  );
};

export default Ear;
