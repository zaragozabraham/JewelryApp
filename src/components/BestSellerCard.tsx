import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Jewel} from '../models/Jewel';
import {
  useNavigation,
} from '@react-navigation/native';
import { homeScreenProp } from '../navigations/types';


const BestSellerCard = (jewel: Jewel) => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {product: jewel})}>
        <Image
          style={styles.imageContainer}
          source={{
            uri: jewel.images[0],
          }}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={{
          fontWeight: '500',
          textTransform: 'capitalize',
          fontSize: 12,
          marginVertical: 5,
        }}>
        {jewel.name}
      </Text>
      <Text style={{fontSize: 12, fontWeight: '300'}}>{jewel.material}</Text>
      <Text style={{fontSize: 12, fontWeight: '300'}}>${jewel.price}</Text>
    </View>
  );
};

export default BestSellerCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 20,
    paddingBottom: 5,
    width: 250,
  },
  imageContainer: {
    height: 250,
    width: 250,
  },
});
