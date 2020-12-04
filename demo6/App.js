import React from 'react'
import { View, Text, Button } from 'react-native'
import {useSelector, useDispatch} from "react-redux"
import * as appActions from "./src/actions/app.action"
export default function App() {

  const appReducer = useSelector(state => state.appReducer)
  const dispatch = useDispatch()

  return (
    <View style={{flex: 1}}>
      <Text>{appReducer.counter}</Text>
      <Button onPress={()=>dispatch(appActions.add(1))} title="ADD"/>
      <View style={{height: 10}}/>
      <Button onPress={()=>dispatch(appActions.del(1))} title="DEL"/>
    </View>
  )
}
