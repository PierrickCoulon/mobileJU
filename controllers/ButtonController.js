import React from 'react';
import { Image, View } from 'react-native';
import styles from '../styles/ButtonStyle';
import ButtonView from '../views/ButtonView';

export default class ButtonController extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Button',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/button.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ButtonView numberInit={4}/>
                <ButtonView numberInit={8}/>
                <ButtonView numberInit={2}/>
            </View>
        );
    }
}