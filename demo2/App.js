import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {
  const [forceLogin, setForceLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(async () => {
    const token = await AsyncStorage.getItem('TOKEN');
    if (token == null) {
      setForceLogin(true);
    }
  }, []);

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <AppNavigator forceLogin />
      </View>
    </NavigationContainer>
  );
}
