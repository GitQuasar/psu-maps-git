import React, { useState, useEffect } from 'react';

import { StyleSheet, View, FlatList, ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RoomsJson from '../../types/roomsJson';
import RoomItem from '../molecules/roomItem';

const JsonPage = () => {
    const [data, setData] = useState<RoomsJson | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadJsonData = async () => {
            try {
                const response = require('../../assets/rooms.json');
                setData(response);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };
        loadJsonData();
    }, []);
    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.title}>Json Data Display</Text>
            <FlatList
                data={data?.rooms}
                keyExtractor={(item) => item.uid.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <RoomItem
                            r_id={item.r_id}
                            bio={item.bio}
                            b_id={item.b_id}
                            floor={(parseInt(item.r_id, 10) / 100) | 0}
                        />
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        padding: 16,
        backgroundColor: '#932D30',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: 'red',
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {},
    itemText: {
        fontSize: 16,
        marginBottom: 4,
    },
});

export default JsonPage;
