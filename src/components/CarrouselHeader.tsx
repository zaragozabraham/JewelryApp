import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CarrouselHeader = ({title}: {title: string}) => {
  return (
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
  );
};

export default CarrouselHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 8,
  },
});
