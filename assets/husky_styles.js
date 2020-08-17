import { StyleSheet } from "react-native";
import { fullRelativeWidth, fullRelativeHeight, huskyBodyColor, tailColor } from "./style_bits";

export const huskyStyles = StyleSheet.create({
  container: {
    position: "absolute",
    height: fullRelativeHeight/2,
    width: fullRelativeWidth
  }
});

export const torsoStyles = StyleSheet.create({
  before: {
    position: "absolute",
    height: fullRelativeHeight*0.23,
    width: fullRelativeWidth*0.43,
    backgroundColor: huskyBodyColor,
    transform: [{ translateX: -(fullRelativeWidth*0.1) }, { translateY: fullRelativeHeight*0.12 }, { rotate: '40deg'}],
    borderTopRightRadius: fullRelativeWidth*3

  },
  after: {
    position: "absolute",
    height: fullRelativeHeight*0.26,
    width: fullRelativeWidth*0.28,
    backgroundColor: huskyBodyColor,
    transform: [{ translateX: fullRelativeHeight*0.04 }, { translateY: fullRelativeHeight*0.08 }],
    borderBottomRightRadius: fullRelativeWidth*0.6,
    borderTopRightRadius: fullRelativeWidth*0.4,
    borderTopLeftRadius: fullRelativeWidth*0.1
  }
});

export const maneStyles = StyleSheet.create({
  before: {
    position: 'absolute',
    transform: [{ translateX: -(fullRelativeHeight*0.01) }, { translateY: fullRelativeHeight*0.065 }],
    backgroundColor: "#ffffff",
    height: fullRelativeHeight*0.06,
    width: fullRelativeWidth*0.36,
    borderTopLeftRadius: fullRelativeWidth*0.2,
    borderTopRightRadius: fullRelativeWidth*0.25,
    borderBottomRightRadius: fullRelativeWidth*0.1,
    borderBottomLeftRadius: fullRelativeWidth*0.2,
  },
  middleRight: {
    position: 'absolute',
    transform: [{ translateX: fullRelativeWidth*0.07 }, { translateY: fullRelativeWidth*0.17 }, { rotate: "23deg" }],
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: fullRelativeWidth*0.08,
    borderRightWidth: fullRelativeWidth*0.12,
    borderBottomWidth: fullRelativeWidth*0.1,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffffff'
  },
  after: {
    position: 'absolute',
    transform: [{ translateX: fullRelativeWidth*0.185 }, { translateY: fullRelativeWidth*0.18 }, { rotate: "-30deg" }],
    backgroundColor: "#ffffff",
    height: fullRelativeHeight*0.06,
    width: fullRelativeWidth*0.18,
    borderBottomRightRadius: fullRelativeWidth*0.4
  }
});

export const frontLegStyles = StyleSheet.create({
  leftLegTop: {
    position: 'absolute',
    transform: [{ translateX: -(fullRelativeWidth*0.04) }, { translateY: fullRelativeHeight*0.25}, { rotate: "-77deg" }],
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: fullRelativeWidth*0.3,
    borderRightWidth: fullRelativeWidth*0.09,
    borderBottomWidth: fullRelativeWidth*0.1,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#B9C4D3'
  },
  leftLegBottom: {
    position: 'absolute',
    transform: [{ translateY: fullRelativeHeight*0.18}, { translateX: fullRelativeWidth*0.163}],
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: fullRelativeWidth*0.085,
    borderBottomWidth: fullRelativeWidth*0.35,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#B9C4D3'
  },
  rightLegTop: {
    transform: [{ scaleX: -1 }, { rotate: "-79deg" }, { translateX: -(fullRelativeHeight*0.26)}, { translateY: -(fullRelativeHeight*0.025) }],
    borderBottomColor: '#A3ADBB'
  },
  rightLegBottom: {
    transform: [ { translateY: fullRelativeHeight*0.18}, { translateX: fullRelativeWidth*0.247}, { scaleX: -1 }],
    borderBottomColor: '#A3ADBB'
  },
  leftClaw: {
    position: 'absolute',
    transform: [{ translateX: fullRelativeWidth*0.19 }, { translateY: fullRelativeHeight*0.34 }],
    backgroundColor: "#a3adba",
    width: fullRelativeWidth*0.01,
    height: fullRelativeHeight*0.03
  },
  rightClaw: {
    transform: [{ translateX: fullRelativeWidth*0.21 }, { translateY: fullRelativeHeight*0.34 }],
  },
  rightClawTwo: {
    transform: [{ translateX: fullRelativeWidth*0.27 }, { translateY: fullRelativeHeight*0.34 }],
    backgroundColor: "#383b44"
  },
  rightClawThree: {
    transform: [{ translateX: fullRelativeWidth*0.29 }, { translateY: fullRelativeHeight*0.34 }],
    backgroundColor: "#383b44"
  }
});

export const hindLegStyles = StyleSheet.create({
  thighStyles: {
    position: 'absolute',
    width: fullRelativeWidth*0.34,
    height: fullRelativeHeight*0.15,
    transform: [{ translateX: -(fullRelativeWidth*0.24) }, { translateY: fullRelativeHeight*0.22 }],
    backgroundColor: huskyBodyColor,
    borderTopLeftRadius: fullRelativeWidth*0.11,
    borderTopRightRadius: fullRelativeWidth*0.25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: fullRelativeWidth*0.11,
  },
  pawStyles: {
    position: 'absolute',
    width: fullRelativeWidth*0.14,
    height: fullRelativeHeight*0.035,
    borderTopLeftRadius: fullRelativeWidth*0.05,
    borderTopRightRadius: fullRelativeWidth*0.05,
    backgroundColor: '#A3ADBB',
    transform: [{ translateX: -(fullRelativeWidth*0.16) }, { translateY: fullRelativeHeight*0.33 }],
  },
  rightClaw: {
    position: 'absolute',
    transform: [{ translateX: -(fullRelativeWidth*0.06) }, { translateY: fullRelativeHeight*0.35 }],
    backgroundColor: "#383b44",
    width: fullRelativeWidth*0.01,
    height: fullRelativeHeight*0.03
  },
  leftClaw: {
    transform: [{ translateX: -(fullRelativeWidth*0.085) }, { translateY: fullRelativeHeight*0.35 }],
  }
});

export const tailStyles = StyleSheet.create({
  firstBit: {
    position: 'absolute',
    transform: [{ translateX: -(fullRelativeWidth*0.31) }, { translateY: fullRelativeHeight*0.335 }],
    backgroundColor: tailColor,
    width: fullRelativeWidth*0.15,
    height: fullRelativeHeight*0.026
  },
  firstMovingPart: {
    position: 'absolute',
    backgroundColor: tailColor,
    width: fullRelativeWidth*0.05,
    height: fullRelativeHeight*0.026,
    borderBottomLeftRadius: 30
  },
  secondMovingPart: {
    backgroundColor: tailColor,
    position: 'absolute',
    width: fullRelativeWidth*0.05,
    height: fullRelativeHeight*0.026,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  }
})