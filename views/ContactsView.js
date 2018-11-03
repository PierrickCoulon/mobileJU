import React from 'react';
import { ScrollView } from 'react-native';
import styles from '../styles/ContactsStyle';


export default class ContactsView extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {this.props.contactList}
            </ScrollView>
        );
    }
}



