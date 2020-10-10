import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const SingleCloud = () => {
  return (
    <View style={styles.cloud}>
      <Image
        source={require('../assets/cloud.png')}
        style={{height: 60, width: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cloud: {
    display: 'flex',
    flex: 1,
    height: 60,
    width: 100,
    resizeMode: 'contain',
    position: 'relative',
  },
});

export default SingleCloud;
