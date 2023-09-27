import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

type ProductItemProps = {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
};

export default function ProductItem({item}: ProductItemProps) {
  return (
    <View style={styles.productContainer}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratingsContainer}>
          {[...new Array(5)].map((el, index) => (
            <FontAwesome
              key={`${item.id}-${index}`}
              style={styles.star}
              name={
                index < Math.round(item.avgRating)
                  ? 'star'
                  : item.avgRating % 1 >= 0.5
                  ? 'star-half-full'
                  : 'star-o'
              }
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          Por R$ {item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> R$ {item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
}
