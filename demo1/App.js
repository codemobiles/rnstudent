import React from 'react';
import {View, Text, Button} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Button title="Hey 1" />
      <Button title="Hey 2" />
      <Button title="Hey 3" />
    </View>
  );
}
