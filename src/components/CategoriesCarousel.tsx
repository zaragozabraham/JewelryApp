import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import CarouselHeader from './CarouselHeader';
import {Category} from '../models/Category';
import CategoryCard from './CategoryCard';

const CategoriesCarousel = ({categories}: {categories: Category[]}) => {
  return (
    <View style={styles.carrouselContainer}>
      <CarouselHeader title="Categories" />
      <ScrollView horizontal={true}>
        {categories.map((category: Category) => (
          <CategoryCard {...category} key={category.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesCarousel;

const styles = StyleSheet.create({
  carrouselContainer: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
});
