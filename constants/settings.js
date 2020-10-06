import {getSunrise, getSunset} from 'sunrise-sunset-js';

export const getSunriseAndSunsetTime = (latitude, longitude) => {
  let sunrise = getSunrise(latitude, longitude);
  const sunset = getSunset(latitude, longitude);
  if (sunrise > sunset) {
    return 'day';
  }
  return 'night';
};

export const temperatureUnit = '';
