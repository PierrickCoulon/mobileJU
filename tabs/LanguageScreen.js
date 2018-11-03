import React from 'react';
import { Text, View, Image } from 'react-native';
import RNLanguages from 'react-native-languages';
import I18n from 'react-native-i18n';
import styles from '../styles/LanguageStyle';

export default class LanguageScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Language',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/language.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)

        I18n.fallbacks = true;
        I18n.translations = {
            en: {
                greeting: 'Hi !',
            },
            fr: {
                greeting: 'Bonjour!',
            },
            sv: {
                greeting: 'Hallå !',
            },
            de: {
                greeting: 'Hallo !',
            },
            es: {
                greeting: 'Hola !',
            },
            ze: {
                greeting: '你好',
            }
        };
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.text}>Language : {RNLanguages.language}</Text>
            <Text style={styles.text}>{I18n.t('greeting')}</Text>

        </View>
    }
}