import React, {Component} from 'react'
import { AsyncStorage, Alert, StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'
import { updateProfileUser } from '../../public/redux/actions/user'

class App extends Component {
	constructor(props) {
        super(props);
  
        this.state = {
    		nama: '',
    		provinsi: '',
    		kota: '',
    		kecamatan: '',
    		kodepos: '',
    		alamat: '',
    		loading: false,
    		token: ''
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

    setNama = (data) => {
    	this.setState({
    		nama: data
    	})
    }

    setProvinsi = (data) => {
    	this.setState({
    		provinsi: data
    	})
    }

    setKota = (data) => {
    	this.setState({
    		kota: data
    	})
    }

    setKecamatan = (data) => {
    	this.setState({
    		kecamatan: data
    	})
    }

    setPOS = (data) => {
    	this.setState({
    		kodepos: data
    	})
    }

    setAlamat = (data) => {
    	this.setState({
    		alamat: data
    	})
    }

    updateProfile = async () => {
    	if (this.state != null) {
    		await this.setState({
    			loading: true
    		})

    		this.props.dispatch(updateProfileUser(
				this.state.token, 
				this.state.nama,
				this.state.provinsi, 
				this.state.kota,
				this.state.kecamatan, 
				this.state.kodepos, 
				this.state.alamat))
			.then(()=>{
				this.setState({
					loading: false
				}, ()=>{
					this.props.navigation.goBack()
				})
			})
			.catch((err)=>{
				this.setState({
					loading: false
				}, () => {
						alert('Gagal update profile')
					})
				})
		} else {

    	}
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
							<Text style={{color: '#000000', fontSize: 17}}>Alamat Baru</Text>
						</View>
					</View>
				</View>
				<View style={{marginTop: 80, backgroundColor: '#f2f2f2', height: 10, paddingLeft: 25}}>
					
				</View>
				<View style={styles.container}>
					<TextInput placeholder="Nama" style={styles.items} onChangeText={this.setNama}/>
				</View>
				<View style={styles.container}>
					<TextInput placeholder="Provinsi" style={styles.items} onChangeText={this.setProvinsi}/>
				</View>
				<View style={styles.container}>
					<TextInput placeholder="Kota/Kabupaten" style={styles.items} onChangeText={this.setKota}/>
				</View>
				<View style={styles.container}>
					<TextInput placeholder="Kecamatan" style={styles.items} onChangeText={this.setKecamatan}/>
				</View>
				<View style={styles.container}>
					<TextInput placeholder="Kode POS" style={styles.items} onChangeText={this.setPOS}/>
				</View>
				<View style={styles.container}>
					<TextInput placeholder="Alamat Lengkap" multiline={true} style={styles.itemsLengkap} onChangeText={this.setAlamat}/>
				</View>
				<View style={{position: 'absolute', bottom: 0, width: '100%'}}>
					<TouchableOpacity style={styles.buttonTambah} onPress={()=>this.updateProfile()}>
						<Text style={{color: '#FFFFFF'}}>Kirim</Text>
					</TouchableOpacity>
				</View>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: state.users
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
		marginLeft: '10%'
	},
	container: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: '#EFEFEF'
	},
	items: {
		width: '100%',
		backgroundColor: '#FFFFFF',
		flexDirection: 'column',
		height: 60,
		justifyContent: 'center',
		paddingLeft: 20,
		borderBottomWidth: 1,
		borderColor: '#EFEFEF'
	},
	itemsLengkap: {
		width: '100%',
		backgroundColor: '#FFFFFF',
		height: 100,
		paddingLeft: 20,
		borderBottomWidth: 1,
		borderColor: '#EFEFEF',
	},
	textLabel: {
		color: '#000000',
		fontWeight: '600'
	},
	text: {
		color: 'grey'
	},
	buttonTambah: { 
		width: '100%', 
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#EE4D2D'
	}
})