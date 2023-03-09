import {SafeAreaView, ScrollView} from 'react-native';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import {categories, bestSellers, jewelCatalog} from './data';
import CategoriesCarousel from '../components/CategoriesCarousel';
import BestSellersCarousel from '../components/BestSellersCarousel';
import {useDispatch, useSelector} from 'react-redux';
import {
  bestSellersSelector,
  categoriesSelector,
  setBestSellers,
  setCategories,
  setJewels,
} from '../features/jewels/jewelrySlice';
import {AppDispatch} from '../../store';

const HomeScreen = () => {
  const categoriesState = useSelector(categoriesSelector);
  const bestSellersState = useSelector(bestSellersSelector);
  const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      getCategories();
      getBestSellers();
      getJewelsCatalog();
    }, [])

  const getCategories = () => {
    dispatch(setCategories(categories));
  };

  const getBestSellers = () => {
    dispatch(setBestSellers(bestSellers));
  }

  const getJewelsCatalog = () => {
    dispatch(setJewels(jewelCatalog));
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <Header />
        <Jumbotron />
        <CategoriesCarousel categories={categoriesState} />
        <BestSellersCarousel jewels={bestSellersState} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
