import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <AppNavigator forceLogin={false} />
      </View>
    </NavigationContainer>
  );
}
