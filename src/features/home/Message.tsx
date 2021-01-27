import React from 'react';
import {Image, ImageProps, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles/message';

interface Props {
  id?: number;
  name: string;
  image: ImageProps;
  message: string;
  ignor: boolean;
  time: string;
  numberMessage: number;
}

export const Message: React.FC<Props> = ({
  name,
  time,
  ignor,
  numberMessage,
  image,
  message,
}) => (
  <View style={styles.messageContainer}>
    <View style={styles.imageBlock}>
      <Image source={image} style={styles.image} />
    </View>
    <View style={styles.info}>
      <View style={styles.nameContent}>
        <View style={styles.nameBlock}>
          <Text style={styles.name}>{name}</Text>
          {!ignor && <Icon name="bell" color="blue" size={18} />}
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.messageBlock}>
        <Text style={styles.unReadMessage}>{message}</Text>
        <Text style={styles.number}>{numberMessage}</Text>
      </View>
    </View>
  </View>
);
