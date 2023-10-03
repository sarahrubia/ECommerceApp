import {View, FlatList, Image, useWindowDimensions} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import styles from './styles';

export default function ImageCarousel({images}: {images: string[]}) {
  const [activeIndex, setactiveIndex] = useState(0);
  const {width} = useWindowDimensions();

  const onFlatListUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setactiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {viewAreaCoveragePercentThreshold: 50},
      onViewableItemsChanged: onFlatListUpdate,
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: width - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <View style={styles.dotsContainer}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
            key={index}
            id={image}
          />
        ))}
      </View>
    </View>
  );
}
