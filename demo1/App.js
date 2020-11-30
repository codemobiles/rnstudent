import React from 'react';
import {View, Text, Button} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
      }}>
      <View style={{backgroundColor: 'red', flex: 1}} />
      <View style={{backgroundColor: 'yellow', flex: 1}} />
      <View style={{backgroundColor: 'blue', flex: 1}} />
    </View>
  );
}
