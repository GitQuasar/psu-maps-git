import React from 'react';

import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList } from './../../App';
import { StackNavigationProp } from '@react-navigation/stack';

import SettingsButton from '../molecules/settingsButton';
import PlusButton from '../molecules/plusButton';
import MinusButton from '../molecules/minusButton';
import FloorSelection from '../molecules/floorSelection';
import { useNavigation } from '@react-navigation/native';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

const MainPage = () => {
    const handleFloorSelection = (floor: number) => {
        console.log(`Selected floor: ${floor}`);
    };
    const navigation = useNavigation<MainScreenNavigationProp>();

    const goToSettings = () => {
        navigation.navigate('Settings', undefined);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.settingsButton}>
                <SettingsButton onPress={goToSettings} />
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
                <FloorSelection onFloorSelect={handleFloorSelection} />
            </View>
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
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    button: {
        marginVertical: 10,
    },
    floorsButton: {
        position: 'absolute',
        margin: 20,
        marginBottom: '50%',
    },
});

export default MainPage;
