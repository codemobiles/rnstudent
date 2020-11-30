import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

export default function HomeScreen() {
  // JSX
  return (
    <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
      {/* Banner */}
      <Image
        style={{width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
      />

      {/* Authen section */}
      <View
        style={{
          height: 100,
          backgroundColor: '#FFF',
          marginLeft: 30,
          marginRight: 30,
        }}></View>
    </ImageBackground>
  );
}
