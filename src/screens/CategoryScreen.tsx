import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { typeSelector } from '../features/jewels/jewelrySlice';
import { RootState } from '../../store';

const CategoryScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {category} = route.params;
  const jewels = useSelector((state: RootState) => typeSelector(state, category));
  return (
    <SafeAreaView>
      <Text>CategoryScreen</Text>
      <Text>{category}</Text>
      {jewels.map((jewel) => (
        <Text key={jewel.id}>{jewel.name}</Text>
      ))}
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
