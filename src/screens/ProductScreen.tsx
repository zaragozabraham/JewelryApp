import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ScreenHeader from '../components/ScreenHeader';
import {HeartIcon, ShoppingBagIcon} from 'react-native-heroicons/outline';
import ProductImageSwiper from '../components/ProductImageSwiper';

const ProductScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {product} = route.params;
  const [selectedSize, setselectedSize] = useState<number>(0);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScreenHeader title={product.name} productScreen={true} />
      <ScrollView>
        <ProductImageSwiper images={product.images} />
        <View style={{paddingHorizontal: 15}}>
          <View style={styles.rowContainer}>
            <Text
              numberOfLines={2}
              adjustsFontSizeToFit
              style={styles.productNameStyle}>
              {product.name}
            </Text>
            <TouchableOpacity>
              <HeartIcon color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <Text style={{fontSize: 16}}>{product.material}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              ${product.price}
            </Text>
          </View>
          <Text style={styles.productDescriptionStyle}>
            {product.description}
          </Text>
          <Text style={{marginVertical: 6}}>Select size:</Text>
          <View style={styles.sizeSelectorContainer}>
            {product.sizes.map((size: number) => (
              <TouchableOpacity
                style={[
                  {
                    backgroundColor:
                      selectedSize === size ? '#c3d4e5' : '#eaeef2',
                  },
                  styles.sizeBadge,
                ]}
                onPress={() => setselectedSize(size)}>
                <Text style={{textAlign: 'center'}}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.shoppingBagButton}>
            <ShoppingBagIcon color="white" size={20} />
            <Text style={{color: 'white', marginLeft: 6}}>Add to Bag</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  sizeSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  sizeBadge: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    borderRadius: 100,
  },
  productNameStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  productDescriptionStyle: {
    marginVertical: 8,
    fontWeight: '300',
    fontSize: 12,
    textAlign: 'justify',
  },
  shoppingBagButton: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 50,
    width: 300,
    alignSelf: 'center',
  },
});
