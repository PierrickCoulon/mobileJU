import React from 'react';
import SensorView from '../views/SensorView';
import styles from '../styles/SensorStyle';
import { Image } from "react-native";
import { Accelerometer } from "react-native-sensors";

export default class SensorController extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Sensor',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/gyroscope.png')}
                style={styles.imageNav}>
            </Image>
        )
    }

    constructor(props) {
        super(props)

        new Accelerometer({
            updateInterval: 100
        })
            .then(observable => {
                observable.subscribe(({ x, y, z }) => this.setState({ x, y, z }));
            })
            .catch(error => {
                console.log("The sensor is not available");
            });

        this.state = { x: 0, y: 0, z: 0 };
    }

    componentDidMount() {
    }

    render() {
        return (
            <SensorView x={this.state.x} y={this.state.y} z={this.state.z} />
        );
    }
}