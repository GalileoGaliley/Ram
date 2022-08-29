import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

type Props = {
  size: number;
  color: string;
  name: string;
  activeName: string;
  callBack: (name: string) => void;
};

const RadioInput = ({size, color, name, callBack, activeName}: Props) => {
  return (
    <TouchableOpacity
      style={{
        width: '80%',
        marginHorizontal: '10%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      onPress={() => callBack(name)}>
      <Text style={{color: color}}>{name}</Text>
      <View
        style={{
          width: size,
          height: size,
          borderColor: color,
          borderRadius: size / 2,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {activeName === name ? (
          <View
            style={{
              width: size / 2,
              height: size / 2,
              backgroundColor: '#aaa',
              borderRadius: size / 2,
            }}
          />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RadioInput;
