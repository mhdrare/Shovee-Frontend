import React, {Component} from 'react'
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import Next from './user/NextDaftar'
import ForgetPassword from './user/ForgetPassword'
import Home from '../routes/rootNavigator'
import Register from './user/Register'
import Login from './user/Login'
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
	screen: LogNavigator,
	
  },
  Next: {
    screen: Next,
  },
  ForgetPassword: {
    screen: ForgetPassword,
  },
  Me: {
    screen: Me
  },
  Cart,
  Checkout,
  Wishlist,
  PurchaseHistories,
  Profile,
  SellerPage,
  AddProduct,
  DetailProduct,
  Search,
  ListSearch,
  AccountSettings
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

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
	login: (data) => dispatch(isLogin(data))
})

connect(mapStateToProps)(Login)
export default StackNavigator

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	button: {
		width: '80%',
		marginTop: 30,
		backgroundColor: "#EE4D2D",
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 3,
		borderRadius: 5
	},
	loginSMS: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '80%',
		marginTop: 15,
		height: 40,
		elevation: 1,
		borderRadius: 5,
		backgroundColor: '#075e54'
	},
	loginLine: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '80%',
		marginTop: 15,
		height: 40,
		elevation: 1,
		borderRadius: 5,
		backgroundColor: '#00c300'
	},
	loginFacebook: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '80%',
		marginTop: 15,
		height: 40,
		elevation: 1,
		borderRadius: 5,
		backgroundColor: '#3a5998'
	},
	input: {
		borderBottomWidth: 1,
	},
	text: {
		color: '#FFF'
	},
	labelLoginWith: {
		flexDirection: 'row', 
		width: '80%', 
		alignItems: 'center',
		marginTop: '24%'
	},
	itemsLoginWith: {
		flex: 1, 
		alignItems: 'center'
	},
	borderLoginWith: {
		borderWidth: 0.4, 
		width: '100%', 
		borderColor: 'grey',
	}
})

