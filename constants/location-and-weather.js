import RNLocation from 'react-native-location';
import AsyncStorage from '@react-native-community/async-storage';

export const getPermissionPromise = (currentPermission) => {
  return new Promise((resolve) => {
    requestPermission(resolve, currentPermission);
  });
};

export const requestPermission = (resolve) => {
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
    resolve(currentPermission);
  });
};

export const getLocationData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@poosheck_last_location');
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    } else {
      return getCurrentLocation();
    }
  } catch (e) {
    alert(
      'We are very sorry but an unexpected error happened :( Please restart the app. Thank you!',
    );
  }
};

const storeLocationData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@poosheck_last_location', jsonValue);
  } catch (e) {
    alert(
      'We are very sorry but an unexpected error happened :( Please restart the app. Thank you!',
    );
  }
};

export const getCurrentLocationPromise = (location) => {
  return new Promise((resolve) => {
    getCurrentLocation(resolve, location);
  });
};

export const getCurrentLocation = (resolve) => {
  RNLocation.getLatestLocation({timeout: 1000})
    .then((latestLocation) => {
      let location = {};
      if (latestLocation === null) {
        location = {latitude: 54.44, longitude: 18.57};

        // setModalVisible(true);
      } else {
        location = latestLocation;
      }
      return location;
    })
    .then((location) => {
      storeLocationData(location).then(() => {
        resolve(location);
      });
    });
};
