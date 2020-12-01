import React from 'react';
import {View, Text} from 'react-native';

export default function JSONFeedScreen() {
  const dataArray = ['Angular', 'RaspberryPi', 'React'];

  return (
    <View style={{flex: 1}}>
      {dataArray.map((item, index) => (
        <Text key={String(index)}>{item} </Text>
      ))}
    </View>
  );
}
