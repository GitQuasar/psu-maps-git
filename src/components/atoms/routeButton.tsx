import React from 'react';

import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RouteButton = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.favoriteButton}>
        <Image style={styles.imageContainer} source={require('../images/route_icon.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  favoriteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  imageContainer: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default RouteButton;
