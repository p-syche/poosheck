import { StyleSheet } from "react-native";
import { fullRelativeWidth, fullRelativeHeight, huskyBodyColor, tailColor } from "./style_bits";

const whiteColor = "#ffffff";

export const headStyles = StyleSheet.create({
  before: {
    position: "absolute",
    transform: [{ rotate: "90deg" }],
  },
  actualHead: {
    height: fullRelativeHeight*0.15,
    width: fullRelativeWidth*0.4,
    backgroundColor: huskyBodyColor,
    transform: [{ translateX: -(fullRelativeWidth*0.12) }, { translateY: fullRelativeHeight*0.02 }],
    borderTopLeftRadius: fullRelativeWidth*0.2,
    borderTopRightRadius: fullRelativeWidth*0.05,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: fullRelativeWidth*0.2
  },
  face: {
    position: "absolute",
    height: fullRelativeHeight*0.073,
    width: fullRelativeWidth*0.25,
    backgroundColor: whiteColor,
    transform: [{ translateX: -(fullRelativeWidth*0.063) }, { translateY: -(fullRelativeHeight*0.092) }, { rotate: "90deg" }],
    borderTopLeftRadius: fullRelativeWidth*0.2,
    borderTopRightRadius: fullRelativeWidth*0.2,
    borderBottomRightRadius: fullRelativeWidth*0.2,
    borderBottomLeftRadius: fullRelativeWidth*0.2
  },
  eyeBG: {
    position: "absolute",
    height: fullRelativeHeight*0.05,
    width: fullRelativeWidth*0.09,
    backgroundColor: whiteColor,
    transform: [{ translateX: -(fullRelativeWidth*0.05) }, { translateY: -(fullRelativeHeight*0.1) }],
    borderTopLeftRadius: fullRelativeWidth*0.2,
    borderTopRightRadius: fullRelativeWidth*0.2,
    borderBottomRightRadius: fullRelativeWidth*0.2,
    borderBottomLeftRadius: fullRelativeWidth*0.2
  },
  eyeRight: {
    transform: [{ translateX: -(fullRelativeWidth*0.05) }, { translateY: -(fullRelativeHeight*0.065) }],
  },
  iris: {
    position: "absolute",
    height: fullRelativeHeight*0.007,
    width: fullRelativeWidth*0.08,
    backgroundColor: "transparent",
    transform: [{ translateY: fullRelativeHeight*0.04 }, { rotate: "90deg" }],
  },
  winking: {
    borderColor: "#5D8BC3",
    borderLeftWidth: fullRelativeWidth*0.01,
    borderRightWidth: fullRelativeWidth*0.01,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    height: "100%"
  },
  nose: {
    position: "absolute",
    height: fullRelativeHeight*0.03,
    width: fullRelativeWidth*0.04,
    backgroundColor: "#444444",
    transform: [{ translateX: fullRelativeWidth*0.02 }, { translateY: -(fullRelativeHeight*0.074) }],
    borderBottomRightRadius: fullRelativeWidth*0.2,
    borderTopRightRadius: fullRelativeWidth*0.2,
    borderBottomLeftRadius: fullRelativeWidth*0.06,
    borderTopLeftRadius: fullRelativeWidth*0.06
  },
  beforeLeftEar: {
    transform: [{ rotate: "290deg" }]
  },
  earExterior: {
    position: "absolute",
    height: fullRelativeHeight*0.06,
    width: fullRelativeWidth*0.13,
    backgroundColor: huskyBodyColor,
    transform: [{ translateX: fullRelativeWidth*0.01 }, { translateY: -(fullRelativeHeight*0.15) }],
  },
  earExteriorLeft: {
    borderTopLeftRadius: fullRelativeWidth*0.02,
    borderBottomLeftRadius: fullRelativeWidth*0.2
  },
  earInterior: {
    position: "absolute",
    height: 0,
    width: 0,
    transform: [{ rotate: "290deg" }, {translateX: fullRelativeWidth*0.01 }, {translateY: fullRelativeHeight*0.02 }],
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: fullRelativeWidth*0.025,
    borderRightWidth: fullRelativeWidth*0.025,
    borderBottomWidth: fullRelativeWidth*0.07,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#DE6465'
  },
  beforeRightEar: {
    transform: [{ rotate: "70deg" }, { translateX: -(fullRelativeWidth*0.18) }, { translateY: fullRelativeHeight*0.22 }],
  },
  earExteriorRight: {
    borderTopLeftRadius: fullRelativeWidth*0.2,
    borderBottomLeftRadius: fullRelativeWidth*0.02
  },
  earInteriorRight: {
    transform: [{ rotate: "240deg" }, {translateX: -(fullRelativeWidth*0.05) }, {translateY: fullRelativeHeight*0.005 }],
  },
  mouthLeft: {
    position: "absolute",
    height: fullRelativeHeight*0.032,
    width: fullRelativeWidth*0.03,
    backgroundColor: "transparent",
    transform: [{ translateX: fullRelativeWidth*0.07 }, { translateY: -(fullRelativeHeight*0.06) }],
    borderStyle: 'solid',
    borderTopLeftRadius: fullRelativeWidth*0.01,
    borderTopRightRadius: fullRelativeWidth*0.025,
    borderBottomRightRadius: fullRelativeWidth*0.035,
    borderWidth: fullRelativeWidth*0.005,
    borderLeftWidth: 0,
    borderColor: '#A3ADBB'
  },
  mouthRight: {
    position: "absolute",
    height: fullRelativeHeight*0.032,
    width: fullRelativeWidth*0.03,
    backgroundColor: "transparent",
    transform: [{ translateX: fullRelativeWidth*0.07 }, { translateY: -(fullRelativeHeight*0.09) }],
    borderStyle: 'solid',
    borderBottomLeftRadius: fullRelativeWidth*0.01,
    borderBottomRightRadius: fullRelativeWidth*0.025,
    borderTopRightRadius: fullRelativeWidth*0.035,
    borderWidth: fullRelativeWidth*0.005,
    borderLeftWidth: 0,
    borderColor: '#A3ADBB'
  }
});