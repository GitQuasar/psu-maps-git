import React from 'react';

import { Image, StyleSheet, ImageSourcePropType, TouchableOpacity, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface baseButtonProps {
    iconSrc: ImageSourcePropType;
    onPress?: () => void;
    style?: ViewStyle;
}

const BaseButton = (props: baseButtonProps) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={props.onPress} style={[styles.baseButton, props.style]}>
                <Image style={styles.icon} source={props.iconSrc} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    baseButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: '50%',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    icon: {
        height: '70%',
        width: '70%',
        resizeMode: 'contain',
    },
});

export default BaseButton;
