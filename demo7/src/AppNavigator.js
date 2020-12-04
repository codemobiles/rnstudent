import React, {Component} from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';
const Stack = createStackNavigator();

const RootStack = ()=>{
  return (<Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Detail" component={DetailScreen}/>
  </Stack.Navigator>)
}


export default RootStack