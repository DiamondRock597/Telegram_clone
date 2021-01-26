import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome5';
import MenuIcon from 'react-native-vector-icons/MaterialIcons';

import {MenuButton} from './MenuButton';
import {Message} from './Message';

import {styles} from './styles/home';

export const Home = () => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Telegram</Text>
        <View style={styles.iconsContainer}>
          <Icons name="plus" size={22} color="#2675EC" />
          <Icons name="search" size={22} color="#2675EC" />
          <MenuIcon name="menu" size={30} color="#2675EC" />
        </View>
      </View>
      <ScrollView
        bounces={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menu}>
        <MenuButton text="All" />
        <MenuButton text="Important" />
        <MenuButton text="Unread" />
        <MenuButton text="Read" />
      </ScrollView>
    </View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.messagesContainer}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </ScrollView>
  </View>
);
