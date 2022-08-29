import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {CrossDelete} from '../../Static/Icons';
import type {RootStackParamsList} from '../types';

const CloseButton = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const onPressClose = () => {
    navigation.pop();
  };

  return (
    <TouchableOpacity style={{position:'absolute', left: 10}} onPress={onPressClose}>
      <CrossDelete />
    </TouchableOpacity>
  );
};

export {CloseButton};
