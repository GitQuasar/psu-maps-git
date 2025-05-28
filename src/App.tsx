// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import MainScreen from './components/templates/mainScreen';
// import SettingsScreen from './components/pages/settingsPage';

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export type RootStackParamList = {
//     Main: undefined;
//     Settings: undefined;
// };

import { FlatList, StyleSheet, View } from 'react-native';
import ImageDemo from './components/organisms/pngViewer';
import { AStar } from './utils/aStar';

const dimensions = {
    width: 350,
    height: 350 / (8192 / 5532),
};

export default function App() {
    const aStar = new AStar();
    const path = aStar.findPath('v1', 'v1833');
    let floorsPaths: string[][] | undefined = undefined;
    if (path) {
        floorsPaths = aStar.splitByFloorChanges(path);
        console.log(floorsPaths);
    }
    console.log(path);
    return (
        // <NavigationContainer>
        //     <Stack.Navigator screenOptions={{ headerShown: false }}>
        //         <Stack.Screen name="Main" component={MainScreen} />
        //         <Stack.Screen name="Settings" component={SettingsScreen} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <View style={styles.container}>
            {floorsPaths && (
                <FlatList
                    data={floorsPaths}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <ImageDemo dimensions={dimensions} nodeIdArray={item} />
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    item: {
        width: dimensions.width,
        height: dimensions.height,
        marginVertical: 10,
        backgroundColor: 'green',
    },
});
