import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import axios from "axios"

export default function App() {

  const [dataArray, setDataArray] = useState([])
  useEffect(()=>{
    loadData()
  },[])

  const loadData = async ()=>{
    const result = await axios.get("https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods")
    setDataArray(result.data.youtubes)
  }


  return (
    <View style={{flex:1}}>
      {dataArray.map(item=>(<Text key={item.id}>{item.title}</Text>))} 
    </View>
  )
}
