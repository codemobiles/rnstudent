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

import {Spacer} from './CMWidgets';

export default function RegisterScreen() {
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
          backgroundColor: '#FFF3',
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 5,
          paddingBottom: 10,
        }}>
        {/* Username  */}
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            alignItems: 'center',
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

          <Spacer size={8} />

          <TextInput
            keyboardType="email-address"
            placeholder="Username"
            style={{
              borderColor: '#0003',
              borderWidth: 1,
              flex: 1,
              borderRadius: 10,
              paddingLeft: 8,
            }}
          />
        </View>
        {/* Password  */}
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {/* Icon */}
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: 'yellow',
              borderRadius: 15,
            }}
          />

          <Spacer size={8} />

          <TextInput
            secureTextEntry
            placeholder="Password"
            style={{
              borderColor: '#0003',
              borderWidth: 1,
              flex: 1,
              borderRadius: 10,
              paddingLeft: 8,
            }}
          />
        </View>
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
