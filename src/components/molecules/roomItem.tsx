import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { globalStyles } from '../atoms/globalStyle';

export interface SearchResultProps {
    b_id: number;
    r_id: string;
    floor: number;
    bio: string;
    id: number;
}

interface RoomItemProps {
    b_id: number;
    r_id: string;
    floor: number;
    bio: string;
    id: number;
    onPressInfo?: () => void; // Переход к информации об аудитории (опционально)
    onPressRoute?: () => void; // Выбор аудитории для маршрута (опционально)
}

const RoomItem: React.FC<RoomItemProps> = ({
    b_id,
    r_id,
    floor,
    bio,
    id,
    onPressInfo,
    onPressRoute,
}) => {
    const handlePress = () => {
        if (onPressRoute) {
            onPressRoute(); // Вызываем обработчик для выбора аудитории для маршрута, если он есть
        } else if (onPressInfo) {
            onPressInfo(); // Вызываем обработчик для перехода к информации об аудитории, если он есть
        }
    };
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
            <View style={styles.leftColumn}>
                {r_id ? (
                    <>
                        <Text style={[styles.text, globalStyles.text]}>Аудитория {r_id}</Text>
                        {bio !== '' && (
                            <Text
                                style={[styles.underText, globalStyles.text]}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {bio}
                            </Text>
                        )}
                    </>
                ) : (
                    <Text
                        style={[styles.text, globalStyles.text]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {bio}
                    </Text>
                )}
            </View>
            <View style={styles.rightColumn}>
                <Text style={[styles.text, globalStyles.text]}>{b_id} корпус</Text>
                <Text style={[styles.text, globalStyles.text]}>{floor} этаж</Text>
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
