import React from 'react';

import FavoritesButton from '../molecules/favoritesButton';
import SearchButton from '../molecules/searchButton';
import RouteButton from '../molecules/routeButton';

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ButtonBlock = () => {
    return (
        <SafeAreaView style={styles.buttonsContainer}>
            <FavoritesButton />
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
