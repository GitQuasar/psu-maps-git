import React from 'react';

import FavoriteButton from '../atoms/favoriteButton';
import SearchButton from '../atoms/searchButton';
import RouteButton from '../atoms/routeButton';

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ButtonBlock = () => {
  return (
    <SafeAreaView style={styles.buttonsContainer}>
      <FavoriteButton />
      <SearchButton />
      <RouteButton />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});

export default ButtonBlock;
