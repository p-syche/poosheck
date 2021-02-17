import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  AppState,
} from 'react-native';
import AppComponents from './app-components';
import RNLocation from 'react-native-location';
import AsyncStorage from '@react-native-community/async-storage';
import {
  getLatestLocation,
  getCurrentLocationPromise,
  getLocationData,
  getPermissionPromise,
} from './constants/location-and-weather';
import {openWeatherRequest} from './constants/open-weather';
import {getTemperatureUnitPromise} from './constants/settings';
import {SafeAreaView} from 'react-native-safe-area-context';

const RefreshAppWrapper = ({navigation}) => {
  const [savedLocation, setSavedLocation] = useState();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const [weatherConditions, setWeatherConditions] = useState('Clear');
  const [weatherResponse, setWeatherResponse] = useState({});

  const [temperatureUnit, setTemperatureUnit] = useState('C');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      checkPermission();
      getTemperatureUnitPromise().then((unit) => {
        if (unit === 'Metric') {
          setTemperatureUnit('C');
        } else {
          setTemperatureUnit('F');
        }
      });
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      checkPermission();
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  const checkPermission = () => {
    RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', // or 'fine'
      },
    }).then((currentPermission) => {
      if (currentPermission === false) {
        return getPermissionPromise().then((permission) => {
          if ((permission = true)) {
            checkWeatherBasedOnLocation();
          } else {
            // display error modal
          }
        });
      } else {
        return checkWeatherBasedOnLocation();
      }
    });
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getCurrentLocationPromise().then(() => {
      checkWeatherBasedOnLocation();
      setRefreshing(false);
    });
  }, []);

  const checkWeatherBasedOnLocation = (location) => {
    getLocationData().then((location) => {
      openWeatherRequest(
        location.latitude,
        location.longitude,
        setWeatherConditions,
      ).then((response) => {
        setWeatherResponse(response);
      });
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <AppComponents
        onRefresh={onRefresh}
        navigation={navigation}
        weatherResponse={weatherResponse}
        temperatureUnit={temperatureUnit}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default RefreshAppWrapper;
