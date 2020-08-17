import { StyleSheet } from "react-native";
import { fullWidth, fullHeight, groundColor } from "./style_bits";

export const mountainStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 100,
    left: 0,
    height: fullHeight/5,
    width: fullWidth,
    backgroundColor: "#96bbe6"
  },
  before: {
    position: "absolute",
    borderTopLeftRadius: 130,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 200,
    borderBottomRightRadius: 120,
    width: fullWidth/1.2,
    height: fullHeight/2.1,
    backgroundColor: '#96bbe6',
    left: -100,
    bottom: -100,
    transform: [{ rotate: "30deg" }]
  },
  after: {
    position: "absolute",
    borderTopLeftRadius: 200,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 120,
    bottom: -(fullHeight/8),
    right: -(fullWidth/10),
    width: fullWidth/1.3,
    height: fullHeight/2,
    backgroundColor: "#96bbe6",
    transform: [{ rotateX: "-55deg" }]
  },
  front: {
    position: "absolute",
    bottom: fullHeight/7,
    left: -(fullWidth/5),
    height: fullHeight/8,
    width: fullWidth*4
  },
  back: {
    position: "absolute",
    bottom: fullHeight/5,
    height: fullHeight/8,
    width: fullWidth,
    opacity: 0.7
  },
  bottomBg: {
    height: fullHeight/5,
    width: fullWidth,
    bottom: 0,
    backgroundColor: groundColor
  },
  bottomOfScreen: {
    position: "absolute",
    bottom: -100,
    height: fullHeight*0.3,
    width: fullWidth,
    backgroundColor: groundColor
  }
});