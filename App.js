import React, { Component } from 'react';
import { YellowBox } from 'react-native'
import AppNavigator from './src/routes/rootNavigator';
YellowBox.ignoreWarnings(['ViewPagerAndroid']);

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}