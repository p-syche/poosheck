import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  fullRelativeWidth,
  skyColor,
  fullWidth,
  animationTimingFunction,
} from '../assets/style_bits';
import {shuffledStars} from './star-coords';
import {Svg, Path, Polygon, Circle} from 'react-native-svg';
import SingleStar from './single-star';

const Stars = () => {
  const [arrayOfShuffledStars] = useState(shuffledStars());

  return (
    <View
      style={{
        position: 'absolute',
        top: 10,
      }}>
      {arrayOfShuffledStars.map((key, value) => {
        return (
          <Svg height="10" width={fullWidth} key={value}>
            <SingleStar xValue={key.x} depthValue={key.depth} />
          </Svg>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Stars;
