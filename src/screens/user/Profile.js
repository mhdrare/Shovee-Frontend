import React, {Component} from 'react'
import { AsyncStorage, Alert, StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { updateImage } from '../../public/redux/actions/user'

import Loading from '../Loading'

class App extends Component {
	constructor(props) {
        super(props);
  
        this.state = {
            imageProfile: null,
			isUploading: false,
			token: '',
			image: {},
			loading: false
        };

        this._bootstrapAsync()
    }

    _bootstrapAsync = async () => {
		await AsyncStorage.getItem('Token', (error, result) => {
			if(result) {
				this.setState({
					token: result
				})
			}
		});
	}

	handleUpdateImage = async () => {
		const options = {
			noData: true,
			mediaType: 'photo'
		}
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
			    Alert.alert('User cancelled image picker');
			} else if (response.error) {
			    Alert.alert('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
			    Alert.alert('User tapped custom button: ', response.customButton);
			} else {
				const source = { uri: response.uri }
				const sendSource = response
			    this.setState({
				  imageProfile: source,
				  image: sendSource
			    });
			}
		})
	}

	updateImageProfile = async () => {
		await this.setState({
			loading: true
		})

		await this.props.dispatch(updateImage(this.state.token, this.state.image))
		// .then(()=>{
		// 	this.setState({
		// 		loading: false
		// 	}, ()=>{
		// 		this.props.navigation.navigate('Me')
		// 	})
		// })
		// .catch((err)=>{
		// 	this.setState({
		// 		loading: false
		// 	}, ()=>{
		// 		this.props.navigation.navigate('Me')
		// 	})
		// })

		await this.setState({
			loading: false
		}, ()=>{
			this.props.navigation.navigate('Me')
		})

	}

	render(){
		return(
			<React.Fragment>
				<View style={styles.header}>
					<View style={styles.headerTop}>	
						<TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
							<AntDesign name="arrowleft" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
						<View style={styles.title}>
							<Text style={{color: '#000000', fontSize: 17}}>Ubah Profil</Text>
						</View>
						<TouchableOpacity style={styles.check} onPress={this.updateImageProfile}>
							<MaterialCommunityIcons name="check" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.photo}>
							<TouchableOpacity onPress={this.handleUpdateImage}>
							{
								this.state.imageProfile != null ? 
								<Image style={{width: 70, height: 70, borderRadius: 50, marginTop: '5%'}} source={ this.state.imageProfile }/> : 
								<Image style={{width: 70, height: 70, borderRadius: 50, marginTop: '5%'}} source={{ uri: this.props.user.data.image_profil }}/>
							}
							</TouchableOpacity>
						</View>
						{ (this.state.loading) ? <Loading /> : <View /> }
						<TouchableOpacity style={styles.items} onPress={()=>this.props.navigation.navigate('EditProfile')}>
							<Text style={styles.textLabel}>Nama</Text>
							<Text style={styles.text}>{ (this.props.user.data.name == '') ? <Text>Belum diatur</Text> : this.props.user.data.name}</Text>
						</TouchableOpacity>
						<View style={styles.items}>
							<Text style={styles.textLabel}>Username</Text>
							<Text style={styles.text}>{this.props.user.data.user.username}</Text>
						</View>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Profil</Text>
							<Text style={styles.text}>Whoops!</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Ubah Password</Text>
						</TouchableOpacity>
						<View style={{height: 15}}/>
						<TouchableOpacity style={styles.items} onPress={()=>alert('Soon!')}>
							<Text style={styles.textLabel}>Jenis Kelamin</Text>
							<Text style={styles.text}>{this.props.user.data.gender}</Text>	
						</TouchableOpacity>
						<TouchableOpacity style={styles.items} onPress={()=>alert('Soon!')}>
							<Text style={styles.textLabel}>Tanggal Lahir</Text>
							<Text style={styles.text}>{ (this.props.user.data.tanggal_lahir == '') ? <Text>Belum diatur</Text> : this.props.user.data.tanggal_lahir}</Text>	
						</TouchableOpacity>
						<TouchableOpacity style={styles.items} onPress={()=>alert('Soon!')}>
							<Text style={styles.textLabel}>Telepon</Text>
							<Text style={styles.text}>{this.props.user.data.user.phone}</Text>	
						</TouchableOpacity>
						<TouchableOpacity style={styles.items} onPress={()=>alert('Soon!')}>
							<Text style={styles.textLabel}>Email</Text>
							<Text style={styles.text}>{this.props.user.data.user.email}</Text>	
						</TouchableOpacity>
						<TouchableOpacity style={styles.items} onPress={()=>alert('Soon!')}>
							<Text style={styles.textLabel}>Akun Sosial Media</Text>
						</TouchableOpacity>
					</ScrollView>
				</View>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		height: 80,
		width: '100%',
		backgroundColor: '#FFFFFF',
	},
	headerTop: {
		flexDirection: 'row',
		top: 40,
		alignItems: 'center'
	},
	title: {
		width: '55%',
		marginLeft: '5%'
	},
	text: {
		fontSize: 17,
		color: '#000'
	},
	back: {
		marginLeft: '5%'
	},
	check: {
		marginLeft: '17%'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 80,
		backgroundColor: '#EFEFEF'
	},
	photo: {
		backgroundColor: '#EE4D2D',
		height: 170,
		alignItems: 'center',
		width: wp('100%')
	},
	items: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'column',
		height: 60,
		justifyContent: 'center',
		paddingLeft: 20,
		borderBottomWidth: 1,
		borderColor: '#EFEFEF'
	},
	textLabel: {
		color: '#000000',
		fontWeight: '600'
	},
	text: {
		color: 'grey'
	},
})