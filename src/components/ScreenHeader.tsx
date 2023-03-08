import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ShareIcon} from 'react-native-heroicons/outline';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {homeScreenProp} from '../navigations/types';

const ScreenHeader = ({
  title,
  productScreen = false,
}: {
  title: string;
  productScreen?: boolean;
}) => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <ChevronLeftIcon color="black" />
      </TouchableOpacity>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.headerTitle}>
        {title}
      </Text>
      {productScreen ? (
        <TouchableOpacity>
          <ShareIcon color="black" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 22,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  backButton: {
    marginRight: 12,
    alignSelf: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '400',
    flex: 1,
  },
});
