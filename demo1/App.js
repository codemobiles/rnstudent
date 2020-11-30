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
      <Button title="Hey 1" color="#f00" />
      <Button title="Hey 2" color="#ff0" />
      <Button title="Hey 3" color="#00f" />
    </View>
  );
}
