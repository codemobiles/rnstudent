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

const Spacer = (props) => {
  return <View style={{width: props.size}} />;
};

const CMEntry = () => {
  return (
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
  );
};

export {Spacer, CMEntry};
