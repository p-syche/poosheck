import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import AppComponents from './app-components';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const RefreshAppWrapper = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
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
