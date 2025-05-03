import React, { useState } from 'react';

import MainPage from '../pages/mainPage';
import NavigationBar from '../organisms/navigationBar';
import RouteBar from '../organisms/routeBar';
import SearchBar from '../organisms/searchBar';
import FavoritesBar from '../organisms/favoritesBar';

import { StyleSheet, View, Platform, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type BarType = 'main' | 'favorite' | 'search' | 'route';

const MainScreen = () => {
    const [activeBar, setActiveBar] = useState<BarType>('main');

    const handleNavigation = (bar: BarType) => {
        setActiveBar(bar);
    };

    const handleBackPress = () => {
        if (activeBar !== 'main') {
            setActiveBar('main');
            return true;
        }
        return false;
    };

    React.useEffect(() => {
        if (Platform.OS === 'android') {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
            return () => backHandler.remove();
        }
    }, [activeBar]);

    return (
        <View style={styles.mainScreen}>
            <MainPage />
            <SafeAreaView style={styles.bar}>
                {activeBar === 'favorite' && <FavoritesBar />}
                {activeBar === 'main' && <NavigationBar onNavigation={handleNavigation} />}
                {activeBar === 'search' && <SearchBar />}
                {activeBar === 'route' && (
                    <RouteBar departurePoint={'Откуда'} destinationPoint={'Куда'} />
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
