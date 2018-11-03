import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/BatteryStyle';


export default class BatteryView extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Battery Level : {this.props.levelString}</Text>
                <Text style={styles.text}>Is charging : {this.props.chargingString}</Text>
            </View>
        );
    }
}



