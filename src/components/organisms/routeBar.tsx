import React from 'react';

import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SwitchEndpointsButton from '../molecules/switchEndpointsButton';
import CloseButton from '../molecules/closeButton';

const RouteBar = () => {
    return (
        <SafeAreaView style={styles.navigationBar}>
            <View style={styles.routeContainer}>
                <Text style={styles.routeText}>Маршрут</Text>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.inputComponent}>
                    <Text>Откуда</Text>
                </TouchableOpacity>
                <CloseButton />
            </View>
            <SwitchEndpointsButton />
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.inputComponent}>
                    <Text>Куда</Text>
                </TouchableOpacity>
                <CloseButton />
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buildRouteButton}>
                    <Text>Построить маршрут</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    navigationBar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#932D30',
        height: '33%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
    },
    routeContainer: {
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 5,
    },
    routeText: {
        color: 'white',
        fontSize: 18,
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '50%',
        marginVertical: 8,
    },
    inputComponent: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#E0E0E0',
    },
    buildRouteButton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        paddingVertical: 15,
        alignItems: 'center',
    },
});

export default RouteBar;
