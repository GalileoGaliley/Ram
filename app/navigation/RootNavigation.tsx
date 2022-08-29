import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import type {StackNavigationOptions} from '@react-navigation/stack';

import React, {createRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import type {RootStackParamsList} from './types';
import TabNavigation from './TabNavigation';
import CurrentPersonage from '../CurrentPersonage/CurrentPersonage';
import {CloseButton} from './components/CloseButton';

const RootStack = createStackNavigator<RootStackParamsList>();

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamsList>>();

const RootNavigation = () => {
  const tabsOptions: StackNavigationOptions = {
    headerShown: false,
  };
  const rootOptions: StackNavigationOptions = {
    headerShown: false,
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontSize: 16,
    },
  };

  const productScreenOptions: StackNavigationOptions = {
    headerShadowVisible: false,
    headerShown: true,
    title: '',
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerLeft: CloseButton,
    headerRightContainerStyle: {paddingRight: 4},
    headerTitleStyle: {
      textTransform: 'uppercase',
      fontSize: 16,
    },
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={rootOptions}
        initialRouteName={'Tabs'}>
        <RootStack.Screen
          name={'Tabs'}
          component={TabNavigation}
          options={tabsOptions}
        />
        <RootStack.Screen
          name="CurrentPersonage"
          component={CurrentPersonage}
          options={productScreenOptions}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
