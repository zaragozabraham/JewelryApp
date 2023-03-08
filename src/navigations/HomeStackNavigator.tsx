import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from '../screens/CategoryScreen';
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
      <HomeStack.Screen name="Category" component={CategoryScreen} />
      <HomeStack.Screen name="ProductDetail" component={ProductScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
