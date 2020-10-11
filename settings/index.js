import React from 'react';
import {View, Text, Button} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <View>
      <Text>THis is the settings screen!</Text>
      <Button
        title="Go to Main screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SettingsScreen;
