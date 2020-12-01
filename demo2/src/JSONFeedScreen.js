import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

export default function JSONFeedScreen() {
  const [dataArray, setDataArray] = React.useState([]);

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const regUsername = 'admin';
      const regPassword = 'password';
      const data = `username=${regUsername}&password=${regPassword}&type=foods`;
      const url = 'https://codemobiles.com/adhoc/youtubes/index_new.php';
      const result = await axios.post(url, data);
      setDataArray(result.data.youtubes);
    } catch (e) {
      alert('Fetching failed');
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      <FlatList
        data={dataArray}
        renderItem={({item, index}) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
