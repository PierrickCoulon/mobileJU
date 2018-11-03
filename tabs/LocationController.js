import React from 'react';
import { Dimensions, Image } from 'react-native';
import styles from '../styles/LocationStyle';
import LocationView from '../views/LocationView';

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATTITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO

export default class LocationController extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Location',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/location.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)

        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            }
        }
    }

    watchID = null
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATTITUDE_DELTA,
                longitudeDelta: LONGTITUDE_DELTA
            }

            this.setState({ initialPosition: initialRegion })
            this.setState({ markerPosition: initialRegion })
        },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var lastRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATTITUDE_DELTA,
                longitudeDelta: LONGTITUDE_DELTA
            }

            this.setState({ initialPosition: lastRegion })
            this.setState({ markerPosition: lastRegion })
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render() {
        return (
            <LocationView reg={this.state.initialPosition} coord={this.state.markerPosition} />
        );
    }

}
