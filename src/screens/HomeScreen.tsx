import {SafeAreaView, ScrollView} from 'react-native';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import {categories, bestSellers} from './data';
import CategoriesCarrousel from '../components/CategoriesCarrousel';
import BestSellersCarrousel from '../components/BestSellersCarrousel';
import {useDispatch, useSelector} from 'react-redux';
import {
  bestSellersSelector,
  categoriesSelector,
  setBestSellers,
  setCategories,
} from '../features/jewels/jewelrySlice';
import {AppDispatch} from '../../store';

const HomeScreen = () => {
  const categoriesState = useSelector(categoriesSelector);
  const bestSellersState = useSelector(bestSellersSelector);
  const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      getCategories();
      getBestSellers();
    }, [])

  const getCategories = () => {
    dispatch(setCategories(categories));
  };

  const getBestSellers = () => {
    dispatch(setBestSellers(bestSellers));
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <Header />
        <Jumbotron />
        <CategoriesCarrousel categories={categoriesState} />
        <BestSellersCarrousel jewels={bestSellersState} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
