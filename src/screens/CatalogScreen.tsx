import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {bestSellersSelector, jewelsSelector} from '../features/jewels/jewelrySlice';
import ScreenHeader from '../components/ScreenHeader';
import CategorySelector from '../components/CategorySelector';
import ProductCard from '../components/ProductCard';
import { Jewel } from '../models/Jewel';

const CatalogScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {queryFilter} = route.params;

  let jewels = useSelector(queryFilter === 'best sellers' ? bestSellersSelector : jewelsSelector);

  if (queryFilter && queryFilter !== 'best sellers') {
    jewels = jewels.filter((jewel: Jewel) => jewel.type === queryFilter);
  }

  const filteredJewels = jewels;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScreenHeader title={queryFilter} />
      <ScrollView>
        <CategorySelector selected={queryFilter} />
        <View style={styles.productList}>
          {filteredJewels.map(jewel => (
            <ProductCard {...jewel} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  productList: {
    paddingBottom: 50,
    paddingHorizontal: 14,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
});
