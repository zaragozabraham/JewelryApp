import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Jewel} from '../models/Jewel';
import {HeartIcon as FilledHeartIcon} from 'react-native-heroicons/solid';
import {HeartIcon} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { homeScreenProp } from '../navigations/types';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ProductCard = (jewel: Jewel) => {
  const navigation = useNavigation<homeScreenProp>();
  const fav = false;
  const heartIcon = fav ? (
    <FilledHeartIcon color="red" />
  ) : (
    <HeartIcon color="black" />
  );
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.imageStyle} onPress={() => navigation.navigate('ProductDetail', {product: jewel})}>
        <Image style={{height: '100%', borderRadius: 10}} source={{uri: jewel.images[0]}} />
      </TouchableOpacity>
      <View style={{gap: 5}}>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          style={styles.productNameStyle}>
          {jewel.name}
        </Text>
        <Text style={styles.productPriceStyle}>${jewel.price}</Text>
      </View>
      <TouchableOpacity style={styles.heartIconStyle}>
        {heartIcon}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: windowHeight / 3.5,
    width: windowWidth / 2.3,
    marginBottom: 5,
    position: 'relative',
  },
  heartIconStyle: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  imageStyle: {
    height: '84%',
  },
  productNameStyle: {
    fontWeight: '500',
    fontSize: 14,
    color: '#383b3d',
  },
  productPriceStyle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});
