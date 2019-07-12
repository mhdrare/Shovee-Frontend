import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-picker'
import { register } from '../../public/redux/actions/auth'
import { connect } from 'react-redux'
import Loading from '../Loading'

class App extends Component {
	constructor (props) {
		super(props)

		this.state = {
			username: '',
			email: '',
			nomorhp: this.props.navigation.state.params,
			password: '',
			confirmPassword: '',
			imageProfile: null,
			loading: false,
		}
	}

	setUsername = (value) => {
    	this.setState ({
    		username: value
    	})
    }

    setEmail = (value) => {
    	this.setState ({
    		email: value
    	})
    }

    setPassword = (value) => {
    	this.setState ({
    		password: value
    	})
    }

    setConfirmPassword = (value) => {
    	this.setState ({
    		confirmPassword: value
    	})
    }

    handleUpdateImage = async () => {
		const options = {
			noData: true,
			mediaType: 'photo'
		}
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
			    console.warn('User cancelled image picker');
			} else if (response.error) {
			    console.warn('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
			    console.warn('User tapped custom button: ', response.customButton);
			} else {
			    const source = { uri: response.uri }
			    this.setState({
			      imageProfile: source,
			    });
			}
		})
	}

	userRegister = async (data) => {
		if (data == []) {
			alert('Kosong')
		} else {

			await this.setState({
				loading: true
			})

        	this.props.dispatch(register(data))
        	.then(()=>{
        		this.setState({
        			loading: false
        		}, ()=>{
        			this.props.navigation.navigate('Login')
        		})
        	})
        	.catch((err)=>{
        		this.setState({
        			loading: false
        		}, ()=>{
        			alert('Gagal register')
        		})
        	})
		}
	}

	render(){
		return(
			<React.Fragment>
				<View style={styles.header}>
					<View style={styles.headerTop}>	
						<TouchableOpacity style={styles.follow} onPress={() => this.props.navigation.goBack()}>
							<AntDesign name="arrowleft" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
						<View style={styles.title}>
							<Text style={styles.text}>Daftar</Text>
						</View>
						<TouchableOpacity style={styles.shopcart} onPress={() => this.props.navigation.goBack()}>
							<AntDesign name="closecircleo" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.container}>
					<View style={{width:'80%', marginTop: 10}}>
						{ (this.state.loading) ? <Loading /> : <View /> }
						<TextInput style={styles.input} placeholder="Username" onChangeText={this.setUsername} />
						<TextInput style={styles.input} placeholder="Email" onChangeText={this.setEmail} />
						<TextInput style={styles.input} value={this.props.navigation.state.params}/>
						<TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={this.setPassword}/>
						<TextInput style={styles.input} secureTextEntry={true} placeholder="Konfirmasi Password" onChangeText={this.setConfirmPassword}/>
					</View>
					<TouchableOpacity style={{width:'80%', marginTop: 20, flexDirection: 'row'}} onPress={this.handleUpdateImage} >
						<View style={{flex: 1}}>
							{
								this.state.imageProfile != null ? 
								<Image style={{width: 100, height: 100, borderRadius: 50}} source={ this.state.imageProfile }/> : 
								<Image style={{width: 100, height: 100, borderRadius: 50}} source={{ uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg'}}/>
							}
						</View>
						<View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
							<Text>Tekan untuk mengubah</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.userRegister({
						username: this.state.username,
						email: this.state.email,
						phone: this.state.nomorhp,
						password: this.state.password,
						password_confirmation: this.state.confirmPassword,
					})}>
						<Text style={{color: '#FFFFFF'}}>{'Lanjut'.toUpperCase()}</Text>
					</TouchableOpacity>
					<View style={{width:'80%', marginTop: 50, flexDirection: 'row'}} >
						<Text style={{textAlign: 'center'}}>Dengan mendaftar, Anda setuju dengan Syarat & Ketentuan & Kebijakan Shopee</Text>
					</View>
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

export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		height: 80,
		width: '100%',
		backgroundColor: '#F2F2F2',
	},
	headerTop: {
		flexDirection: 'row',
		top: 40,
		alignItems: 'center'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: '25%'
	},
	input: {
		borderBottomWidth: 0.4,
	},
	title: {
		width: '55%',
		marginLeft: '5%'
	},
	text: {
		fontSize: 17,
		color: '#000'
	},
	follow: {
		marginLeft: '5%'
	},
	shopcart: {
		marginLeft: '17%'
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

})
