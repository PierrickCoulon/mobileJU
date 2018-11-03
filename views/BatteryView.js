import React from 'react';
import { Text, View } from 'react-native';
import BatteryScreen from '../tabs/BatteryScreen'

const BatteryView = () => (
    <View style={
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }>
        <Text style={{
            fontSize: 30
        }}>Battery Level : { levelString}</Text>
        <Text style={{
            fontSize: 30
        }}>Is charging : {chargingString}</Text>

    </View>
);

export default BatteryView;



