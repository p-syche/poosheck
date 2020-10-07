import {getSunrise, getSunset} from 'sunrise-sunset-js';

export const getSunriseAndSunsetTime = (latitude, longitude) => {
  const sunrise = getSunrise(latitude, longitude);
  const sunset = getSunset(latitude, longitude);
  const today = new Date();
  // const date =
  //   today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  // const dateTime = date + ' ' + time;
  if (sunset > time) {
    return 'day';
  } else {
    return 'night';
  }
};

export const temperatureUnit = '';
