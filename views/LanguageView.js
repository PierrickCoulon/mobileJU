import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/LanguageStyle';


export default class LanguageView extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Language : {this.props.lang}</Text>
                <Text style={styles.text}>{this.props.I18n}</Text>
            </View>
        );
    }
}



