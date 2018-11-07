import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import styles from '../styles/ColorsStyle';

export default class ColorsView extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        return (
            <View style={styles.container}>
                <Text>CC Colors</Text>
            </View>
        );
    }
}