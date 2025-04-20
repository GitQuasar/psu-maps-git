import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import CloseButton from '../molecules/closeButton';
import SettingsButton from '../molecules/settingsButton';

const SettingsScreen = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((previousState) => !previousState);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <View style={styles.settingsButton}>
                    <SettingsButton />
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Настройки</Text>
                </View>
                <View style={styles.themeSection}>
                    <Text style={styles.sectionTitle}>Сменить тему</Text>
                    <Switch
                        trackColor={{ false: '#564C55', true: '#000000' }}
                        thumbColor={isDarkMode ? '#f5dd4b' : '#f5dd4b'}
                        onValueChange={toggleDarkMode}
                        value={isDarkMode}
                    />
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>Информация о приложении</Text>
                    <Text style={styles.infoText}>Версия приложения: v1.0</Text>
                    <Text style={styles.infoText}>Команда разработки: Yo-project</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#932D30',
        padding: 20,
        position: 'relative',
    },
    settingsButton: {
        position: 'absolute',
        top: 15,
        left: 15,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    headerTitle: {
        fontSize: 20,
        color: '#ffffff',
    },
    themeSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 8,
        backgroundColor: '#D9D9D9',
        borderRadius: 18,
    },
    infoSection: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 8,
        backgroundColor: '#D9D9D9',
        borderRadius: 18,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        padding: 2,
        marginLeft: '5%',
    },
    infoText: {
        color: '#000000',
        marginLeft: '5%',
        padding: 2,
    },
});

export default SettingsScreen;
