import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

export default function App() {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get(
      'https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods',
    );
    setDataArray(result.data.youtubes);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <Box color="red"/>
        <Spacer />
        <Box color="yellow"/>
      </View>

      <View style={{flex: 1}}>
        {dataArray.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))}
      </View>

      <View style={{flexDirection: 'row'}}>
        <Box  color="blue"/>
        <Spacer />
        <Box  color="green"/>
      </View>
    </View>
  );
}

const Spacer = () => {
  return <View style={{flex: 1}} />;
};

const Box = (props) => {
  return <View style={{height: 50, width: 50, backgroundColor: props.color}} />;
};
