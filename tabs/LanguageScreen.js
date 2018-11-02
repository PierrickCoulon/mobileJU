import React from 'react';
import { Text, View, Image } from 'react-native';
import RNLanguages from 'react-native-languages';
import I18n from 'react-native-i18n';


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
            }}>Language : {RNLanguages.language}</Text>
            <Text style={{
                paddingTop: 30,
                fontSize: 30
            }}>{I18n.t('greeting')}</Text>

        </View>
    }
}