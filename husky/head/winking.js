import React, {useRef, useEffect} from 'react';
import {Animated, Easing, View} from 'react-native';
import {headStyles} from '../../assets/husky_styles_head';

const Winking = () => {
  const winkAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(winkAnim, {
          toValue: 0.3,
          duration: 100,
          delay: 2300,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true,
        }),
        Animated.timing(winkAnim, {
          toValue: 1,
          duration: 100,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true,
        }),
        Animated.timing(winkAnim, {
          toValue: 0.3,
          duration: 100,
          delay: 300,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true,
        }),
        Animated.timing(winkAnim, {
          toValue: 1,
          duration: 100,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  return (
    <Animated.View
      style={{
        transform: [{scaleY: winkAnim}],
      }}>
      <View style={headStyles.winking} />
    </Animated.View>
  );
};

export default Winking;
