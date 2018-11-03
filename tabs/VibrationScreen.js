import React from 'react';
import { Text, View, Vibration, Image } from 'react-native';
import styles from '../styles/VibrationStyle';

export default class VibrationScreen extends React.Component {
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
        return <View style={styles.container}>
            <Image source={require('../images/vibration.png')}
                style={styles.image}>
            </Image>
            <Text style={styles.text}>Vib Vib ! </Text>
        </View>
    }
}