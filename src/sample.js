import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Sample extends Component {
    render() {
        return (<View >
            <View style={{ height: 40, width: '100%', backgroundColor: 'red' }}></View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text></Text>
            </View>
        </View>)
    }
}