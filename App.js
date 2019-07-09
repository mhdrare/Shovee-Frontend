import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './src/routes/rootNavigator';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        <AppNavigator />
      </SafeAreaView>
    );
  }
}