import React from 'react';
import { Text, View, Image } from 'react-native';


export default class LanguageScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Language',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/language.png')}
                style={{ width: 22, height: 22, tintColor: 'black' }}>
            </Image>
        )
    }
    constructor(props) {
        super(props)
    }



    render() {
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <Text style={{
                paddingTop: 30,
                fontSize: 30
            }}>Lang</Text>
        </View>
    }
}