import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Features = ({title}: {title: string}) => {
  const categories = ['rings', 'necklace', 'bracelets', 'wedding'];

  return (
    <View style={styles.featuresContainer}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: 26,
            flex: 1,
          }}>
          {title}
        </Text>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: 16,
              paddingRight: 10,
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        {categories.map(category => (
          <View style={styles.categoryContainer}>
            <Text
              style={{
                fontWeight: '400',
                textTransform: 'capitalize',
                fontSize: 16,
                marginVertical: 5,
              }}>
              Rings
            </Text>
            <TouchableOpacity>
              <Image
                style={styles.imageContainer}
                source={{
                  uri: 'https://static.mejuri.com/legacy-front/production/system/spree/products/10249/original/2019-12-09_PDP_Erin_Herringbone_Chains___Plain_Rings-0312-Edit-2.jpg',
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({
  featuresContainer: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  categoryContainer: {
    marginRight: 20,
  },
  imageContainer: {
    height: 250,
    width: 250,
  },
});
