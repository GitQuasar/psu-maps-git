import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './components/templates/mainScreen';
import SettingsScreen from './components/pages/settingsPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    Main: undefined;
    Settings: undefined;
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
