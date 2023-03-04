import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Jumbotron = () => {
  return (
    <TouchableOpacity>
      <View style={styles.jumbotronContainer}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: 'https://static.mejuri.com/legacy-front/production/system/spree/products/26385/original/1-MixedMetalTube_MixedMetalRing_SS_Stack_001.jpg',
          }}
        />
        <View style={styles.textContainer}>
          <Text
            style={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: 16,
              color: '#5b5151',
            }}>
            Tube Ring
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              textTransform: 'lowercase',
              fontSize: 28,
            }}>
            for everyone.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Jumbotron;

const styles = StyleSheet.create({
  jumbotronContainer: {
    height: 300,
    position: 'relative',
  },
  backgroundImage: {
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: 20,
    paddingTop: 30,
  },
});
