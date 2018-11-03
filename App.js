import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';
import LocationScreen from './tabs/LocationScreen';
import BatteryScreen from './tabs/BatteryScreen';
import ContactsScreen from './tabs/ContactsScreen';
import VibrationScreen from './tabs/VibrationScreen';
import LanguageScreen from './tabs/LanguageScreen';

console.disableYellowBox = true

var MainScreenNavigator = TabNavigator({
  Tab1: { screen: BatteryScreen},
  Tab2: { screen: ContactsScreen},
  Tab3: { screen : LocationScreen},
  Tab4: { screen : VibrationScreen},
  Tab5: { screen : LanguageScreen},
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'lightblue',
    labelStyle: {
      fontSize: 16,
      padding: 0,
    }
  }
});

MainScreenNavigator.navigationOptions = {
  title: "Menu"
}

export default MainScreenNavigator;

