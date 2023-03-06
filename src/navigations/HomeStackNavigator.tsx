import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryScreen from '../screens/CategoryScreen';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Category" component={CategoryScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
