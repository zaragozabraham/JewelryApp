import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CatalogScreen from '../screens/CatalogScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Catalog" component={CatalogScreen} />
      <HomeStack.Screen name="ProductDetail" component={ProductScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
