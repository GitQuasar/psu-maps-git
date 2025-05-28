import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../atoms/globalStyle';

import FavoritesButton from '../molecules/favoritesButton';
import FavoritesButtonFilled from '../molecules/favoritesButtonFilled';
import { SearchResultProps } from '../molecules/roomItem';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface InformationBarProps {
    roomData: SearchResultProps;
    setRoomsData: (data: { rooms: any[] }) => void;
    onAddToRoute: (room: { b_id: number; r_id: string; id: number }) => void;
}

const InformationBar = (props: InformationBarProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const checkIsFavorite = async () => {
            try {
                const storedFavorites = await AsyncStorage.getItem('favorite_rooms');
                const favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
                setIsFavorite(favoritesArray.includes(props.roomData.id));
            } catch (error) {
                console.error(error);
            }
        };

        checkIsFavorite();
    }, [props.roomData.id]);

    const toggleFavorite = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem('favorite_rooms');
            let favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];

            if (isFavorite) {
                favoritesArray = favoritesArray.filter((id: number) => id !== props.roomData.id);
            } else {
                favoritesArray = [...favoritesArray, props.roomData.id];
            }

            await AsyncStorage.setItem('favorite_rooms', JSON.stringify(favoritesArray));
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error(error);
        }
    };

    const [isBioTruncated, setIsBioTruncated] = useState(false);

    return (
        <SafeAreaView style={styles.bar}>
            <Text style={[styles.barTitle, globalStyles.text]}>Информация о аудитории</Text>
            <View style={styles.item}>
                <View style={styles.itemContainer}>
                    <View style={styles.leftColumn}>
                        {props.roomData.r_id ? (
                            <Text style={[styles.text, globalStyles.text]}>
                                Аудитория {props.roomData.r_id}
                            </Text>
                        ) : (
                            <Text
                                style={[styles.text, globalStyles.text]}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                onTextLayout={({ nativeEvent: { lines } }) => {
                                    setIsBioTruncated(lines.length > 1);
                                }}
                            >
                                {props.roomData.bio}
                            </Text>
                        )}
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={[styles.text, globalStyles.text]}>
                            {props.roomData.b_id} корпус
                        </Text>
                        <Text style={[styles.text, globalStyles.text]}>
                            {props.roomData.floor} этаж
                        </Text>
                    </View>
                </View>

                <Text style={[styles.title, globalStyles.text]}>Дополнительная информация</Text>
                <View style={styles.itemContainerLower}>
                    <View style={styles.leftColumn}>
                        {props.roomData.r_id ? (
                            props.roomData.bio !== '' ? (
                                <Text style={[styles.text, globalStyles.text]}>
                                    {props.roomData.bio}
                                </Text>
                            ) : (
                                <Text style={[styles.text, globalStyles.text]}>
                                    Дополнительной информации не найдено
                                </Text>
                            )
                        ) : isBioTruncated ? (
                            <Text style={[styles.text, globalStyles.text]}>
                                {props.roomData.bio}
                            </Text>
                        ) : (
                            <Text style={[styles.text, globalStyles.text]}>
                                Дополнительной информации не найдено
                            </Text>
                        )}
                    </View>
                </View>
                <View style={styles.touchableRow}>
                    <TouchableOpacity
                        style={styles.touchableOpacity}
                        onPress={() =>
                            props.onAddToRoute({
                                b_id: props.roomData.b_id,
                                r_id: props.roomData.r_id,
                                id: props.roomData.id,
                            })
                        }
                    >
                        <Text style={[styles.routeText, globalStyles.text]}>Построить маршрут</Text>
                    </TouchableOpacity>
                    <View>
                        {isFavorite === false && <FavoritesButton onPress={toggleFavorite} />}
                        {isFavorite === true && <FavoritesButtonFilled onPress={toggleFavorite} />}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#932D30',
        height: 'auto',
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
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginVertical: '2.5%',
    },
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#6C0503',
        borderRadius: 25,
        marginVertical: '2%',
        marginHorizontal: '5%',
        padding: '2%',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '2%',
        paddingHorizontal: '5%',
        width: '100%',
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    itemContainerLower: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '2%',
        paddingHorizontal: '5%',
        width: '100%',
        height: 'auto',
        minHeight: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    leftColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    rightColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'semibold',
        marginVertical: '2%',
    },
    underText: {
        fontSize: 14,
        fontWeight: 'semibold',
        color: '#1E2625',
    },
    touchableRow: {
        flexDirection: 'row',
        paddingTop: '2%',
    },
    touchableOpacity: {
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
        borderRadius: 25,
        backgroundColor: '#D9D9D9',
    },
    routeText: {
        fontSize: 18,
        fontWeight: 'medium',
        marginVertical: '2.5%',
        marginHorizontal: '2%',
    },
});

export default InformationBar;
