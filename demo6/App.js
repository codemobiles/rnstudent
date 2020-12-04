import React from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Text>Counter</Text>
      <Button title="ADD"/>
      <View style={{height: 10}}/>
      <Button title="DEL"/>
    </View>
  )
}
