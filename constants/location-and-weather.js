import RNLocation from 'react-native-location';
import AsyncStorage from '@react-native-community/async-storage';

export const requestPermission = () => {
  RNLocation.requestPermission({
    ios: 'whenInUse',
    android: {
      detail: 'coarse',
      rationale: {
        title: 'We need to access your location',
        message: 'We use your location to show you the weather in your area',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      },
    },
  }).then((currentPermission) => {
    if (currentPermission === false) {
      // setModalVisible(true);
      // openWeatherRequest(54.44, 18.57).then((response) => {
      //   setTemperatures(response);
      // });
    } else {
      getLocationData();
    }
  });
};

export const setTemperatures = (response) => {
  let averageTemp;

  const weatherIcon = response.current.weather[0].icon;
  const averageWeatherIcon = response.daily[0].weather[0].icon;
  if (weatherIcon.includes('d')) {
    setIsThemeLight(true);
    setAvgTemp(Math.round(response.daily[0].temp.day));
    setCurrentWeatherIcon(averageWeatherIcon.substring(0, 2) + 'd');
  } else {
    setIsThemeLight(false);
    setAvgTemp(Math.round(response.daily[0].temp.night));
    setCurrentWeatherIcon(averageWeatherIcon.substring(0, 2) + 'n');
  }

  setTempMax(response.daily[0].temp.max);
  setTempMin(response.daily[0].temp.min);

  const currentRoundedTemperature = Math.round(response.current.temp);
  setCurrentTemp(currentRoundedTemperature);

  setCloudPercentage(response.daily[0].clouds);
  setWindSpeed(response.daily[0].wind_speed);
};

const getLocationData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@poosheck_last_location');
    if (jsonValue != null) {
      console.log('I want to see the saved locations', jsonValue);
      return JSON.parse(jsonValue);
    } else {
      return getCurrentLocation();
    }
  } catch (e) {
    // error reading value
  }
};

const storeLocationData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@poosheck_last_location', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getCurrentLocationPromise = (location) => {
  return new Promise((resolve) => {
    getCurrentLocation(resolve);
  });
};

export const getCurrentLocation = (resolve) => {
  RNLocation.getLatestLocation({timeout: 1000})
    .then((latestLocation) => {
      let location = {};
      console.log('heeeey, what????', latestLocation);
      if (latestLocation === null) {
        location = {latitude: -90, longitude: -139.2667};

        // setModalVisible(true);
      } else {
        location = latestLocation;
        // openWeatherRequest(
        //   latestLocation.latitude,
        //   latestLocation.longitude,
        //   setVisibleWeather,
        // ).then((response) => {
        //   setTemperatures(
        //     response,
        //     latestLocation.latitude,
        //     latestLocation.longitude,
        //   );
        // });
      }
      return location;
    })
    .then((location) => {
      console.log('what is the location?');
      storeLocationData(location).then(() => {
        resolve(location);
      });
    });
};

const displaySkyColor = () => {
  if (isThemeLight) {
    return skyColor;
  } else {
    return darkSkyColor;
  }
};

const setVisibleWeather = (descriptionCode) => {
  setWeatherConditions(descriptionCode);
};
