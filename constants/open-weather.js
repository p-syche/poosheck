export const openWeatherApiKey = '3aba1f69c738f0432b848ba71ad84e40';

export const openWeatherRequest = (latitude, longitude) => {
  return fetch(
    'http://api.openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&units=metric&appid=' +
      openWeatherApiKey,
  )
    .then((response) => response.json())
    .then((json) => {
      console.log('hey ho Jason!', json);
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};
