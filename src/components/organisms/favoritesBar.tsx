import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../atoms/globalStyle';

import RoomItem, { SearchResultProps } from '../molecules/roomItem';
import RoomsJson from '../../types/roomsJson';
import rooms from '../../assets/rooms.json';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface SearchBarProps {
    onRoomPress: (room: SearchResultProps) => void;
}

const FavoritesBar = (props: SearchBarProps) => {
    const [favoriteRooms, setFavoriteRooms] = useState<SearchResultProps[]>([]);
    const [_isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadFavoriteRooms = async () => {
            setIsLoading(true);

            try {
                const storedFavorites = await AsyncStorage.getItem('favorite_rooms');
                const favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
                const allRooms = (rooms as RoomsJson).rooms;
                const filteredRooms = allRooms.filter((room) => favoritesArray.includes(room.id));

                const searchResultProps: SearchResultProps[] = filteredRooms.map((room) => ({
                    b_id: room.b_id,
                    r_id: room.r_id || '',
                    floor: room.floor,
                    bio: room.bio,
                    id: room.id,
                }));

                setFavoriteRooms(searchResultProps);
            } catch (error) {
                console.error(error);
                setFavoriteRooms([]);
            } finally {
                setIsLoading(false);
            }
        };

        loadFavoriteRooms();
    }, []);

    const handleRemoveFavorite = async (roomToRemove: SearchResultProps) => {
        try {
            const storedFavorites = await AsyncStorage.getItem('favorite_rooms');
            let favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];

            favoritesArray = favoritesArray.filter((id: number) => id !== roomToRemove.id);

            await AsyncStorage.setItem('favorite_rooms', JSON.stringify(favoritesArray));

            setFavoriteRooms((prevRooms) =>
                prevRooms.filter((room) => room.id !== roomToRemove.id)
            );
        } catch (error) {
            console.error(error);
        }
    };
    const renderItem = ({ item }: { item: SearchResultProps }) => (
        <View style={styles.item}>
            <RoomItem
                id={item.id}
                r_id={item.r_id}
                floor={item.floor}
                b_id={item.b_id}
                bio={item.bio}
                onPress={props.onRoomPress}
            />
            <View style={styles.touchableRow}>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() => {
                        handleRemoveFavorite(item);
                    }}
                >
                    <Text style={[globalStyles.text]}>Удалить</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const keyExtractor = (item: SearchResultProps) => item.id.toString();

    return (
        <SafeAreaView style={styles.bar}>
            <Text style={[styles.barTitle, globalStyles.text]}>Избранное</Text>
            <FlatList
                style={styles.itemList}
                data={favoriteRooms}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ListEmptyComponent={
                    <Text style={styles.barTitle}>Вы ещё не добавили аудитории в избранное!</Text>
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#932D30',
        height: '66%',
        minHeight: 300,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
        alignItems: 'center',
    },
    barTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: '2.5%',
        textAlign: 'center',
    },
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#6C0503',
        borderRadius: 25,
        marginVertical: '2%',
        padding: '2%',
    },
    touchableOpacity: {
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
        borderRadius: 25,
        backgroundColor: '#D9D9D9',
        width: '30%',
    },
    touchableRow: {
        flex: 1,
        flexDirection: 'row',
    },
    itemList: {
        padding: '2%',
        width: '100%',
    },
});

export default FavoritesBar;
