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
        <SafeAreaView style={styles.safeAreaView}>
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
            <View style={styles.floorsButton}>
                <FloorsButton />
            </View>
            <NavigationBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    settingsButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: '#E6E8E5',
        justifyContent: 'flex-end',
    },
    scaleButtons: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginHorizontal: 20,
    },
    button: {
        marginVertical: 10,
    },
    floorsButton: {
        margin: 20,
    },
});

export default MainPage;
