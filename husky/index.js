import React from 'react';
import { StyleSheet, View } from 'react-native';
import Body from "./body"
import { fullWidth, fullHeight, groundColor, fullRelativeHeight, fullRelativeWidth } from "../assets/style_bits";

const Husky = () => {
  return (
    <View>
      <Body />
      <View style={styles.coverUp}></View>
      <View style={styles.shadow}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    position: 'absolute',
    top: fullRelativeHeight/2.8,
    transform: [{ translateX: -(fullRelativeWidth*0.45) }],
    borderTopWidth: 3,
    borderColor: "#B9C4D3",
    borderTopLeftRadius: fullRelativeWidth*0.2,
    borderTopRightRadius: fullRelativeWidth*0.2,
    borderBottomRightRadius: fullRelativeWidth*0.2,
    borderBottomLeftRadius: fullRelativeWidth*0.2,
    width: fullRelativeWidth*0.8
  },
  coverUp: {
    position: 'absolute',
    top: fullRelativeHeight/2.8,
    transform: [{ translateX: -(fullRelativeWidth*0.35) }],
    width: fullRelativeWidth*0.7,
    height: 400,
    backgroundColor: groundColor
  }
});

export default Husky;
