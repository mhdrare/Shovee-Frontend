import React, {Component} from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { register } from '../../public/redux/actions/auth'

class Register extends Component {
	constructor (props) {
		super(props)

		this.state = {
			nomorhp:''
		}
	}

	componentWillMount(){
		AsyncStorage.getItem('Token', (error, result) => {
			if (result) {
				this.props.navigation.goBack()
			} else {
				console.log('Not Login')
			}
		})
	}

	setNomorHP = (values) => {
		this.setState({
			nomorhp: values
		})
	}

	lanjutDaftar = (data) => {
		if (data == '') {
			alert('Kosong!')
		} else {
			this.props.navigation.navigate('Next', data)
		}
	}

	render(){
		console.log(this.state.nomorhp)
		return(
			<React.Fragment>
				<View style={styles.container}>
					<View style={{width:'80%', marginTop: 30}}>
						<TextInput style={styles.input} placeholder="Nomor HP" onChangeText={this.setNomorHP}/>
					</View>
					<TouchableOpacity style={styles.button} onPress={() =>  this.lanjutDaftar(this.state.nomorhp)}>
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
					<TouchableOpacity style={styles.loginSMS} onPress={() => alert('Soon!')}>
						<IconAntDesign name="message1" style={{flex: 1, paddingLeft: 15}} size={25} color="#FFFFFF"/>
						<Text style={styles.text}>Daftar melalui Email</Text>
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

export default connect(mapStateToProps)(Register)

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