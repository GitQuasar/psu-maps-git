import React from 'react';
import { ScrollView } from 'react-native';

import Button from './components/atoms/buttons/button';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <ScrollView>
      <Button title="Button!" />
    </ScrollView>
  );
}

function DetailsScreen() {
  return (
    <ScrollView>
      <Button title="Button!" />
      <Button title="Button!" />
      <Button title="Button!" />
      <Button title="Button!" />
    </ScrollView>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: '#007AFF' },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Overview',
      },
    },
    Details: {
      screen: DetailsScreen,
      options: {
        title: 'Details',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
