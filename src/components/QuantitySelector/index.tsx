import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

type quantityProps = {
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export default function QuantitySelector({
  quantity,
  setQuantity,
}: quantityProps) {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
}
