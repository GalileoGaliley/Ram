import React from 'react';
import {
  Image,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
// @ts-ignore
import Portal from '../Static/portal.png';
const Spinner = () => {
  let spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{backgroundColor: '#fff'}}>
      <Animated.View style={[{transform: [{rotate: spin}]}, styles.container]}>
        <Image style={styles.image} source={Portal} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').width - 50,
  },
});

export default Spinner;
