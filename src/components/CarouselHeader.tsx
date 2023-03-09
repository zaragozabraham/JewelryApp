import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { homeScreenProp } from '../navigations/types';

const CarouselHeader = ({title, filter=''}: {title: string, filter?: string}) => {
  const navigation = useNavigation<homeScreenProp>();

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
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() =>
          navigation.navigate('Catalog', {queryFilter: filter})
        }>
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

export default CarouselHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 8,
  },
});
