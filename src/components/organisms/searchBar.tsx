import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../atoms/globalStyle';

import CloseButton from '../molecules/closeButton';
import CafeButton from '../molecules/cafeButton';
import LibraryButton from '../molecules/libraryButton';
import WcButton from '../molecules/wcButton';
import RoomItem, { SearchResultProps } from '../molecules/roomItem';

import RoomsJson from '../../types/roomsJson';

import rooms from '../../assets/rooms.json';

const SearchBar = () => {
    const [text, setText] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResultProps[]>([]);

    const searchRooms = useCallback((searchText: string) => {
        const results: SearchResultProps[] = [];

        (rooms as RoomsJson).rooms.forEach((room) => {
            if (
                room.r_id != null &&
                typeof room.r_id === 'string' &&
                room.r_id.toLowerCase().includes(searchText.toLowerCase())
            ) {
                const floor = parseInt(room.r_id.charAt(0), 10);

                const searchResult: SearchResultProps = {
                    b_id: room.b_id,
                    r_id: room.r_id,
                    floor: isNaN(floor) ? 0 : floor,
                    bio: room.bio,
                };

                results.push(searchResult);
            }
        });

        setSearchResults(results);
    }, []);
    const handleTextChange = (newText: string) => {
        setText(newText);
        if (newText === '') {
            setSearchResults([]);
        } else {
            searchRooms(newText);
        }
    };

    const handleClearText = () => {
        setText('');
        setSearchResults([]);
    };

    const renderItem = ({ item }: { item: SearchResultProps }) => <RoomItem {...item} />;

    const keyExtractor = useCallback(
        (item: SearchResultProps, index: number) => index.toString(),
        []
    );

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
            <FlatList
                style={styles.FlatList}
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
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
        padding: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    FlatList: {
        marginHorizontal: '5%',
    },
});

export default SearchBar;
