import React from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/ButtonStyle';

export default class ButtonView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nb: this.props.numberInit
        }

        this.funcIncrement = this.funcIncrement.bind(this)
    }

    funcIncrement() {
        this.setState({nb: this.state.nb + 1})
    }

    render() {
        return (
            <View style={styles.containerButton}>
                <Button
                    title={"Number : " + this.state.nb.toString()}
                    onPress={this.funcIncrement}/>
            </View>
        )
    }
}