import React from 'react';
import { Image, Text } from 'react-native';
import CoronaScreen from '../screens/CoronaScreen';
import { AppStackNavigator } from './AppStackNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator({
    Symptoms: {
        screen: AppStackNavigator,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/cough.png")} style={{width: 20, height: 20}}/>,
            tabBarLabel: <Text style={{fontSize: 10}}>Search your Symptoms</Text>
        }
    },
    Corona: {
        screen: CoronaScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/covid-19.png")} style={{width: 20, height: 20}}/>,
            tabBarLabel: <Text style={{fontSize: 10}}>COVID-19 Details</Text>
        }
    }
});