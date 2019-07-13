import React, {Component} from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { isLogin } from '../../public/redux/actions/auth'
import Loading from '../Loading'

import NavigationService from '../NavigationService.js';

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			loading: false
		}
	}
	userLogin = async (data) => {
		if (this.state.username == '' || this.state.password == '') {
			alert('Kosong')
		} else {

			await this.setState({
				loading: true
			})

        	this.props.dispatch(isLogin(data))
        	.then(()=>{
        		this.setState({
					loading: false
				}, () => {
        			console.log(this.props.navigation.state.params)
        			// this.props.navigation.navigate('Me')
        			NavigationService.navigate('Me');
				})
        		
        	})
        	.catch((err)=>{
        		this.setState({
					loading: false
				}, () => {
        			alert('Gagal login')
				})
        	})
			

			// this.props.dispatch(isLogin(data))
   //      	.then(()=>{
        		
   //      		console.log(this.props.navigation.state.params)
   //      		this.props.navigation.navigate('Cart', this.props.navigation.state.params)
        		
   //      	})
   //      	.catch((err)=>{
   //      		alert('Gagal login')
   //      	})
		}
    }

    setUsername = (value) => {
    	this.setState ({
    		username: value
    	})
    }

    setPassword = (value) => {
    	this.setState ({
    		password: value
    	})
    }

	render(){
		return(
			<React.Fragment>
				<View style={styles.container}>
					<View style={{width:'80%', marginTop: 30}}>
					{ (this.state.loading) ? <Loading /> : <View /> }
						<TextInput style={styles.input} placeholder="Email/Telepon/Username" onChangeText={this.setUsername}/>
						<TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={this.setPassword}/>
						<TouchableOpacity style={{position: 'absolute', right: 5, top: 65}} onPress={() => this.props.navigation.navigate('ForgetPassword')}>
							<Text style={{color: '#075d54'}}>Lupa?</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.button} onPress={() => this.userLogin({username: this.state.username, password: this.state.password})}>
						<Text style={{color: '#FFFFFF'}}>{'Log In'.toUpperCase()}</Text>
					</TouchableOpacity>
					<View style={{marginTop: 20}}>
						<TouchableOpacity onPress={() => alert('Soon!')}>
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
					<TouchableOpacity style={styles.loginSMS} onPress={() => alert('Soon!')}>
						<IconAntDesign name="message1" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Login melalui SMS</Text>
						<Text style={{flex: 1}}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginLine} onPress={() => alert('Soon!')}>
						<Icon name="line" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Login dengan Line</Text>
						<Text style={{flex: 1}}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginFacebook} onPress={() => alert('Soon!')}>
						<Icon name="facebook" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Lanjutkan dengan Facebook</Text>
						<Text style={{flex: 1}}/>
					</TouchableOpacity>
				</View>
		    </React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(state => ({auth: state.auth}))(Login)

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