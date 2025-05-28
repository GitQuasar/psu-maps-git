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
import { Canvas, Image, useImage } from '@shopify/react-native-skia';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

const imageWidth = 5000;
const imageHeight = 2000 / (3192 / 5532);

const MainPage = () => {
    const navigation = useNavigation<MainScreenNavigationProp>();

    const goToSettings = () => {
        navigation.navigate('Settings', undefined);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.imageContainer}>
                {/* <Image source={require('../../assets/floors/f1.png')} style={styles.image} /> */}
                <Canvas style={{ flex: 1 }}>
                    <Image
                        image={useImage(require('../../assets/floors/f1.png'))}
                        x={-1460}
                        y={1500}
                        width={imageWidth}
                        height={imageHeight}
                    />
                </Canvas>
            </View>
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
                <FloorSelection />
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
    imageContainer: {
        flex: 1,
        width: imageWidth,
        height: imageHeight,
        position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
        // top: 0,
        // height: '100%',
        // width: '100%',
        // alignItems: 'center',
    },
    image: {
        width: imageWidth,
        height: imageHeight,
        resizeMode: 'contain', // Важно для правильного отображения
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: '#E6E8E5',
        justifyContent: 'flex-end',
    },
    scaleButtons: {
        // position: 'absolute',
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
