import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {HomeScreenStackParamsList} from './types';
import HomeScreen from '../HomeScreen/HomeScreen';
import CurrentPersonage from '../CurrentPersonage/CurrentPersonage';
import Header from './components/Header';

const HomeScreenStack = createStackNavigator<HomeScreenStackParamsList>();
const HomeScreenNavigation = () => {
  const homeHeaderOptions: StackNavigationOptions = {
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontSize: 16,
    },
  };

  return (
    <HomeScreenStack.Navigator
      screenOptions={homeHeaderOptions}
      initialRouteName={'HomeScreen'}>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeScreenStack.Screen
        name="CurrentPersonage"
        component={CurrentPersonage}
        options={{
          header: () => <Header name={'Personage'} close={true} />,
        }}
      />
    </HomeScreenStack.Navigator>
  );
};

export default HomeScreenNavigation;
