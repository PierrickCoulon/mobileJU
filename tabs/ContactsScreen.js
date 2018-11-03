import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import Contacts from 'react-native-contacts';
import styles from '../styles/ContactsStyle';

export default class ContactsScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/contacts.png')}
                style={styles.imageNav}>
            </Image>
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            contactList: new Array,
        }
    }


    componentWillMount() {
        Contacts.getAll((err, contacts) => {
            if (err) throw err;
            this.setState({ contactList: contacts });
        })
    }

    render() {
        var contactNameArray = new Array();
        var i = 0;
        this.state.contactList.forEach(elem => {
            contactNameArray[i] = <Text style={styles.text}>{elem.givenName}</Text>
            i = i + 1;
        })

        return (<ScrollView contentContainerStyle={styles.container}>
            {contactNameArray}
        </ScrollView>
        );
    }
}

