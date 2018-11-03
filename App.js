import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';
import LocationController from './tabs/LocationController';
import BatteryController from './tabs/BatteryController';
import ContactsController from './tabs/ContactsController';
import VibrationController from './tabs/VibrationController';
import LanguageController from './tabs/LanguageController';

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

