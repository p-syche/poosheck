import React from 'react';
import { View } from 'react-native';
import { hindLegStyles } from "../../assets/husky_styles";

const HindLegs = () => {
  return (
    <View>
      <View style={hindLegStyles.thighStyles}></View>
      <View style={hindLegStyles.pawStyles}></View>
      <View style={hindLegStyles.rightClaw}></View>
      <View style={[hindLegStyles.rightClaw, hindLegStyles.leftClaw]}></View>
    </View>
  );
};

export default HindLegs;
