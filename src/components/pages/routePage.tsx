import React from 'react';

import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SettingsButton from '../molecules/settingsButton';
import RouteBar from '../organisms/routeBar';
import PlusButton from '../molecules/plusButton';
import MinusButton from '../molecules/minusButton';

const RoutePage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.settingsButton}>
                <SettingsButton />
            </View>
            <View style={styles.scaleButtons}>
                <View style={styles.button}>
                    <PlusButton />
                </View>
                <View style={styles.button}>
                    <MinusButton />
                </View>
            </View>
            <RouteBar departurePoint="Откуда" destinationPoint="Куда" />
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
        position: 'relative',
    },
    scaleButtons: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    button: {
        marginVertical: 10,
    },
});

export default RoutePage;
