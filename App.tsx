/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LogInScreen} from './src/screens/auth/LogInScreen';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <LogInScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 500,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
