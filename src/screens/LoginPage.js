import React, {Component} from 'react'
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import Next from './user/NextDaftar'
import ForgetPassword from './user/ForgetPassword'
import Home from '../routes/rootNavigator'
import Register from './user/Register'
import Login from './user/Login'

const LogNavigator = createMaterialTopTabNavigator({
	Register: {
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
  initialRouteName: 'Register',
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