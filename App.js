import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native'
import AppNavigator from './src/routes/rootNavigator';
import store from './src/public/redux/store';
import OneSignal from 'react-native-onesignal'
YellowBox.ignoreWarnings(['ViewPagerAndroid']);

import NavigationService from './src/screens/NavigationService';

export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <AppNavigator 
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}