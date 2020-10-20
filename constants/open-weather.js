import {NativeModules, Platform} from 'react-native';
import {getTemperatureUnitPromise} from './settings';

const openWeatherApiKey = '3aba1f69c738f0432b848ba71ad84e40';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export const openWeatherRequest = (
  latitude,
  longitude,
  setWeatherConditions,
) => {
  // console.log('so on refresh this should be checked?');
  return getTemperatureUnitPromise()
    .then((currentTempUnit) =>
      fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=' +
          latitude +
          '&lon=' +
          longitude +
          '&units=' +
          currentTempUnit +
          '&appid=' +
          openWeatherApiKey +
          '&lang=' +
          deviceLanguage +
          '&exclude=minutely,hourly,alerts',
      ),
    )
    .then((response) => response.json())
    .then((json) => {
      // console.log('system INFO!', json.timezone);
      // console.log('the TIMEZONE is....:', json.timezone);
      // console.log('the DAILY weather is....:', json.daily[0]);
      // console.log('the CURRENT weather is....:', json.current);
      const currentAndAverageToday = {
        current: json.current,
        daily: json.daily[0],
      };
      return currentAndAverageToday;
    })
    .catch((error) => {
      console.error(error);
    });
};
