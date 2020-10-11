import {NativeModules, Platform} from 'react-native';

const openWeatherApiKey = '3aba1f69c738f0432b848ba71ad84e40';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export const openWeatherRequest = (latitude, longitude, setVisibleWeather) => {
  return fetch(
    'https://api.openweathermap.org/data/2.5/onecall?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&units=metric&appid=' +
      openWeatherApiKey +
      '&lang=' +
      deviceLanguage +
      '&exclude=minutely,hourly,alerts',
  )
    .then((response) => response.json())
    .then((json) => {
      console.log('the TIMEZONE is....:', json.timezone);
      console.log('the DAILY weather is....:', json.daily[0]);
      // console.log('the CURRENT weather is....:', json.current);
      setVisibleWeather(json.daily[0].weather[0].main);
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};
