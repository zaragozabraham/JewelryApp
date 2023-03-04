import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HeartIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const tabNavIcons = (route: {name: string}, color: any) => {
  switch (route.name) {
    case 'Home':
      return <HomeIcon color={color} />;
    case 'Favorites':
      return <HeartIcon color={color} />;
    case 'Cart':
      return <ShoppingBagIcon color={color} />;
    case 'Profile':
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottonTabNavigator;
