import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HeartIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import AccountScreen from '../screens/AccountScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const tabNavIcons = (route: {name: string}, color: any) => {
  switch (route.name) {
    case 'HomeTab':
      return <HomeIcon color={color} />;
    case 'FavoritesTab':
      return <HeartIcon color={color} />;
    case 'CartTab':
      return <ShoppingBagIcon color={color} />;
    case 'ProfileTab':
      return <UserIcon color={color} />;
    default:
      return;
  }
};

const BottonTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {backgroundColor: 'black'},
        tabBarIcon: ({color}) => tabNavIcons(route, color),
      })}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="FavoritesTab" component={FavoritesScreen} />
      <Tab.Screen name="CartTab" component={CartScreen} />
      <Tab.Screen name="ProfileTab" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottonTabNavigator;
