import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
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
        <Box color="red" />
        <Spacer />
        <Box color="yellow" />
      </View>

      <ContentV2 dataArray={dataArray} />

      <View style={{flexDirection: 'row'}}>
        <Box color="blue" />
        <Spacer />
        <Box color="green" />
      </View>
    </View>
  );
}

const ContentV1 = ({dataArray}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40}}>V1</Text>
      {dataArray.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
};

const ContentV2 = ({dataArray}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40}}>V2</Text>
      <FlatList
        data={dataArray}
        renderItem={({item, index}) => <Text>{item.title}</Text>}
        keyExtractor={item=>item.id}
      />
    </View>
  );
};

const Spacer = () => {
  return <View style={{flex: 1}} />;
};

const Box = (props) => {
  return <View style={{height: 50, width: 50, backgroundColor: props.color}} />;
};
