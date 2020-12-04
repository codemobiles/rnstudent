import React from 'react'
import { View, Text } from 'react-native'

export default function DetailScreen(props) {
    return (
        <View>
            <Text>{props.route.params.title}</Text>
        </View>
    )
}
