import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/SensorStyle';

const Value = ({ name, value }) => (
    <View style={styles.valueContainer}>
      <Text style={styles.valueName}>{name}:</Text>
      <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
    </View>
  );


export default class SensorView extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headline}>Accelerometer values</Text>
                <Value name="x" value={this.props.x} />
                <Value name="y" value={this.props.y} />
                <Value name="z" value={this.props.z} />
            </View>
        );
    }
}



