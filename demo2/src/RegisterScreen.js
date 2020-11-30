import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import {CMEntry, Spacer} from './CMWidgets';

export default function RegisterScreen() {
  debugValue = '1';

  // JSX
  return (
    <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
      {/* Banner */}
      <Image
        style={{width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
      />

      {/* Debug */}
      <Text> {debugValue}</Text>

      {/* Authen section */}
      <View
        style={{
          backgroundColor: '#FFF3',
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 5,
          paddingBottom: 10,
        }}>
        {/* Username  */}
        <CMEntry
          iconBackgroundColor="red"
          hint="Username"
          type="email-address"
        />

        {/* Password  */}
        <CMEntry iconBackgroundColor="yellow" hint="Password" isSecured />

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => {
            alert('Login');
          }}>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              height: 50,
              backgroundColor: '#0F0',
              textAlignVertical: 'center',
              color: '#000b',
              fontSize: 20,
              borderRadius: 10,
              marginTop: 32,
              borderWidth: 1,
              borderColor: '#0003',
              width: null,
              textAlign: 'center',
            }}>
            Register
          </Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity onPress={() => alert('Register')}>
          <Text
            style={{
              marginLeft: 10,
              marginRight: 10,
              height: 50,
              textAlignVertical: 'center',
              color: '#0007',
              fontSize: 20,
              borderRadius: 10,
              marginTop: 10,
              borderWidth: 1,
              borderColor: '#0003',
              width: null,
              textAlign: 'center',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
