import React from 'react';

import { Image, StyleSheet, ImageSourcePropType, TouchableOpacity, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface baseButtonProps {
    iconSrc: ImageSourcePropType;
    style?: ViewStyle;
}

const BaseButton = (props: baseButtonProps) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={[styles.baseButton, props.style]}>
                <Image style={styles.icon} source={props.iconSrc} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    baseButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        backgroundColor: '#D9D9D9',
        borderRadius: 25, // shorthand for all border radiiuses
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    icon: {
        height: 23,
        width: 23,
        resizeMode: 'contain',
    },
});

export default BaseButton;
