import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/DateTimeStyle';
import Moment from 'moment'

export default class DateTimeController extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'DateTime',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/dateTime.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)

        this.state = {
            curTime: new Date().toLocaleString()
        }
    }

    componentDidMount() {

        let moment = require("moment");
        if ("default" in moment) {
            moment = moment["default"];
        }
        setInterval(() => {
            var curTime = Moment(new Date()).format('YYYY-MM-DD h:mm:ss')
            this.setState({
                curTime: curTime
            })
        }, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Current Time :</Text>
                <Text style={styles.text}> {this.state.curTime}</Text>
            </View>
        );
    }
}