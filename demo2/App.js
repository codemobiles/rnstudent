import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
import AsyncStorage from '@react-native-community/async-storage';


export default function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);

  

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
