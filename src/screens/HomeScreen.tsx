import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import {categories, bestSellers} from './data';
import CategoriesCarrousel from '../components/CategoriesCarrousel';
import BestSellersCarrousel from '../components/BestSellersCarrousel';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <Header />
        <Jumbotron />
        <CategoriesCarrousel categories={categories} />
        <BestSellersCarrousel jewels={bestSellers} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
