import React, {useState} from 'react';
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
  debugValue = 1;
  const [count, setCount] = useState(0);
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });

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
      <Text>#Debug : {JSON.stringify(account)}</Text>

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
          onChanged={(text) => setAccount({...account, username: text})}
          iconName="user"
          hint="Username"
          type="email-address"
        />

        {/* Password  */}
        <CMEntry
          iconName="lock"
          hint="Password"
          isSecured
          onChanged={(text) => setAccount({...account, password: text})}
        />

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
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
            console.log(count);
          }}>
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
