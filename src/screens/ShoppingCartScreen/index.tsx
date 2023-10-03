import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';

export default function ShoppingCartScreen() {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  const subtotalComponent = () => (
    <View>
      <Text style={styles.subtotal}>
        Sub-total do carrinho ({products.length}{' '}
        {products.length === 1 ? 'item' : 'itens'}):{' '}
        <Text style={styles.totalPrice}>R$ {totalPrice.toFixed(2)}</Text>
      </Text>
      <Button
        text="Fechar pedido"
        onPress={() => console.warn('fechar pedido')}
        containerStyles={styles.buttonStyle}
      />
    </View>
  );

  return (
    <View style={styles.root}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={subtotalComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  subtotal: {
    fontSize: 18,
  },
  totalPrice: {
    color: '#e47911',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: '#f7e300',
    borderColor: '#f7e300',
  },
});
