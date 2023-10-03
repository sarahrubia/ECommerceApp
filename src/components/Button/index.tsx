import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

type ButtonProps = {
  text: string;
  onPress: () => void;
};

export default function Button({text, onPress}: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
