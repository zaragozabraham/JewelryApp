import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Features from '../components/Features';
import {categories, bestSellers} from './data';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <Header />
        <Jumbotron />
        <Features data={categories} />
        <Features data={bestSellers} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
