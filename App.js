import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Mountain from './background-components/mountain';
import Husky from './husky';

export default function App() {
  return (
    <View style={styles.container}>
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
});
