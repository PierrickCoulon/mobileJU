import React from 'react';
import { Text, Image } from 'react-native';
import Contacts from 'react-native-contacts';
import styles from '../styles/ContactsStyle';
import ContactsView from '../views/ContactsView';

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

            var contactNameArray = new Array();
            var i = 0;
            contacts.forEach(elem => {
                contactNameArray[i] = <Text style={styles.text}>{elem.givenName}</Text>
                i = i + 1;
            })
            this.setState({ contactList: contactNameArray });

        })
    }

    render() {
        return (
            <ContactsView contactList={this.state.contactList} />
        );
    }
}

