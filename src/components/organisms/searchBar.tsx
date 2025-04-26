import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../atoms/globalStyle';

import CloseButton from '../molecules/closeButton';
import CafeButton from '../molecules/cafeButton';
import LibraryButton from '../molecules/libraryButton';
import WcButton from '../molecules/wcButton';
import SearchResults from '../molecules/searchResults';

const SearchBar = () => {
    const [text, setText] = useState('');

    const handleTextChange = (newText: string) => {
        setText(newText);
    };

    const handleClearText = () => {
        setText('');
    };

    return (
        <SafeAreaView style={styles.bar}>
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
                <WcButton />
                <CafeButton />
                <LibraryButton />
            </View>
            <Text style={[styles.text, globalStyles.text]}>Результаты поиска:</Text>
            <ScrollView>
                <View style={styles.resultList}>
                    <SearchResults
                        auditorium={150}
                        floor={1}
                        building={1}
                        bio="Кафедра микроорганизмов"
                    />
                    <SearchResults auditorium={222} floor={2} building={2} bio="" />
                    {/* <SearchResults auditorium={134} floor={1} building={12} />
                    <SearchResults auditorium={567} floor={5} building={8} /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
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
        borderRadius: 25,
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
    resultList: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SearchBar;
