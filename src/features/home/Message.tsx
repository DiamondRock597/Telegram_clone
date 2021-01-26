import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles/message';

export const Message = () => (
  <View style={styles.messageContainer}>
    <View style={styles.imageBlock}>
      <Image
        source={require('@assets/images/avatars/1.png')}
        style={styles.image}
      />
    </View>
    <View style={styles.info}>
      <View style={styles.nameContent}>
        <View style={styles.nameBlock}>
          <Text style={styles.name}>Theresa Webb</Text>
          <Icon name="bell" color="blue" size={18} />
        </View>
        <Text style={styles.time}>15:20</Text>
      </View>
      <View style={styles.messageBlock}>
        <Text style={styles.unReadMessage}>Why did you do that?</Text>
        <Text style={styles.number}>2</Text>
      </View>
    </View>
  </View>
);
