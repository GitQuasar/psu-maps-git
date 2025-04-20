import React from 'react';

import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationBar from '../organisms/navigationBar';
import SettingsButton from '../molecules/settingsButton';
import FloorsButton from '../molecules/floorsButton';
import PlusButton from '../molecules/plusButton';
import MinusButton from '../molecules/minusButton';

const MainPage = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.settingsButton}>
                <SettingsButton />
            </View>
            <View style={styles.floorsButton}>
                <FloorsButton />
            </View>
            <View style={styles.plusButton}>
                <PlusButton />
            </View>
            <View style={styles.minusButton}>
                <MinusButton />
            </View>
            <NavigationBar />
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
    floorsButton: {
        position: 'absolute',
        bottom: '30%',
        left: '5%',
    },
    plusButton: {
        position: 'absolute',
        top: '43%',
        right: '5%',
    },
    minusButton: {
        position: 'absolute',
        bottom: '43%',
        right: '5%',
    },
});

export default MainPage;
