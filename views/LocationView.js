import React from 'react';
import {View} from 'react-native';
import styles from '../styles/LocationStyle';
import MapView from 'react-native-maps';

export default class LocationView extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map} region={this.props.reg}>

                    <MapView.Marker coordinate={this.props.coord}>
                        <View style={styles.radius}>
                            <View style={styles.marker}></View>
                        </View>
                    </MapView.Marker>
                </MapView>
            </View>
        );
    }
}



