import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ProductImageSwiper = ({images}:{images: string[]}) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.imageContainer}
      pagingEnabled={true}>
      {images.map((image: string, index: number) => (
        <Image
          style={styles.imageContainer}
          source={{uri: image}}
          key={index}
        />
      ))}
    </ScrollView>
  );
};

export default ProductImageSwiper;

const styles = StyleSheet.create({
  imageContainer: {
    height: windowHeight / 2.4,
    width: windowWidth + 10,
    overflow: 'hidden',
  },
});
