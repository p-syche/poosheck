import React, { useState, useEffect } from 'react';
import { Animated, Easing, View } from 'react-native';
import { headStyles } from "../../assets/husky_styles_head";
import { fullRelativeWidth, fullRelativeHeight } from "../../assets/style_bits";
import Winking from "./winking";

const Eyes = () => {
  const [moveRightLeftAnim] = useState(new Animated.Value(0));
  const [moveUpDownAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveRightLeftAnim, {
          toValue: -(fullRelativeWidth*0.03),
          duration: 700,
          delay: 2100,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true
        }),
        Animated.parallel([
          Animated.timing(moveRightLeftAnim, {
            toValue: 0,
            duration: 800,
            delay: 1800,
            easing: Easing.bezier(0.645, 0.045, 0.355, 1),
            useNativeDriver: true
          }),
          Animated.timing(moveUpDownAnim, {
            toValue: -(fullRelativeHeight*0.013),
            duration: 800,
            delay: 1800,
            easing: Easing.bezier(0.645, 0.045, 0.355, 1),
            useNativeDriver: true
          }),
        ]),
        Animated.timing(moveUpDownAnim, {
          toValue: 0,
          duration: 700,
          delay: 1300,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true
        }),
        Animated.timing(moveUpDownAnim, {
          toValue: 0,
          duration: 2600,
          easing: Easing.bezier(0.645, 0.045, 0.355, 1),
          useNativeDriver: true
        })
      ]),
    ).start()
  }, []);
  return (
    <View>
      <View style={[headStyles.eyeBG, headStyles.eyeRight]}></View>
      <View style={headStyles.eyeBG}>
        <Animated.View style={{
          transform: [{ translateY: moveRightLeftAnim }, { translateX: moveUpDownAnim }]
        }}>
          <View style={headStyles.iris}>
            <Winking />
          </View>
      </Animated.View>
      </View>
    </View>
  );
};

export default Eyes;
