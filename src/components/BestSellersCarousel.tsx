import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import CarouselHeader from './CarouselHeader';
import {Jewel} from '../models/Jewel';
import BestSellerCard from './BestSellerCard';

const BestSellersCarousel = ({jewels}: {jewels: Jewel[]}) => {
  return (
    <View style={styles.carrouselContainer}>
      <CarouselHeader title="best sellers" filter='best sellers' />
      <ScrollView horizontal={true}>
        {jewels.map((jewel: Jewel) => (
          <BestSellerCard {...jewel} key={jewel.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default BestSellersCarousel;

const styles = StyleSheet.create({
  carrouselContainer: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
});
