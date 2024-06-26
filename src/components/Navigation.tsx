import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogInScreen} from '../screens/auth/LogInScreen';
import {FeedScreen} from '../screens/main/FeedScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileScreen from '../screens/main/ProfileScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {colors} from '../theme/constants';

export type RootStackParamList = {
  LogIn: undefined;
  MainStack: undefined;
};

export type TabStackParamList = {
  Feed: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const Navigation = () => {
  const MainStack = () => {
    return (
      <SafeAreaView style={styles.topNavigatorWrapper} edges={['top']}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: colors.white,
            tabBarLabelStyle: {fontSize: 15},
            tabBarStyle: {backgroundColor: colors.mainPurple},
          }}
          style={{}}>
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  topNavigatorWrapper: {
    flex: 1,
    backgroundColor: colors.mainPurple,
  },
});
