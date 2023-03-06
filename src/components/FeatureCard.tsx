import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Jewel} from '../models/Jewel';
import {useNavigation} from '@react-navigation/native';

const FeatureCard = (item: Jewel) => {
  const navigation = useNavigation();

  return (
    <View style={styles.categoryContainer}>
      <Text
        numberOfLines={1}
        style={{
          fontWeight: '400',
          textTransform: 'capitalize',
          fontSize: 16,
          marginVertical: 5,
        }}>
        {item.name}
      </Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Category', { ...item})}> */}
      <TouchableOpacity>
        <Image
          style={styles.imageContainer}
          source={{
            uri: item.images[0],
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FeatureCard;

const styles = StyleSheet.create({
  categoryContainer: {
    marginRight: 20,
    height: 280,
    width: 250,
  },
  imageContainer: {
    height: 250,
    width: 250,
  },
});
