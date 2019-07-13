import React, {Component} from 'react'
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import Next from './user/NextDaftar'
import ForgetPassword from './user/ForgetPassword'
import Home from '../routes/rootNavigator'
import Register from './user/Register'
import Login from './user/Login'
import EditProfile from './user/EditProfile'
import AddAddress from './user/AddAddress';
import Me from './Me'
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Profile from '../screens/user/Profile';
import PurchaseHistories from '../screens/PurchaseHistories';
import AddProduct from '../screens/AddProduct';
import SellerPage from '../screens/SellerPage';
import Wishlist from '../screens/user/Wishlist';
import Search from '../screens/Search';
import ListSearch from '../screens/ListSearch';
import AccountSettings from '../screens/user/AccountSettings';
import DetailProduct from '../screens/DetailProduct';

const LogNavigator = createMaterialTopTabNavigator({
	Register2: {
		screen: Register,
		navigationOptions: {
	    	tabBarLabel: 'Daftar',
	    },
	},
	Login: {
		screen: Login,
		navigationOptions: {
	    	tabBarLabel: 'Log In',
	    }
	}
},{
  initialRouteName: 'Register2',
  swipeEnabled: true,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#EE4D2D',
    inactiveTintColor: '#000000',
    upperCaseLabel: false,
    labelStyle: {
		fontSize: 16,
		marginTop: 35,
    },
    style: {
		backgroundColor: '#f2f2f2',
		height: 79,
    },
    indicatorStyle: {
    	height: 2,
    	backgroundColor: '#EE4D2D'
    }
  }
})

const StackNavigator = createStackNavigator({
  Login: {
    screen: LogNavigator
  },
  Next: {
    screen: Next,
  },
  ForgetPassword: {
    screen: ForgetPassword,
  },
  EditProfile:{
    screen: EditProfile,
  },
  AddAddress:{
    screen: AddAddress,
  },
},{
  initialRouteName: 'Login',
  headerMode: 'none'
})

const LogPage = createAppContainer(StackNavigator)

export default class App extends Component {
	render(){
		return(
			<React.Fragment>
				<LogPage/>
			</React.Fragment>
		)
	}
}