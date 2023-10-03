import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

export default function ProductScreen() {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : '',
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      {/* Image carousel */}
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={`${option}-id`} />
        ))}
      </Picker>
      <Text style={styles.price}>
        Por R$ {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> R$ {product.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button
        text="Adicionar ao carrinho"
        onPress={() => {
          console.warn('Adicionado!');
        }}
      />
      <Button
        text="Comprar agora"
        onPress={() => {
          console.warn('Comprar!');
        }}
      />
    </ScrollView>
  );
}
