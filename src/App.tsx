import React from 'react';

import NavigationBar from './components/organisms/navigationBar';

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavigationBar />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E6E8E5',
    justifyContent: 'flex-end',
  },
});
