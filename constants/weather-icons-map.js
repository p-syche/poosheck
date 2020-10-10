export const weatherIconsMap = (currentWeatherIcon) => {
  let iconRequire;
  switch (currentWeatherIcon) {
    case '01d':
      iconRequire = require('../assets/weather-icons/clear.png');
      break;
    case '02d':
      iconRequire = require('../assets/weather-icons/few-clouds-d.png');
      break;
    case '02n':
      iconRequire = require('../assets/weather-icons/few-clouds-n.png');
      break;
    case '03d':
    case '04d':
    case '03n':
    case '04n':
      iconRequire = require('../assets/weather-icons/clouds.png');
      break;
    case '09d':
    case '10d':
    case '09n':
    case '10n':
      iconRequire = require('../assets/weather-icons/rain.png');
      break;
    case '11d':
    case '11n':
      iconRequire = require('../assets/weather-icons/storm.png');
      break;
    case '13d':
    case '13n':
      iconRequire = require('../assets/weather-icons/storm.png');
      break;
    case '50d':
    case '50n':
      iconRequire = require('../assets/weather-icons/storm.png');
      break;
    default:
      iconRequire = require('../assets/transparent.png');
      break;
  }
  return iconRequire;
};
