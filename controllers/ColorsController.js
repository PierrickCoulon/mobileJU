import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/ColorsStyle';
// import ColorsView from '../views/ColorsView';

export default class ColorsController extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Colors',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/colors.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)

        this.state = {
            names: [
                {
                    name: 'Blue',
                    id: 0,
                },
                {
                    name: 'Red',
                    id: 1,
                },
                {
                    name: 'Yellow',
                    id: 2,
                },
                {
                    name: 'Green',
                    id: 3,
                }
            ],
            text: 'Click here to add new color'
        };


        this.addColor = this.addColor.bind(this)
    }


    removeColor(e) {
        let filteredArray = this.state.names.filter(item => item.id !== e)
        this.setState({ names: filteredArray });
    }


    addColor() {
        var newTab = {
            name: this.state.text,
            id: this.state.names.length
        }
       this.setState({names: this.state.names.concat(newTab)})
       this.setState({text: 'Click here to add new color'})
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            style={Object.assign({ backgroundColor: item.name.toLowerCase() }, styles.containerList)}
                            onPress={() => this.removeColor(item.id)}>
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
                <TextInput
                    style={{height: 50, borderColor: 'black', borderWidth: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', textAlign: 'center', marginTop: 20}}
                    onBlur={this.addColor}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                />
            </View>
        );
    }
}