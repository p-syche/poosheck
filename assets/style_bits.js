import {Dimensions, Easing} from 'react-native';

export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;
export const fullRelativeWidth = Dimensions.get('window').width * 0.8;
export const fullRelativeHeight = Dimensions.get('window').width * 1.5;
export const groundColor = '#dbe8f7';
export const huskyBodyColor = '#444';
export const tailColor = '#2c2f36';
export const skyColor = '#4F8EDB';
export const darkSkyColor = '#2D4B72';
export const animationTimingFunction = Easing.bezier(0.645, 0.045, 0.355, 1);
