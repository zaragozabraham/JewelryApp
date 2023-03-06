import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottonTabNavigator from './src/navigations/BottonTabNavigator';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <BottonTabNavigator />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
