import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogInScreen} from '../screens/auth/LogInScreen';
import {FeedScreen} from '../screens/main/FeedScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileScreen from '../screens/main/ProfileScreen';

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

const Navigation = () => {
  const MainStack = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
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

export default Navigation;
