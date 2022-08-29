import React from 'react';
import {Text, View} from 'react-native';
import {CloseButton} from './CloseButton';

type Props = {
  name: string;
  close?: boolean;
};
const Header = ({name, close}: Props) => {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        backgroundColor: '#f1f1f1',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      {close ? <CloseButton /> : null}
      <Text style={{color: '#555', fontSize: 40, fontWeight: '900', letterSpacing: 10, textTransform: 'uppercase'}}>
        {name}
      </Text>
    </View>
  );
};

export default Header;
