import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/VibrationStyle';

export default class VibrationView extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/vibration.png')}
                    style={styles.image}>
                </Image>
                <Text style={styles.text}>Vib Vib ! </Text>
            </View>
        );
    }
}



