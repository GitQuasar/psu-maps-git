import React from 'react';

import { StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import SettingsButton from '../molecules/settingsButton';

import FavoritesBar from '../organisms/favoritesBar';
const FavoritesPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.settingsButton}>
                <SettingsButton />
            </View>
            <FavoritesBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    settingsButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#E6E8E5',
        justifyContent: 'flex-end',
    },
});

export default FavoritesPage;
