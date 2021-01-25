import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import LottieFiles from 'lottie-react-native';

export const App = () => {
  const ref = useRef();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieFiles
        autoPlay
        speed={0.5}
        source={require('@assets/lottie/start.json')}
      />
    </View>
  );
};
