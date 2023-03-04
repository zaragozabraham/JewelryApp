import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.brandName}>GOLDEN HOUR</Text>
      <TouchableOpacity>
        <BellIcon style={styles.icon} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MagnifyingGlassIcon style={styles.icon} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  brandName: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  icon: {
    marginLeft: 20,
  },
});
