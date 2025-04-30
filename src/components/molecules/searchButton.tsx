import React from 'react';

import { globalStyles } from '../atoms/globalStyle';

import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SearchButtonProps {
    onPress: () => void;
}

const SearchButton = (props: SearchButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.searchButton}>
            <SafeAreaView>
                <Image
                    style={styles.imageContainer}
                    source={require('../images/search_icon.png')}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.textContainer}>
                <Text style={[globalStyles.text, styles.text]}>Поиск</Text>
            </SafeAreaView>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    searchButton: {
        flexDirection: 'row',
        width: '44%',
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'absolute',
        bottom: '-30%',
        marginLeft: 10,
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'semibold',
    },
});

export default SearchButton;
