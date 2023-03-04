import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FeatureCard from './FeatureCard';

const Features = ({data}: {data: any}) => {
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
          {data.type}
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
        {data.items.map((item: {title: string; image: string}) => (
          <FeatureCard {...item} />
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
});
