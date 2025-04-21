import React from 'react';

import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SwitchEndpointsButton from '../molecules/switchEndpointsButton';
import CloseButton from '../molecules/closeButton';

import { globalStyles } from '../atoms/globalStyle';

interface RouteBarProps {
    departurePoint: string;
    destinationPoint: string;
}

const RouteBar = (props: RouteBarProps) => {
    return (
        <SafeAreaView style={styles.bar}>
            <Text style={[styles.barTitle, globalStyles.text]}>Маршрут</Text>
            <View style={styles.barRows}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={[globalStyles.text, styles.touchableText]}>
                            {props.departurePoint}
                        </Text>
                    </TouchableOpacity>
                    <CloseButton />
                </View>
                <View style={styles.row}>
                    <SwitchEndpointsButton />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={[globalStyles.text, styles.touchableText]}>
                            {props.destinationPoint}
                        </Text>
                    </TouchableOpacity>
                    <CloseButton />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={[globalStyles.text, styles.touchableText]}>
                            Построить маршрут
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#932D30',
        height: '33%',
        minHeight: 300,
        borderTopLeftRadius: '10%',
        borderTopRightRadius: '10%',
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
    },
    barTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: '2.5%',
    },
    barRows: {
        flex: 1,
        flexDirection: 'column',
        width: '50%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginVertical: '2%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: '2%',
    },
    touchable: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: '#E0E0E0',
        marginRight: '2.5%',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    touchableText: {
        color: 'black',
        fontSize: 17,
    },
});

export default RouteBar;
