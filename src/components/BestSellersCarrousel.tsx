import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import CarrouselHeader from './CarrouselHeader';
import {Jewel} from '../models/Jewel';
import BestSellerCard from './BestSellerCard';

const BestSellersCarrousel = ({jewels}: {jewels: Jewel[]}) => {
  return (
    <View style={styles.carrouselContainer}>
      <CarrouselHeader title="best sellers" />
      <ScrollView horizontal={true}>
        {jewels.map((jewel: Jewel) => (
          <BestSellerCard {...jewel} key={jewel.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default BestSellersCarrousel;

const styles = StyleSheet.create({
  carrouselContainer: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
});
