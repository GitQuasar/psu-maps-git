import React from 'react';

import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SettingsButton from '../molecules/settingsButton';
import RouteBar from '../organisms/routeBar';

const RoutePage = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.settingsButton}>
                <SettingsButton />
            </View>
            <RouteBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E6E8E5',
        justifyContent: 'flex-end',
        position: 'relative',
    },
    settingsButton: {
        position: 'absolute',
        top: '5%',
        left: '5%',
    },
});

export default RoutePage;
