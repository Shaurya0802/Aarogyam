import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SymptomDataScreen from '../screens/SymptomDataScreen';
import SymptomsScreen from '../screens/SymptomsScreen';

export const AppStackNavigator = createStackNavigator({
    Symptoms: {
        screen: SymptomsScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    SymptomData: {
        screen: SymptomDataScreen,
        navigationOptions: {
            headerShown: false
        }
    }
}, {
    initialRouteName: "Symptoms"
});