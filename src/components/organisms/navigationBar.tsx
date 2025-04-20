import React from 'react';

import ButtonBlock from './buttonBlock';

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NavigationBar = () => {
    return (
        <SafeAreaView style={styles.navigationBar}>
            <ButtonBlock />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    navigationBar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#932D30',
        height: '20%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
    },
});

export default NavigationBar;
