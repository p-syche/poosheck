import React from 'react';
import { View } from 'react-native';
import { frontLegStyles } from "../../assets/husky_styles";

const FrontLegs = () => {
  return (
    <View>
      <View style={frontLegStyles.leftLegTop}></View>
      <View style={frontLegStyles.leftLegBottom}></View>
      <View style={[ frontLegStyles.leftLegTop, frontLegStyles.rightLegTop ]}></View>
      <View style={[ frontLegStyles.leftLegBottom, frontLegStyles.rightLegBottom ]}></View>
      <View style={frontLegStyles.leftClaw}></View>
      <View style={[ frontLegStyles.leftClaw, frontLegStyles.rightClaw]}></View>
      <View style={[ frontLegStyles.leftClaw, frontLegStyles.rightClawTwo]}></View>
      <View style={[ frontLegStyles.leftClaw, frontLegStyles.rightClawThree]}></View>
    </View>
  );
};

export default FrontLegs;
