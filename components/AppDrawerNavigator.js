import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';
import LiveCasesByCountry from '../screens/LiveCasesByCountryScreen';
import LiveDeathsByCountry from '../screens/LiveDeathsByCountryScreen';
import LiveRecoveredCasesByCountry from '../screens/LiveRecoveredCasesByCountry';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    Cases: {
        screen: LiveCasesByCountry
    },
    Deaths: {
        screen: LiveDeathsByCountry
    },
    Recovered: {
        screen: LiveRecoveredCasesByCountry
    },
}, {
    contentComponent: CustomSidebarMenu
}, {
    initialRouteName: "Home"
});