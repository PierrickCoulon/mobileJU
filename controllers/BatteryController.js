import React from 'react';
import { Image, View, Text } from 'react-native';
import DeviceBattery from 'react-native-device-battery';
import styles from '../styles/BatteryStyle';
import BatteryView from '../views/BatteryView';


export default class BatteryController extends React.Component {

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
            levelString: "",
            chargingString: ""
        }

        var onBatteryStateChanged = (state) => {
            this.setState({ levelString: Math.trunc(state.level * 100) + '%' })
            if (state.charging == true) {
                this.setState({ chargingString: "ON" })
            } else {
                this.setState({ chargingString: "OFF" })
            }
        };

        DeviceBattery.addListener(onBatteryStateChanged);
    }


    componentWillMount() {
        DeviceBattery.getBatteryLevel().then(level => {
            this.setState({ levelString: Math.trunc(level * 100) + '%' })

            DeviceBattery.isCharging().then(isCharging => {
                if (isCharging == true) {
                    this.setState({ chargingString: "ON" })
                } else {
                    this.setState({ chargingString: "OFF" })
                }
            });
        });
    }

    render() {
        return (
            <BatteryView levelString={this.state.levelString} chargingString={this.state.chargingString} />
        )
    }
}