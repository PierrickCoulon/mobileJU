import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';

import LocationController from './controllers/LocationController';
import BatteryController from './controllers/BatteryController';
import ContactsController from './controllers/ContactsController';
import VibrationController from './controllers/VibrationController';
import LanguageController from './controllers/LanguageController';
import SensorController from './controllers/SensorController';
import ButtonController from './controllers/ButtonController';
import ColorsController from './controllers/ColorsController';
import DateTimeController from './controllers/DateTImeController';

console.disableYellowBox = true

var MainScreenNavigator = TabNavigator({
  Tab1: { screen: ContactsController},
  Tab2: { screen: VibrationController},
  Tab3: { screen : LocationController},
  Tab4: { screen : BatteryController},
  Tab5: { screen : LanguageController},
  Tab6: { screen : SensorController},
  Tab7: { screen : ButtonController},
  Tab8: { screen : ColorsController},
  Tab9: { screen : DateTimeController},
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: 'white',
    activeBackgroundColor: 'lightblue',
    labelStyle: {
      fontSize: 8,
    }
  }
});

MainScreenNavigator.navigationOptions = {
  title: "Menu"
}


export default MainScreenNavigator;

