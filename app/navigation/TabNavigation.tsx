import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import type {TabNavParamsList, BaseNavigationOptionParams} from './types';
import {Home, Setting, Heart} from '../Static/Icons';
import HomeScreenNavigation from './HomeScreenNavigation';
import SettingScreen from '../SettingScreen/SettingScreen';
import React from 'react';
import {FavoriteScreen} from '../FavoriteScreen/FavoriteScreen';
import {View, Text} from "react-native";
import Header from "./components/Header";

const TabNavigation = () => {
  const BottomTab = createBottomTabNavigator<TabNavParamsList>();

  const tabMainOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'MAIN',
    tabBarIcon: Home,
    tabBarLabelStyle: {width: '33%'},
    headerShown: false
  };

  const tabSettingOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Setting',
    tabBarIcon: Setting,
    header: ()=><Header name={'Setting'} />,
    tabBarLabelStyle: {width: '33%'},
  };

  const tabFavoriteOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Favorite',
    tabBarIcon: Heart,
    header: ()=><Header name={'Favorites'} />,
    tabBarLabelStyle: {width: '33%'},
  };

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreenNavigation}
        options={tabMainOptions}

      />
      <BottomTab.Screen
        name="SettingTab"
        component={SettingScreen}
        options={tabSettingOptions}
      />
      <BottomTab.Screen
        name="FavoritesTab"
        component={FavoriteScreen}
        options={tabFavoriteOptions}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;
