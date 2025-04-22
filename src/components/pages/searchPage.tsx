import React from 'react';

import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../organisms/searchBar';
const SearchPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E8E5',
        justifyContent: 'flex-end',
        position: 'relative',
    },
});

export default SearchPage;
