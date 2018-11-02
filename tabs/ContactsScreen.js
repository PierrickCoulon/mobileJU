import React from 'react';
import { Text, TextInput, View, Button, Image, StyleSheet, ListView, ScrollView } from 'react-native';
import Contacts from 'react-native-contacts';


export default class ContactsScreen extends React.Component {

    contactList = new Array

    static navigationOptions = {
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/location.png')}
                style={{ width: 22, height: 22, tintColor: 'black' }}>
            </Image>
        )
    }

    constructor(props) {
        super(props)
    }


    componentWillMount() {
        Contacts.getAll((err, contacts) => {

            if (err) throw err;
            this.contactList = contacts
            this.forceUpdate()
        })
    }

    render() {

        var contactNameArray = new Array();
        var i = 0;
        this.contactList.forEach(elem => {
            contactNameArray[i] = <Text style={{ fontSize: 25 }}>{elem.givenName}</Text>
            i = i + 1;
        })


        return (<ScrollView contentContainerStyle={
            {
                marginTop: 20,
                marginBottom: 20,
                paddingBottom: 50,
                paddingTop: 50,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            {contactNameArray}
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        margin: 10

    },

    TextStyle: {
        fontSize: 25,
        textAlign: 'center'
    }

});