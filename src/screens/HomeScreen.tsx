import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Features from '../components/Features';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Jumbotron />
        <Features title='categories'/>
        <Features title='best sellers'/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
