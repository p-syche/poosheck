import React, { useState, useEffect } from 'react';
import { Animated, Easing, View } from 'react-native';
import { maneStyles } from "../../assets/husky_styles";
import { fullRelativeHeight } from "../../assets/style_bits";

const Mane = () => {
  const [moveUpDownAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveUpDownAnim, {
          toValue: fullRelativeHeight*0.02,
          duration: 800,
          delay: 1000,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true
        }),
        Animated.timing(moveUpDownAnim, {
          toValue: 0,
          duration: 700,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true
        }),
        Animated.timing(moveUpDownAnim, {
          toValue: fullRelativeHeight*0.01,
          duration: 700,
          delay: 1000,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true
        }),
        Animated.timing(moveUpDownAnim, {
          toValue: 0,
          duration: 800,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true
        })
      ])
    ).start()
  }, []);
  return (
    <Animated.View style={{
      transform: [{ translateY: moveUpDownAnim }]
    }}>
      <View style={maneStyles.before}></View>
      <View style={maneStyles.middleRight}></View>
      <View style={maneStyles.after}></View>
    </Animated.View>
  );
};

export default Mane;
