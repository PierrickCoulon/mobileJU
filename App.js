import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';

import LocationController from './controllers/LocationController';
import BatteryController from './controllers/BatteryController';
import ContactsController from './controllers/ContactsController';
import VibrationController from './controllers/VibrationController';
import LanguageController from './controllers/LanguageController';
// import LocationController from './controllers/LocationController';
// import BatteryController from './controllers/BatteryController';
// import ContactsController from './controllers/ContactsController';
// import VibrationController from './controllers/VibrationController';
// import LanguageController from './controllers/LanguageController';

console.disableYellowBox = true

var MainScreenNavigator = TabNavigator({
  Tab1: { screen: BatteryController},
  Tab2: { screen: ContactsController},
  Tab3: { screen : LocationController},
  Tab4: { screen : VibrationController},
  Tab5: { screen : LanguageController},
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

