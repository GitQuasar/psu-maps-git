import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { globalStyles } from '../atoms/globalStyle';

interface SearchResultsProps {
    auditorium: Number;
    floor: Number;
    building: Number;
    bio: String;
}

const SearchResults = (props: SearchResultsProps) => {
    return (
        <TouchableOpacity style={styles.searchResult}>
            {props.bio === '' ? (
                <Text style={[styles.text, globalStyles.text]}>
                    Аудитория {String(props.auditorium)}
                </Text>
            ) : (
                <View>
                    <Text style={[styles.text, globalStyles.text]}>
                        Аудитория {String(props.auditorium)}
                    </Text>
                    <Text
                        style={[styles.underText, globalStyles.text]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {props.bio}
                    </Text>
                </View>
            )}

            <View style={styles.columnText}>
                <Text style={[styles.text, globalStyles.text]}>
                    {String(props.building)} корпус
                </Text>
                <Text style={[styles.text, globalStyles.text]}>{String(props.floor)} этаж</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    searchResult: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '5%',
        width: '90%',
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    text: {
        fontSize: 18,
        fontWeight: 'semibold',
        marginHorizontal: '5%',
    },
    columnText: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    underText: {
        width: 200,
        fontSize: 18,
        fontWeight: 'semibold',
        marginHorizontal: '5%',
        color: '#1E2625',
    },
});

export default SearchResults;
