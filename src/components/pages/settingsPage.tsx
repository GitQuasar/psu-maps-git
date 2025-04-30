import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../atoms/globalStyle';
import CloseButton from '../molecules/closeButton';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((previousState) => !previousState);
    };

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.closeButton}>
                <CloseButton onPress={goBack} />
            </View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.headerTitle, globalStyles.text]}>Настройки</Text>
                </View>
                <View style={styles.themeSection}>
                    <Text style={[styles.sectionTitle, globalStyles.text]}>Сменить тему</Text>
                    <Switch
                        trackColor={{ false: '#564C55', true: '#000000' }}
                        thumbColor={isDarkMode ? '#f5dd4b' : '#f5dd4b'}
                        onValueChange={toggleDarkMode}
                        value={isDarkMode}
                    />
                </View>
                <View style={styles.infoSection}>
                    <Text style={[styles.sectionTitle, globalStyles.text]}>
                        Информация о приложении
                    </Text>
                    <Text style={[styles.infoText, globalStyles.text]}>
                        Версия приложения: v1.0
                    </Text>
                    <Text style={[styles.infoText, globalStyles.text]}>
                        Команда разработки: Yo-project
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: '#932D30',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
        height: 50,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        color: '#ffffff',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    themeSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 8,
        backgroundColor: '#D9D9D9',
        borderRadius: 18,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    infoSection: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 8,
        backgroundColor: '#D9D9D9',
        borderRadius: 18,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
