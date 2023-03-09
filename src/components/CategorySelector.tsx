import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {categoriesSelector} from '../features/jewels/jewelrySlice';

const CategorySelector = ({selected}: {selected?: string}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const categoriesState = useSelector(categoriesSelector);

  useEffect(() => {
    if (selected && selectedCategory != '') {
      setSelectedCategory(selected);
    }
  }, []);

  const buttons = categoriesState.map(category => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(category.name)}
      style={[
        styles.categoryButton,
        {
          borderColor: selectedCategory === category.name ? 'black' : '#a0abb2',
        },
      ]}>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.categoryLabel}>
        {category.name}
      </Text>
    </TouchableOpacity>
  ));

  return <View style={styles.categorySelectorContainer}>{buttons}</View>;
};

export default CategorySelector;

const styles = StyleSheet.create({
  categorySelectorContainer: {
    height: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  categoryButton: {
    height: 40,
    width: 80,
    backgroundColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabel: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
