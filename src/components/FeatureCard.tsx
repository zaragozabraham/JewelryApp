import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const FeatureCard = ({title, image}: {title: string; image: string}) => {
  return (
    <View style={styles.categoryContainer}>
      <Text
        numberOfLines={1}
        style={{
          fontWeight: '400',
          textTransform: 'capitalize',
          fontSize: 16,
          marginVertical: 5,
        }}>
        {title}
      </Text>
      <TouchableOpacity>
        <Image
          style={styles.imageContainer}
          source={{
            uri: image,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FeatureCard;

const styles = StyleSheet.create({
  categoryContainer: {
    marginRight: 20,
    height: 280,
    width: 250,
  },
  imageContainer: {
    height: 250,
    width: 250,
  },
});
