import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

export default function JSONFeedScreen() {
  const dataArray = ['Angular', 'RaspberryPi', 'React'];

  React.useEffect(() => {
    loadData();
  }, []);

  loadData = async () => {
    const regUsername = 'admin';
    const regPassword = 'password';
    const data = `username=${regUsername}&password=${regPassword}&type=foods`;
    const url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
    const result = await axios.post(url, data);
  };

  return (
    <View style={{flex: 1}}>
      {dataArray.map((item, index) => (
        <Text key={String(index)}>
          {index}. {item}
        </Text>
      ))}
    </View>
  );
}
