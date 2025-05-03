import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import FloorsButton from './floorsButton';

type FloorSelectionProps = {
    onFloorSelect: (floor: number) => void;
};

const FloorSelection = (props: FloorSelectionProps) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const floors = [7, 6, 5, 4, 3, 2, 1];
    const [selectedFloor, setSelectedFloor] = useState<number | null>(null);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleFloorSelect = (floor: number) => {
        setSelectedFloor(floor);
        props.onFloorSelect(floor);
        setIsMenuVisible(false);
    };

    return (
        <View style={styles.container}>
            {isMenuVisible && (
                <View style={styles.menuContainer}>
                    {floors.map((floor) => (
                        <TouchableOpacity
                            key={floor}
                            onPress={() => handleFloorSelect(floor)}
                            style={styles.menuItem}
                        >
                            <Text style={styles.menuItemText}>{floor}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
            <View style={styles.floorsButton}>
                <FloorsButton onPress={toggleMenu} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    menuContainer: {
        position: 'absolute',
        bottom: '100%',
        alignItems: 'center',
        backgroundColor: '#6C0503',
        borderRadius: 25,
        width: 50,
        paddingVertical: '1%',
        zIndex: 1,
    },
    menuItem: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        backgroundColor: '#D9D9D9',
        borderRadius: 25,
        marginVertical: '5%',
    },
    menuItemText: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
    },
    floorsButton: {
        marginVertical: '2%',
    },
});

export default FloorSelection;
