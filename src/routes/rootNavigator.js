import React, { Component } from 'react';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Feed from '../screens/Feed';
import Mall from '../screens/Mall';
import Notification from '../screens/Notification';
import Me from '../screens/Me';
import DetailProduct from '../screens/DetailProduct';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Profile from '../screens/user/Profile';
import AddressSettings from '../screens/user/AddressSettings';
import AddAddress from '../screens/user/AddAddress';
import EditProfile from '../screens/user/EditProfile'
import PurchaseHistories from '../screens/PurchaseHistories';
import AddProduct from '../screens/AddProduct';
import LoginPage from '../screens/LoginPage';
import SellerPage from '../screens/SellerPage';
import Wishlist from '../screens/user/Wishlist';
import Search from '../screens/Search';
import ListSearch from '../screens/ListSearch';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../screens/SplashScreen';
import AccountSettings from '../screens/user/AccountSettings';

const AppTabNavigator = createMaterialTopTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Beranda',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="home" color={tintColor} size={24} />
        )
      },
    },
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="vector-arrange-above" color={tintColor} size={22} />
        )
      }
    },
    Mall: {
      screen: Mall,
      navigationOptions: {
        tabBarLabel: 'Mall',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="local-mall" color={tintColor} size={22} />
        )
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: 'Notifikasi',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bell-o" color={tintColor} size={22} />
        )
      }
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Saya',
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
    Login: {
      screen: LoginPage
    },
    Register: {
      screen: LoginPage,
    },
    EditProfile,
    Cart,
    Checkout,
    Wishlist,
    PurchaseHistories,
    Profile,
    AddressSettings,
    AddAddress,
    SellerPage,
    AddProduct,
    DetailProduct,
    Search,
    ListSearch,
    AccountSettings
  }, {
    initialRouteName: 'Home',
    headerMode: 'none'
  })

  const InitialNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: AppStackNavigator
  });
  
  const AppNavigator = createAppContainer(InitialNavigator);
  
  export default AppNavigator;