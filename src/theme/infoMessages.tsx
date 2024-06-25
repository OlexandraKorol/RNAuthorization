import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from './constants';
import {Text} from 'react-native-paper';

export const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
};

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({message}: ErrorMessageProps) => {
  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.grey,
    fontSize: 40,
  },
  error: {
    color: colors.error,
    fontSize: 13,
    marginTop: 5,
  },
  subTitle: {
    fontSize: 20,
  },
});
