import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { globalStyles } from '../atoms/globalStyle';

export interface SearchResultProps {
    b_id: number;
    r_id: string;
    floor: number;
    bio: string;
}

const RoomItem = (props: SearchResultProps) => {
    return (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.leftColumn}>
                <Text style={[styles.text, globalStyles.text]}>Аудитория {props.r_id}</Text>
                {props.bio != '' && (
                    <Text
                        style={[styles.underText, globalStyles.text]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {props.bio}
                    </Text>
                )}
            </View>
            <View style={styles.rightColumn}>
                <Text style={[styles.text, globalStyles.text]}>{props.b_id} корпус</Text>
                <Text style={[styles.text, globalStyles.text]}>{props.floor} этаж</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
    },
    underText: {
        fontSize: 14,
        fontWeight: 'semibold',
        color: '#1E2625',
    },
});

export default RoomItem;
