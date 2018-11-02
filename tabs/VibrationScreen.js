import React from 'react';
import { Text, View, Vibration, Image } from 'react-native';


export default class VibrationScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Vibration',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/vibration.png')}
                style={{ width: 22, height: 22, tintColor: 'black' }}>
            </Image>
        )
    }
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.load()
        this.props.navigation.addListener('willFocus', this.load)
    }
    load = () => {
        Vibration.vibrate(500);
    }


    render() {
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
        <Image source={require('../images/vibration.png')}
                style={{ width: 150, height: 150, tintColor: 'black' }}>
            </Image>
            <Text style={{
                paddingTop: 30,
                fontSize: 30
            }}>Vib Vib ! </Text>
        </View>
    }
}