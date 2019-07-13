import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, Image, Button} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'

class BeforeLogin extends Component {
	render(){
		return (
			<React.Fragment>
				<View style={styles.header}>
					<View style={styles.headerTop}>	
						<TouchableOpacity style={styles.shopcart} onPress={() => this.props.navigation.navigate('Login')}>
							<MaterialCommunityIcons name="cart-outline" size={24} color={'#FFFFFF'}/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.chat} onPress={() => this.props.navigation.navigate('Login')}>
							<SimpleLineIcons name="bubbles" size={24} color={'white'}/>
						</TouchableOpacity>
					</View>
					<View style={styles.headerAccount}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
							<FontAwesome name="user-circle-o" size={40} color={'white'}/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('Login')}>
							<Text style={{color: '#EE4D2D'}}>Log In</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonRegister} onPress={() => this.props.navigation.navigate('Login')}>
							<Text style={{color: '#FFFFFF'}}>Register</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.body}>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<MaterialCommunityIcons name="clipboard" style={{flex: 1, marginLeft: '3%'}} size={25} color="#3a5998" />
						<Text style={styles.text}>Pesanan Saya</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<MaterialCommunityIcons name="cellphone" style={{flex: 1, marginLeft: '3%'}} size={25} color="#369e55"/>
						<Text style={styles.text}>Pulsa & Produk Digital</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
				</View>
				<View style={styles.body}>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<MaterialCommunityIcons name="heart-outline" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
						<Text style={styles.text}>Favorit Saya</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<SimpleLineIcons name="clock" style={{flex: 1, marginLeft: '3%'}} size={25} color="#3a5998"/>
						<Text style={styles.text}>Terakhir Dilihat</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<MaterialCommunityIcons name="wallet" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
						<Text style={styles.text}>ShoveePay</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<FontAwesome name="share-alt" style={{flex: 1, marginLeft: '3%'}} size={25} color="#3a5998"/>
						<Text style={styles.text}>Undang Teman</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<MaterialCommunityIcons name="coin" style={{flex: 1, marginLeft: '3%'}} size={25} color="#edd51a"/>
						<Text style={styles.text}>Koin Shovee</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<MaterialCommunityIcons name="star-outline" style={{flex: 1, marginLeft: '3%'}} size={25} color="#369e55"/>
						<Text style={styles.text}>Penilaian Saya</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
				</View>
				<View style={styles.body}>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<SimpleLineIcons name="user" style={{flex: 1, marginLeft: '3%'}} size={25} color="#3a5998"/>
						<Text style={styles.text}>Pengaturan Akun</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('Login')}>
						<SimpleLineIcons name="question" style={{flex: 1, marginLeft: '3%'}} size={25} color="#369e55"/>
						<Text style={styles.text}>Pusat Bantuan</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
				</View>
				<View style={styles.body}>
				
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

export default connect(mapStateToProps)(BeforeLogin)

const styles = StyleSheet.create({
	header: {
		height: 150,
		backgroundColor: '#EE4D2D'
	},
	body: {
		paddingTop: 10,
		backgroundColor: '#EFEFEF'
	},
	headerTop: {
		flexDirection: 'row',
		top: 40,
		justifyContent: 'flex-end',
		marginRight: '7%'
	},
	headerAccount: {
		flexDirection: 'row',
		top: 60,
		marginLeft: '5%'
	},
	store: {
		backgroundColor: '#FFFFFF',
		width: 110,
		marginRight: 110,
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	items: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		height: 45,
		alignItems: 'center',
	},
	shopcart: {
		marginRight: '8%'
	},
	settings: {
		marginRight: '8%'
	},
	text: {
		flex: 8, 
		color: '#000000'
	},
	buttonLogin: {
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		width: 80,
		marginLeft: '30%'
	},
	buttonRegister: {
		backgroundColor: '#EE4D2D',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#FFFFFF',
		width: 80,
		marginLeft: '5%'
	},
	itemPesanan: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		height: 80,
		borderColor: '#f2f2f2',
		borderTopWidth: 0.4,
		borderBottomWidth: 0.4,
		alignItems: 'center',
	},
	textPesanan: {
		flex: 4, 
		color: '#000000'
	},
	statusPesanan: {
		flex: 1,
		alignItems: 'center'
	},
	textStatus: {
		fontSize: 11,
		marginTop: 5
	}
})