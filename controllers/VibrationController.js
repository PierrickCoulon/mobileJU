import React from 'react';
import {Vibration, Image } from 'react-native';
import styles from '../styles/VibrationStyle';
import VibrationView from '../views/VibrationView';

export default class VibrationController extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Vibration',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/vibration.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.load()
        this.props.navigation.addListener('willFocus', this.load)
    }
    load = () => {
        Vibration.vibrate(500);
    }


    render() {
        return (
            <VibrationView />
        );
    }
}