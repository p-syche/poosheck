import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {getTemperatureUnitPromise, storeData} from '../constants/settings';
import {SafeAreaView} from 'react-native-safe-area-context';

const SettingsScreen = ({navigation}) => {
  const [initialRadioButton, setInitialRadioButton] = useState(1);

  const data = [
    {
      label: 'Metric',
    },
    {
      label: 'Imperial',
    },
  ];

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getTemperatureUnitPromise().then((unit) => {
        if (unit !== 'Metric') {
          setInitialRadioButton(2);
        }
      });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={{padding: 30}}>
        <Text style={{fontSize: 32}}>Settings</Text>
        <View style={{padding: 30}} />
        <View style={{paddingBottom: 50}}>
          <Text style={{fontSize: 18}}>
            Set your preferred temperature unit
          </Text>
          <RadioButtonRN
            initial={initialRadioButton}
            data={data}
            animationTypes={['shake']}
            selectedBtn={(e) => storeData(e.label)}
          />
        </View>
        <Button
          title="Go to Main screen"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
