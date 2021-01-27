import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles/menu_button';

interface Props {
  text: string;
}

export const MenuButton: React.FC<Props> = ({text}) => (
  <View style={styles.menuButton}>
    <Text style={styles.menuTitile}>{text}</Text>
  </View>
);
