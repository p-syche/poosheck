import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, TouchableHighlight} from 'react-native';
import {fullRelativeWidth, skyColor, darkSkyColor} from './assets/style_bits';
import OpenAppSettings from 'react-native-app-settings';

export default function DenyLocationModal() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalView}>
        <Text style={[styles.modalText, styles.modalHeader]}>Hello There!</Text>
        <Text style={styles.modalText}>
          We were unable to aquire your current location. You will see a weather
          forecast for the city of Sopot, Poland. Thank you!
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
              OpenAppSettings.open();
            }}>
            <Text style={styles.textStyle}>Change my settings</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
