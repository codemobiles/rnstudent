import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Button,
} from 'react-native';
import {Spacer} from './CMWidgets';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default function HomeScreen(props) {
  useEffect(() => {
    setNavigationOption();
  }, []);

  setNavigationOption = () => {
    props.navigation.setOptions({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#999CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => alert('www.codemobiles.com')}
          style={{padding: 10}}>
          <Icon
            name="address-card"
            size={20}
            color="#fff"
            style={{
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
      ),
    });
  };

  const [account, setAccount] = useState({username: '', password: ''});

  onLogin = async () => {
    //props.navigation.navigate('Success');
    const regAccJSON = await AsyncStorage.getItem('ACCOUNT');
    if (regAccJSON) {
      const regAcc = JSON.parse(regAccJSON);

      if (
        regAcc.username == account.username &&
        regAcc.password == account.password
      ) {
        await AsyncStorage.setItem('TOKEN', account.username);
        props.navigation.navigate('Success');
      } else {
        alert('Login failed');
      }
    }
  };

  // JSX
  return (
    <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
      {/* Banner */}
      <Image
        style={{width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
      />
      <Text>{JSON.stringify(account)}</Text>

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
            autoCapitalize="none"
            onChangeText={(text) => setAccount({...account, username: text})}
            keyboardType="email-address"
            placeholder="Username"
            style={{
              borderColor: '#0003',
              borderWidth: 1,
              flex: 1,
              height: Platform.OS == 'ios' ? 40 : 30,
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
            onChangeText={(text) => setAccount({...account, password: text})}
            secureTextEntry
            placeholder="Password"
            style={{
              borderColor: '#0003',
              borderWidth: 1,
              flex: 1,
              height: Platform.OS == 'ios' ? 40 : 30,
              borderRadius: 10,
              paddingLeft: 8,
            }}
          />
        </View>
        {/* Login Button */}
        <TouchableOpacity onPress={onLogin}>
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
            Login
          </Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
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
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
