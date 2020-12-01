import React from 'react';
import {View, Text, FlatList} from 'react-native';
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
    <View style={{flex: 1}}>
      <FlatList
        data={dataArray}
        renderItem={({item, index}) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
