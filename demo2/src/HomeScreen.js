import React from 'react';
import {View, Text, ImageBackground, Image, TextInput} from 'react-native';

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
          backgroundColor: '#FFF3',
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 5,
        }}>
        {/* Username  */}
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            flexDirection: 'row',
          }}>
          {/* Icon */}
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: 'red',
              borderRadius: 15,
            }}
          />

          <TextInput placeholder="Username" />
        </View>
      </View>
    </ImageBackground>
  );
}
