import RNLocation from 'react-native-location';

export const checkPermission = () => {
  RNLocation.checkPermission({
    ios: 'whenInUse',
    android: {
      detail: 'fine',
    },
  }).then((currentPermission) => {
    if (currentPermission === false) {
      requestPermission();
    } else {
      getLatestLocation();
    }
  });
};

const requestPermission = () => {
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
      setModalVisible(true);
      openWeatherRequest(54.44, 18.57).then((response) => {
        setTemperatures(response);
      });
    } else {
      getLatestLocation();
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

const getLatestLocation = () => {
  RNLocation.getLatestLocation({timeout: 1000}).then((latestLocation) => {
    if (latestLocation === null) {
      // setModalVisible(true);
      // Sopot
      // openWeatherRequest(54.44, 18.57, setVisibleWeather).then((response) => {
      //   setTemperatures(response);
      // });
      // Antarctica
      // openWeatherRequest(-90, -139.2667, setVisibleWeather).then(
      //   (response) => {
      //     setTemperatures(response);
      //   },
      // );
      // Tokyo
      // openWeatherRequest(35.652832, 139.839478, setVisibleWeather).then(
      //   (response) => {
      //     setTemperatures(response);
      //   },
      // );
      // Rio de Janeiro
      openWeatherRequest(-22.908333, -43.196388, setVisibleWeather).then(
        (response) => {
          setTemperatures(response, 54.44, 18.57);
        },
      );
      // New York
      // openWeatherRequest(40.73, -73.935242, setVisibleWeather).then(
      //   (response) => {
      //     setTemperatures(response);
      //   },
      // );
    } else {
      openWeatherRequest(
        latestLocation.latitude,
        latestLocation.longitude,
        setVisibleWeather,
      ).then((response) => {
        setTemperatures(
          response,
          latestLocation.latitude,
          latestLocation.longitude,
        );
      });
    }
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
