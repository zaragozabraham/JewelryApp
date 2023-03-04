import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottonTabNavigator from './src/navigations/BottonTabNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottonTabNavigator />
    </NavigationContainer>
  );
}

export default App;
