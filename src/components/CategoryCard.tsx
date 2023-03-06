import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Category} from '../models/Category';

const CategoryCard = (category: Category) => {
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
        {category.name}
      </Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Category', { ...category})}> */}
      <TouchableOpacity>
        <Image
          style={styles.imageContainer}
          source={{
            uri: category.image,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;

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
