import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native'
import AppNavigator from './src/routes/rootNavigator';
import store from './src/public/redux/store';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

export default class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      		<AppNavigator />
      	</Provider>
    );
  }
}