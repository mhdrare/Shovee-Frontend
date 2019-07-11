import React, {Component} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import Next from './user/NextDaftar'
import Home from '../routes/rootNavigator'

class Login extends Component {
	render(){
		return(
			<React.Fragment>
				<View style={styles.container}>
					<View style={{width:'80%', marginTop: 30}}>
						<TextInput style={styles.input} placeholder="Email/Telepon/Username"/>
						<TextInput style={styles.input} secureTextEntry={true} placeholder="Password"/>
					</View>
					<TouchableOpacity style={styles.button}>
						<Text style={{color: '#FFFFFF'}}>{'Log In'.toUpperCase()}</Text>
					</TouchableOpacity>
					<View style={{marginTop: 20}}>
						<TouchableOpacity>
							<Text>Butuh bantuan?</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.labelLoginWith}>
						<View style={styles.itemsLoginWith}>
							<View style={styles.borderLoginWith}></View>
						</View>
						<View style={{flex: 3, alignItems: 'center'}}>
							<Text>Login cepat dengan</Text>
						</View>
						<View style={styles.itemsLoginWith}>
							<View style={styles.borderLoginWith}></View>
						</View>
					</View>
					<TouchableOpacity style={styles.loginSMS}>
						<IconAntDesign name="message1" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Login melalui SMS</Text>
						<Text style={{flex: 1}}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginLine}>
						<Icon name="line" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Login dengan Line</Text>
						<Text style={{flex: 1}}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginFacebook}>
						<Icon name="facebook" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Lanjutkan dengan Facebook</Text>
						<Text style={{flex: 1}}/>
					</TouchableOpacity>
				</View>
		    </React.Fragment>
		)
	}
}

class Register extends Component {
	render(){
		return(
			<React.Fragment>
				<View style={styles.container}>
					<View style={{width:'80%', marginTop: 30}}>
						<TextInput style={styles.input} placeholder="Nomor HP"/>
					</View>
					<TouchableOpacity style={styles.button} onPress={() =>  this.props.navigation.navigate('Next')}>
						<Text style={{color: '#FFFFFF'}}>{'Lanjut'.toUpperCase()}</Text>
					</TouchableOpacity>
					<View style={{marginTop: '30%'}}>
						
					</View>
					<View style={styles.labelLoginWith}>
						<View style={styles.itemsLoginWith}>
							<View style={styles.borderLoginWith}></View>
						</View>
						<View style={{flex: 3, alignItems: 'center'}}>
							<Text>Daftar dengan</Text>
						</View>
						<View style={styles.itemsLoginWith}>
							<View style={styles.borderLoginWith}></View>
						</View>
					</View>
					<TouchableOpacity style={styles.loginSMS}>
						<IconAntDesign name="message1" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Daftar melalui Email</Text>
						<Text style={{flex: 1}}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginLine}>
						<Icon name="line" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Login dengan Line</Text>
						<Text style={{flex: 1}}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginFacebook}>
						<Icon name="facebook" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Lanjutkan dengan Facebook</Text>
						<Text style={{flex: 1}}/>
					</TouchableOpacity>
				</View>
		    </React.Fragment>
		)
	}
}

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