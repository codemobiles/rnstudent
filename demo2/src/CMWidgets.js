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
import Icon from 'react-native-vector-icons/FontAwesome';

const Spacer = (props) => {
  return <View style={{width: props.size}} />;
};

const CMEntry = (props) => {
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
      <Icon name={props.iconName} size={30} />

      <Spacer size={8} />

      <TextInput
        autoCapitalize="none"
        onChangeText={props.onChanged}
        keyboardType={props.type}
        secureTextEntry={props.isSecured}
        placeholder={props.hint}
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
