import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import DeviceBattery from 'react-native-device-battery';


export default class BatteryScreen extends React.Component {

    levelBattery = 0
    isChargingBattery = false

    static navigationOptions = {
        tabBarLabel: 'Battery',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/battery.png')}
                style={{ width: 22, height: 22, tintColor: 'black' }}>
            </Image>
        )
    }

    constructor(props) {
        super(props)

        var onBatteryStateChanged = (state) => {
            this.levelBattery = state.level
            this.isChargingBattery = state.charging
            this.forceUpdate()
          };

          DeviceBattery.addListener(onBatteryStateChanged);
    }



    componentWillMount() {
        DeviceBattery.getBatteryLevel().then(level => {
            this.levelBattery = level
            DeviceBattery.isCharging().then(isCharging => {
                this.isChargingBattery = isCharging
                this.forceUpdate()
            });
        });
    }

    render() {

        var levelString = Math.trunc(this.levelBattery * 100) + '%'
        var chargingString = ""
        if (this.isChargingBattery == true) {
            chargingString = "ON"
        } else {
            chargingString = "OFF"
        }
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <Text style={{
                fontSize: 30
            }}>Battery Level : {levelString}</Text>
            <Text style={{
                fontSize: 30
            }}>Is charging : {chargingString}</Text>

        </View>
    }
}