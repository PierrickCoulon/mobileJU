import React from 'react';
import { Image } from 'react-native';
import I18n from 'react-native-i18n';
import styles from '../styles/LanguageStyle';
import LanguageView from '../views/LanguageView';
import RNLanguages from 'react-native-languages';


export default class LanguageController extends React.Component {
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
        return (
            <LanguageView I18n={I18n.t('greeting')} lang={RNLanguages.language}/>
        )
    }
}