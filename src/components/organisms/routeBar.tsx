import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwitchEndpointsButton from '../molecules/switchEndpointsButton';
import CloseButton from '../molecules/closeButton';
import { globalStyles } from '../atoms/globalStyle';

interface RouteBarProps {
    onBack: () => void;
    onSelectDeparture: (room: { b_id: number; r_id: string; id: number }) => void;
    onSelectDestination: (room: { b_id: number; r_id: string; id: number }) => void;
    departureRoom?: { b_id: number; r_id: string; id: number } | null;
    destinationRoom?: { b_id: number; r_id: string; id: number } | null;
    onSwitchEndpoints: () => void;
    onClearDeparture: () => void; // Добавляем функцию для очистки "Откуда"
    onClearDestination: () => void; // Добавляем функцию для очистки "Куда"
    onBuildRoute: (startId: string, endId: string) => void;
}

const RouteBar: React.FC<RouteBarProps> = ({
    onBack,
    onSelectDeparture,
    onSelectDestination,
    departureRoom,
    destinationRoom,
    onSwitchEndpoints,
    onClearDeparture, // Добавляем функцию для очистки "Откуда"
    onClearDestination,
    onBuildRoute,
}) => {
    const handleBuildRoutePress = () => {
        if (departureRoom && destinationRoom) {
            const startId = `v${departureRoom.id}`; // Используем id
            const endId = `v${destinationRoom.id}`; // Используем id
            onBuildRoute(startId, endId);
        } else {
            console.warn('Не выбраны начальная и конечная аудитории');
            // Можно добавить визуальное уведомление для пользователя
        }
    };
    return (
        <SafeAreaView style={styles.bar}>
            <Text style={[styles.barTitle, globalStyles.text]}>Маршрут</Text>
            <View style={styles.barRows}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.touchable}
                        onPress={() => onSelectDeparture({ b_id: 0, r_id: '', id: 0 })} // Переход в SearchBar для выбора "откуда"
                    >
                        <Text style={[globalStyles.text, styles.touchableText]}>
                            {departureRoom
                                ? `Ауд. ${departureRoom.r_id} (${departureRoom.b_id} корпус)`
                                : 'Откуда'}
                        </Text>
                    </TouchableOpacity>
                    <CloseButton onPress={onClearDeparture} />
                </View>
                <View style={styles.row}>
                    <SwitchEndpointsButton onPress={onSwitchEndpoints} />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.touchable}
                        onPress={() => onSelectDestination({ b_id: 0, r_id: '', id: 0 })} // Переход в SearchBar для выбора "куда"
                    >
                        <Text style={[globalStyles.text, styles.touchableText]}>
                            {destinationRoom
                                ? `Ауд. ${destinationRoom.r_id} (${destinationRoom.b_id} корпус)`
                                : 'Куда'}
                        </Text>
                    </TouchableOpacity>
                    <CloseButton onPress={onClearDestination} />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.touchable} onPress={handleBuildRoutePress}>
                        <Text style={[globalStyles.text, styles.touchableText]}>
                            Построить маршрут
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#932D30',
        height: '33%',
        minHeight: 300,
        borderTopLeftRadius: '10%',
        borderTopRightRadius: '10%',
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)',
    },
    barTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: '2.5%',
    },
    barRows: {
        flex: 1,
        flexDirection: 'column',
        width: '50%',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginVertical: '2%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: '2%',
    },
    touchable: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: '#E0E0E0',
        marginRight: '2.5%',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    touchableText: {
        color: 'black',
        fontSize: 17,
    },
});

export default RouteBar;
