import {NativeModules, Platform} from 'react-native';

const openWeatherApiKey = '3aba1f69c738f0432b848ba71ad84e40';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export const openWeatherRequest = (latitude, longitude, setVisibleWeather) => {
  return fetch(
    'http://api.openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&units=metric&appid=' +
      openWeatherApiKey +
      '&lang=' +
      deviceLanguage,
  )
    .then((response) => response.json())
    .then((json) => {
      // console.log('the weather is....:', json);
      console.log('the weather is....:', json.weather[0].main);
      console.log('the weather is....:', json.weather);
      setVisibleWeather(json.weather[0].main);
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};
