import React from 'react';
import {View, Text} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import MenuIcon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles/home';

export const Home = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Telegram</Text>
      <View style={styles.iconsContainer}>
        <Icons name="plus" size={22} color="#2675EC" />
        <Icons name="search" size={22} color="#2675EC" />
        <MenuIcon name="menu" size={30} color="#2675EC" />
      </View>
    </View>
  </View>
);
