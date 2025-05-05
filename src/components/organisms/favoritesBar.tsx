import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../atoms/globalStyle';

import RoomItem from '../molecules/roomItem';

import Room from '../../types/room';

const FavoritesBar = () => {
    const items: Room[] = [
        {
            uid: 0,
            b_id: 1,
            r_id: '100',
            bio: 'Кафедра микроорганизмов',
        },
        {
            uid: 1,
            b_id: 2,
            r_id: '200',
            bio: 'Кафедра природоведения',
        },
        {
            uid: 2,
            b_id: 2,
            r_id: '300',
            bio: 'Кафедра природоведенияприродоведенияприродоведения',
        },
        {
            uid: 3,
            b_id: 2,
            r_id: '300',
            bio: 'Комната жениха-тиктокера',
        },
        {
            uid: 4,
            b_id: 2,
            r_id: '300',
            bio: '',
        },
        {
            uid: 5,
            b_id: 2,
            r_id: '300',
            bio: '',
        },
        {
            uid: 6,
            b_id: 2,
            r_id: '300',
            bio: '',
        },
        {
            uid: 7,
            b_id: 2,
            r_id: '300',
            bio: '',
        },
        {
            uid: 8,
            b_id: 2,
            r_id: '300',
            bio: '',
        },
    ];
    return (
        <SafeAreaView style={styles.bar}>
            <Text style={[styles.barTitle, globalStyles.text]}>Избранное</Text>
            <FlatList
                style={styles.itemList}
                data={items}
                keyExtractor={(item) => item.uid.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <RoomItem
                            key={item.uid}
                            r_id={item.r_id}
                            floor={(parseInt(item.r_id, 10) / 100) | 0}
                            b_id={item.b_id}
                            bio={item.bio}
                        />
                        <View style={styles.touchableRow}>
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <Text style={[globalStyles.text]}>Показать на карте</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <Text style={[globalStyles.text]}>Удалить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
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
        flex: 1,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
        borderRadius: 25,
        backgroundColor: '#D9D9D9',
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
