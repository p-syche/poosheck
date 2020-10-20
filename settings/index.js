import React from 'react';
import {View, Text, Button} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {getTemperatureUnitPromise, storeData} from '../constants/settings';

const SettingsScreen = ({navigation}) => {
  const data = [
    {
      label: 'Metric',
    },
    {
      label: 'Imperial',
    },
  ];

  return (
    <View style={{padding: 30}}>
      <Text style={{fontSize: 32}}>Settings</Text>
      <View style={{padding: 30}} />
      <View style={{paddingBottom: 50}}>
        <Text style={{fontSize: 18}}>Set your preferred temperature unit</Text>
        <RadioButtonRN
          data={data}
          animationTypes={['shake']}
          selectedBtn={(e) => storeData(e.label)}
          // selectedBtn={(e) => console.log('so what is the value here?', e)}
        />
      </View>
      <Button
        title="Go to Main screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SettingsScreen;
