import React, {useState, useEffect} from 'react';
import RNLocation from 'react-native-location';
import {StyleSheet, View, Text, Modal, TouchableHighlight} from 'react-native';
import Mountain from './background-components/mountain';
import Husky from './husky';
import {fullRelativeWidth, skyColor} from './assets/style_bits';
import {openWeatherRequest} from './constants/open-weather';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTemp, setCurrentTemp] = useState(20);
  const [feelsLike, setfeelsLike] = useState(20);
  const [tempMin, setTempMin] = useState(20);
  const [tempMax, setTempMax] = useState(20);

  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 500, // Meters
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      // Android only
      androidProvider: 'auto',
      interval: 5000, // Milliseconds
      fastestInterval: 10000, // Milliseconds
      maxWaitTime: 5000, // Milliseconds
      // iOS Only
      activityType: 'other',
      allowsBackgroundLocationUpdates: false,
      headingFilter: 1, // Degrees
      headingOrientation: 'portrait',
      pausesLocationUpdatesAutomatically: false,
      showsBackgroundLocationIndicator: false,
    });
  }, []);

  useEffect(() => {
    RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', // or 'fine'
      },
    }).then((currentPermission) => {
      if (currentPermission === false) {
        requestPermission();
      } else {
        getLatestLocation();
      }
    });
  }, []);

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
    }).then(getLatestLocation());
  };

  const getLatestLocation = () => {
    RNLocation.getLatestLocation({timeout: 1000}).then((latestLocation) => {
      if (latestLocation === null) {
        setModalVisible(true);
        openWeatherRequest(54.44, 18.57);
      } else {
        openWeatherRequest(
          latestLocation.latitude,
          latestLocation.longitude,
        ).then((response) => {
          setCurrentTemp(response.main.temp);
          setfeelsLike(response.main.feels_like);
          setTempMax(response.main.temp_max);
          setTempMin(response.main.temp_min);
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          <Text style={[styles.modalText, styles.modalHeader]}>
            Hello There!
          </Text>
          <Text style={styles.modalText}>
            We were unable to aquire your current location. You will see a
            weather forecast for the city of Sopot, Poland. Thank you!
          </Text>
          <View style={styles.modalButtons}>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#A3ADBB'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>That's cool</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: skyColor}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Change my settings</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style={{position: 'absolute', top: 50}}>
        <Text style={{fontSize: 24}}>
          Current temperature: {currentTemp}&deg;C
        </Text>
        <Text style={{fontSize: 24}}>Feels like: {feelsLike}&deg;C</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: 16}}>Min temp: {tempMin}&deg;C</Text>
          <Text style={{fontSize: 16}}> | </Text>
          <Text style={{fontSize: 16}}>Max temp: {tempMax}&deg;C</Text>
        </View>
      </View>
      <Mountain />
      <Husky />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F8EDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButtons: {
    display: 'flex',
    width: fullRelativeWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
