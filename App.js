import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { AppLoading } from 'expo';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { AppTabNavigator } from './components/AppTabNavigator';
import LoginScreen from './screens/LoginScreen';
import * as Font from 'expo-font';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'SemiBold' : require('./fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./fonts/Montserrat-Medium.otf'),
      'Regular' : require('./fonts/Montserrat-Regular.otf')
    });

    this.setState({
      isFontLoaded: true
    })
  }

  render() {
    return (
      (this.state.isFontLoaded === true) ? (
        <AppContainer />
      ) : (
        AppLoading
      )
    );
  }
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  Drawer: {screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator}
});

const AppContainer = createAppContainer(switchNavigator);