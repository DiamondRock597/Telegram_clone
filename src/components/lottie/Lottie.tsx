import React from 'react';
import {View} from 'react-native';
import LottieFiles from 'lottie-react-native';
import {styles} from './styles';

export const Lottie = () => (
  <View style={styles.container}>
    <LottieFiles
      autoPlay
      speed={0.5}
      source={require('@assets/lottie/start.json')}
    />
  </View>
);
