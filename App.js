import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';

import LocationController from './controllers/LocationController';
import BatteryController from './controllers/BatteryController';
import ContactsController from './controllers/ContactsController';
import VibrationController from './controllers/VibrationController';
import LanguageController from './controllers/LanguageController';
import SensorController from './controllers/SensorController';

console.disableYellowBox = true

var MainScreenNavigator = TabNavigator({
  Tab1: { screen: VibrationController},
  Tab2: { screen: ContactsController},
  Tab3: { screen : LocationController},
  Tab4: { screen : BatteryController},
  Tab5: { screen : LanguageController},
  Tab6: { screen : SensorController},
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'lightblue',
    labelStyle: {
      fontSize: 12,
      padding: 0,
    }
  }
});

MainScreenNavigator.navigationOptions = {
  title: "Menu"
}

export default MainScreenNavigator;

