import React from 'react';
import {Text, Pressable} from 'react-native';

import styles from './styles';

type ButtonProps = {
  text: string;
  onPress: () => void;
  containerStyles?: object;
};

export default function Button({text, onPress, containerStyles}: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
