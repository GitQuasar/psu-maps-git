import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { globalStyles } from '../atoms/globalStyle';

import CloseButton from '../molecules/closeButton';
import CafeButton from '../molecules/cafeButton';
import LibraryButton from '../molecules/libraryButton';

const SearchBar = () => {
    const [text, setText] = useState('');

    const handleTextChange = (newText: string) => {
        setText(newText);
    };

    const handleClearText = () => {
        console.log(text);
        setText('');
    };

    return (
        <View style={styles.bar}>
            <View style={styles.searchRow}>
                <TextInput
                    style={[styles.searchTextInput, globalStyles.text]}
                    placeholder="Поиск"
                    placeholderTextColor="#000000"
                    value={text}
                    onChangeText={handleTextChange}
                />
                <CloseButton onPress={handleClearText} />
            </View>
            <Text style={[styles.text, globalStyles.text]}>Быстрый выбор:</Text>
            <View style={styles.searchRow}>
                <CafeButton />
                <LibraryButton />
            </View>
            <Text style={[styles.text, globalStyles.text]}>Результаты поиска:</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#932D30',
        height: '66%',
        minHeight: 300,
        borderTopLeftRadius: '10%',
        borderTopRightRadius: '10%',
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
    },
    searchTextInput: {
        width: '50%',
        height: 44,
        backgroundColor: '#D9D9D9',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'semibold',
        color: '#000000',
    },
    searchRow: {
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: '#ffffff',
        marginLeft: '5%',
        marginTop: '5%',
    },
});

export default SearchBar;
