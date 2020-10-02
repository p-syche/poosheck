import React, {useRef, useEffect} from 'react';
import {Animated, Easing, View} from 'react-native';
import {tailStyles} from '../../assets/husky_styles';
import {fullRelativeHeight, fullRelativeWidth} from '../../assets/style_bits';

const Tail = () => {
  const moveTailAnimation = useRef(new Animated.Value(0)).current;
  const spin = moveTailAnimation.interpolate({
    inputRange: [
      0,
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
      110,
      120,
      130,
      140,
      150,
      160,
      170,
      180,
      190,
      200,
      210,
      220,
      230,
      240,
      250,
      260,
      270,
      280,
      290,
      300,
      310,
      320,
      330,
      340,
      350,
      360,
      370,
      380,
    ],
    outputRange: [
      '0deg',
      '0deg',
      '0deg',
      '0deg',
      '0deg',
      '10deg',
      '30deg',
      '0deg',
      '0deg',
      '30deg',
      '30deg',
      '0deg',
      '0deg',
      '0deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
      '28deg',
      '0deg',
    ],
  });
  useEffect(() => {
    Animated.loop(
      Animated.timing(moveTailAnimation, {
        toValue: 380,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);
  return (
    <View style={tailStyles.firstBit}>
      <Animated.View
        style={[
          tailStyles.firstMovingPart,
          {
            transform: [
              {translateX: -(fullRelativeWidth * 0.02)},
              {rotate: spin},
            ],
          },
        ]}>
        <Animated.View
          style={[
            tailStyles.secondMovingPart,
            {
              transform: [
                {translateX: -(fullRelativeWidth * 0.02)},
                {rotate: spin},
              ],
            },
          ]}>
          <Animated.View
            style={[
              tailStyles.secondMovingPart,
              {
                transform: [
                  {translateX: -(fullRelativeWidth * 0.02)},
                  {rotate: spin},
                ],
              },
            ]}>
            <Animated.View
              style={[
                tailStyles.secondMovingPart,
                {
                  transform: [
                    {translateX: -(fullRelativeWidth * 0.02)},
                    {rotate: spin},
                  ],
                },
              ]}>
              <Animated.View
                style={[
                  tailStyles.secondMovingPart,
                  {
                    transform: [
                      {translateX: -(fullRelativeWidth * 0.02)},
                      {rotate: spin},
                    ],
                  },
                ]}>
                <Animated.View
                  style={[
                    tailStyles.secondMovingPart,
                    {
                      transform: [
                        {translateX: -(fullRelativeWidth * 0.02)},
                        {rotate: spin},
                      ],
                    },
                  ]}>
                  <Animated.View
                    style={[
                      tailStyles.secondMovingPart,
                      {
                        transform: [
                          {translateX: -(fullRelativeWidth * 0.02)},
                          {rotate: spin},
                        ],
                      },
                    ]}
                  />
                </Animated.View>
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Tail;
