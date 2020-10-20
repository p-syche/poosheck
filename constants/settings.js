import AsyncStorage from '@react-native-community/async-storage';

export const getTemperatureUnitData = async () => {
  try {
    const value = await AsyncStorage.getItem('@poosheck_temp_unit');
    if (value !== null) {
      return value;
    } else {
      return 'Metric';
    }
  } catch (e) {
    // error reading value
  }
};

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@poosheck_temp_unit', value);
  } catch (e) {
    // saving error
  }
};

export const getTemperatureUnitPromise = (currentUnit) => {
  return new Promise((resolve) => {
    temperatureUnit(resolve, currentUnit);
  });
};

export const temperatureUnit = (resolve) => {
  getTemperatureUnitData().then((unit) => {
    resolve(unit);
  });
};
