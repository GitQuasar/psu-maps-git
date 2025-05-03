import React from 'react';

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavoritesButton from '../molecules/favoritesButton';
import SearchButton from '../molecules/searchButton';
import RouteButton from '../molecules/routeButton';

interface NavigationBarProps {
    onNavigation: (bar: 'favorite' | 'search' | 'route') => void;
}

const NavigationBar = (props: NavigationBarProps) => {
    return (
        <SafeAreaView style={styles.navigationBar}>
            <SafeAreaView style={styles.buttonsContainer}>
                <FavoritesButton onPress={() => props.onNavigation('favorite')} />
                <SearchButton onPress={() => props.onNavigation('search')} />
                <RouteButton onPress={() => props.onNavigation('route')} />
            </SafeAreaView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    navigationBar: {
        pointerEvents: 'box-none',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#932D30',
        height: '20%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
});

export default NavigationBar;
