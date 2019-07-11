import React, { Component } from 'react';
import { YellowBox } from 'react-native'
import AppNavigator from './src/routes/rootNavigator';
import OneSignal from 'react-native-onesignal'
YellowBox.ignoreWarnings(['ViewPagerAndroid']);

export default class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init("df4cae47-cd9d-4dd5-b97f-5f63593f39fb");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure();
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}