import React, { Component } from 'react';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Feed from '../screens/Feed';
import Mall from '../screens/Mall';
import Notification from '../screens/Notification';
import Me from '../screens/Me';
import DetailProduct from '../screens/DetailProduct';

const AppTabNavigator = createMaterialTopTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={22} />
        )
      },
    },
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="feed" color={tintColor} size={22} />
        )
      }
    },
    Mall: {
      screen: Mall,
      navigationOptions: {
        tabBarLabel: 'Mall',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="envelope" color={tintColor} size={22} />
        )
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: 'Notify',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bell" color={tintColor} size={22} />
        )
      }
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={22} />
        )
      }
    },
  }, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      upperCaseLabel: false,
      labelStyle: {
        fontSize: 9,
        marginTop: 1
      },
      style: {
        backgroundColor: '#f2f2f2',
        elevation: 15,
        height: 50
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
  })

  const AppStackNavigator = createStackNavigator({
    Home: {
      screen: AppTabNavigator
    },
    DetailProduct
  }, {
    headerMode: 'none'
  })
  
  const AppNavigator = createAppContainer(AppStackNavigator);
  export default AppNavigator;