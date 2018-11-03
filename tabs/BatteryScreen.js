import React from 'react';
import { Text, View, Image } from 'react-native';
import DeviceBattery from 'react-native-device-battery';
import styles from '../styles/BatteryStyle';

export default class BatteryScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Battery',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/battery.png')}
                style={styles.imageNav}>
            </Image>
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            level: 0,
            charging: false
        }

        var onBatteryStateChanged = (state) => {

            this.setState({ level: state.level })
            this.setState({ charging: state.charging })
        };

        DeviceBattery.addListener(onBatteryStateChanged);
    }


    componentWillMount() {
        DeviceBattery.getBatteryLevel().then(level => {
            this.setState({ level: level })

            DeviceBattery.isCharging().then(isCharging => {
                this.setState({ charging: isCharging })
            });
        });
    }

    render() {
        var levelString = Math.trunc(this.state.level * 100) + '%'
        var chargingString = ""
        if (this.state.charging == true) {
            chargingString = "ON"
        } else {
            chargingString = "OFF"
        }
        // return (
        //     <BatteryView />
        // );
        return <View style={styles.container}>
            <Text style={styles.text}>Battery Level : {levelString}</Text>
            <Text style={styles.text}>Is charging : {chargingString}</Text>

        </View>
    }
}