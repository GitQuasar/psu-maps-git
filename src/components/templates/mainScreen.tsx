import React, { useEffect, useState, useCallback } from 'react';

import MainPage from '../pages/mainPage';
import NavigationBar from '../organisms/navigationBar';
import RouteBar from '../organisms/routeBar';
import SearchBar from '../organisms/searchBar';
import FavoritesBar from '../organisms/favoritesBar';
import rooms from '../../assets/rooms.json';

import { StyleSheet, View, Platform, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InformationBar from '../organisms/informationBar';
import { SearchResultProps } from '../molecules/roomItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../../App';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type BarType = 'main' | 'favorite' | 'search' | 'route' | 'information';
interface RoomsData {
    rooms: any[];
}

const MainScreen = () => {
    const [activeBar, setActiveBar] = useState<BarType>('main');
    const [selectedRoom, setSelectedRoom] = useState<SearchResultProps>();

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleBuildRoute = (startId: string, endId: string) => {
        navigation.navigate('Route', { startId: startId, endId: endId });
    };

    const [_roomsData, setRoomsData] = useState<RoomsData>({ rooms: [] });
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isRouteMode, setIsRouteMode] = useState(false);
    const [departureRoom, setDepartureRoom] = useState<{
        b_id: number;
        r_id: string;
        id: number;
    } | null>(null);
    const [destinationRoom, setDestinationRoom] = useState<{
        b_id: number;
        r_id: string;
        id: number;
    } | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const storedData = await AsyncStorage.getItem('rooms_data');
                if (storedData) {
                    setRoomsData(JSON.parse(storedData));
                } else {
                    setRoomsData({ rooms: rooms.rooms });
                    await AsyncStorage.setItem(
                        'rooms_data',
                        JSON.stringify({ rooms: rooms.rooms })
                    );
                }
            } catch (error) {
                console.error(error);
                setRoomsData({ rooms: rooms.rooms });
            } finally {
                setIsDataLoaded(true);
            }
        };

        loadData();
    }, []);

    const handleNavigation = (bar: BarType, room?: SearchResultProps) => {
        setActiveBar(bar);
        if (room) {
            setSelectedRoom(room);
        }
        setIsRouteMode(false);
    };

    const handleSelectRoomForRoute = (room: SearchResultProps) => {
        if (isSelectingDeparture) {
            setDepartureRoom({ b_id: room.b_id, r_id: room.r_id, id: room.id });
            setIsSelectingDeparture(false);
            setActiveBar('route');
        } else {
            setDestinationRoom({ b_id: room.b_id, r_id: room.r_id, id: room.id });
            setActiveBar('route');
        }
    };

    const handleSwitchEndpoints = () => {
        // Меняем местами departureRoom и destinationRoom
        setDepartureRoom(destinationRoom);
        setDestinationRoom(departureRoom);
    };

    const handleClearDeparture = () => {
        setDepartureRoom(null); // Очищаем "Откуда"
    };

    const handleClearDestination = () => {
        setDestinationRoom(null); // Очищаем "Куда"
    };

    const handleAddToRoute = (room: { b_id: number; r_id: string; id: number }) => {
        setDestinationRoom({ b_id: room.b_id, r_id: room.r_id, id: room.id });
        setActiveBar('route');
    };

    const [isSelectingDeparture, setIsSelectingDeparture] = useState(false);

    const handleBackPress = useCallback(() => {
        if (activeBar !== 'main') {
            setActiveBar('main');
            return true;
        }
        return false;
    }, [activeBar]);

    React.useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
            return () => backHandler.remove();
        }
    }, [activeBar, handleBackPress]);

    return (
        <View style={styles.mainScreen}>
            <MainPage />
            <SafeAreaView style={styles.bar}>
                {activeBar === 'favorite' && (
                    <FavoritesBar onRoomPress={(room) => handleNavigation('information', room)} />
                )}
                {activeBar === 'main' && <NavigationBar onNavigation={handleNavigation} />}
                {activeBar === 'search' && (
                    <SearchBar
                        onRoomPress={(room) => handleNavigation('information', room)}
                        isRouteMode={isRouteMode}
                        onSelectRoomForRoute={handleSelectRoomForRoute}
                    />
                )}
                {activeBar === 'route' && (
                    <RouteBar
                        onBack={() => handleNavigation('main')}
                        onSelectDeparture={() => {
                            setIsRouteMode(true);
                            setIsSelectingDeparture(true);
                            setActiveBar('search');
                        }}
                        onSelectDestination={() => {
                            setIsRouteMode(true);
                            setIsSelectingDeparture(false);
                            setActiveBar('search');
                        }}
                        departureRoom={departureRoom}
                        destinationRoom={destinationRoom}
                        onSwitchEndpoints={handleSwitchEndpoints}
                        onClearDeparture={handleClearDeparture}
                        onClearDestination={handleClearDestination}
                        onBuildRoute={handleBuildRoute}
                    />
                )}
                {activeBar === 'information' && selectedRoom && isDataLoaded && (
                    <InformationBar
                        roomData={selectedRoom}
                        setRoomsData={setRoomsData}
                        onAddToRoute={handleAddToRoute}
                    />
                )}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainScreen: {
        height: '100%',
    },
    bar: {
        pointerEvents: 'box-none',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
    },
});

export default MainScreen;
