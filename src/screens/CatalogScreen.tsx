import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  bestSellersSelector,
  jewelsSelector,
} from '../features/jewels/jewelrySlice';
import ScreenHeader from '../components/ScreenHeader';
import CategorySelector from '../components/CategorySelector';
import ProductCard from '../components/ProductCard';
import {Jewel} from '../models/Jewel';

const CatalogScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const [filter, setFilter] = useState<string>('');
  const {queryFilter} = route.params;
  const validFilter = queryFilter && queryFilter !== 'best sellers';
  let jewels = useSelector(
    queryFilter === 'best sellers' ? bestSellersSelector : jewelsSelector,
  );

  if (filter) {
    jewels = jewels.filter((jewel: Jewel) => jewel.type === filter);
  }

  const filteredJewels = jewels;

  useEffect(() => {
    if (validFilter) {
      setFilter(queryFilter);
    }
  }, []);

  const handleSelectFilter = (category: string) => {
    setFilter(category);
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScreenHeader title={filter} />
      <ScrollView>
        <CategorySelector selected={queryFilter} onSelectFilter={handleSelectFilter} />
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
