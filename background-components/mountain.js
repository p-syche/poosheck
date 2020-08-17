import React from "react";
import { View } from "react-native";
import { mountainStyles } from "../assets/mountain_styles";
import { Svg, Path, Polygon } from "react-native-svg";
import { fullHeight, fullWidth } from "../assets/style_bits";

const Mountain = () => {
  return (
    <View style={mountainStyles.container}>
      <View style={mountainStyles.before}></View>
      <View style={mountainStyles.after}></View>
      <View style={mountainStyles.bottomOfScreen}></View>
      <Svg style={mountainStyles.back}>
        <Path
          d="M375,27c-37,0-82.5-19-125-19s-88,19-125,19S42.5,8,0,8v70h250h250V8C457.5,8,412,27,375,27z"
          fill="#dbe8f7"
          stroke="none"
        />
        <Polygon
          points="256.3,0 254.7,6.5 256.1,6.5 256.1,8.4 256.3,8.4 256.5,8.4 256.5,6.5 258,6.5"
          fill="#135c07"
          stroke="none"
          // strokeWidth="1"
        />
        <Polygon
          points="252.8,0 251.2,6.5 252.6,6.5 252.6,8.4 252.8,8.4 253,8.4 253,6.5 254.4,6.5"
          fill="#135c07"
          stroke="none"
        />
        <Polygon
          points="21.4,1.3 19.7,7.8 21.2,7.8 21.2,9.7 21.4,9.7 21.6,9.7 21.6,7.8 23,7.8"
          fill="#135c07"
          stroke="none"
        />
      </Svg>
      <Svg style={mountainStyles.front}>
        <Path
          d="M375,27c-37,0-82.5-19-125-19s-88,19-125,19S42.5,8,0,8v70h250h250V8C457.5,8,412,27,375,27z"
          fill="#dbe8f7"
          stroke="none"
        />
      </Svg>
      <View style={mountainStyles.bottomBg}></View>
    </View>
  )
};

export default Mountain;
