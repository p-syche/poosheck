import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import AppComponents from './app-components';
import RNLocation from 'react-native-location';
import AsyncStorage from '@react-native-community/async-storage';
import {
  requestPermission,
  getLatestLocation,
  getCurrentLocationPromise,
  getLocationData,
} from './constants/location-and-weather';

const RefreshAppWrapper = ({navigation}) => {
  const [savedLocation, setSavedLocation] = useState();

  const checkPermission = () => {
    RNLocation.checkPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
      },
    }).then((currentPermission) => {
      if (currentPermission === false) {
        return requestPermission();
      } else {
        return getLocationData();
      }
    });
  };

  useEffect(() => {
    checkPermission();
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getCurrentLocationPromise().then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <AppComponents onRefresh={onRefresh} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  scrollView: {
    flex: 1,
  },
});

export default RefreshAppWrapper;
