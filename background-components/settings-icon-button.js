import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const SettingsIconButton = ({navigation}) => {
  return (
    <View style={{position: 'absolute', bottom: -10, right: -30}}>
      <View style={styles.iconWrap}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{padding: 10}}>
          <Image
            source={require('../assets/gears.png')}
            style={{height: 30, width: 30, opacity: 0.6}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrap: {
    display: 'flex',
    flex: 1,
    height: 80,
    width: 80,
    resizeMode: 'contain',
    position: 'relative',
    marginBottom: -15,
  },
});

export default SettingsIconButton;
