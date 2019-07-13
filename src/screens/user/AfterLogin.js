import React, {Component} from 'react'
import { ActivityIndicator, AsyncStorage, StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { getUserDetail } from '../../public/redux/actions/user'
import { getWishlist } from '../../public/redux/actions/wishlist';
import { connect } from 'react-redux'

class AfterLogin extends Component {
	constructor() {
        super();

        this.state = {
        	token: '',
            user: []
        }

        
    }

    fetchDetailUser = async (token) => {
    	await this.props.dispatch(getUserDetail(token))
  	}

	_bootstrapAsync = async () => {
		AsyncStorage.getItem('Token', (error, result) => {
			if(result) {
				this.setState({
					token: result
				})
			}
		})
		.then(()=>{
			this.fetchDetailUser(this.state.token)
			this.props.dispatch(getWishlist(this.state.token))
			.then(() => {
				console.log(this.props.wishlist)
			})
		})
	}

	componentDidMount() {

    	this._bootstrapAsync()   	
    	this.willFocusSubscription = this.props.navigation.addListener(
      	'willFocus',
      		() => {
        		// this.fetchDetailUser(this.state.token)
				this.props.dispatch(getWishlist(this.state.token))
				.then(() => {
					console.log(this.props.wishlist)
				})
      		}
    	);
    	
  	}

  	componentWillUnmount() {
    	this.willFocusSubscription.remove();
  	}

	render(){
		console.log(this.props.users)
		return (
			<React.Fragment>
				<View style={styles.header}>
					<View style={styles.headerTop}>	
						<TouchableOpacity style={styles.store} onPress={() => this.props.navigation.navigate('SellerPage')}>
							<View style={{flex: 4, marginLeft: 30}}>
								<Text style={{color: '#EE4D2D', fontSize: 12, fontWeight: '600'}}>Toko Saya</Text>
							</View>
							<View style={{flex: 1}}>
								<SimpleLineIcons name="arrow-right" color={'#EE4D2D'}/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.settings} onPress={() => this.props.navigation.navigate('AccountSettings')}>
							<SimpleLineIcons name="settings" size={24} color={'#FFFFFF'}/>
						</TouchableOpacity>
						<TouchableHighlight style={styles.shopcart}
							onPress={() => this.props.navigation.navigate('Cart')}>
							<MaterialCommunityIcons name="cart-outline" size={24} color={'#FFFFFF'}/>
						</TouchableHighlight>
						<TouchableOpacity style={styles.chat} onPress={() => alert('Soon!')}>
							<SimpleLineIcons name="bubbles" size={24} color={'white'}/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.headerAccount} onPress={()=>this.props.navigation.navigate('Profile')}>


						{ (this.props.user.isLoading) ? <ActivityIndicator size='small'/> : 
						<React.Fragment>
						<Image style={{width: 50, height: 50, borderRadius: 50}} source={{ uri: this.props.user.data.image_profil}}/>
						<View style={{flexDirection: 'column', margin: 5, marginLeft: 10}}>
							<View>
								<Text style={{fontSize: 18, fontWeight: '600', color: '#FFFFFF'}}>{this.props.user.data.user.username}</Text>
							</View>
							<View>
								<View style={{flexDirection: 'row'}}>
									<Text style={{fontSize: 12, color: '#FFFFFF'}}>Pengikut 777</Text>
									<View style={{marginLeft: '6%', height: '100%', borderColor: '#FFFFFF', borderWidth: 0.4}}></View>
									<Text style={{marginLeft: '6%',fontSize: 12, color: '#FFFFFF'}}>Mengikuti 111</Text>
								</View>
							</View>
						</View>
						</React.Fragment>
						}
					</TouchableOpacity>
				</View>
				<View style={styles.body}>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('PurchaseHistories')}>
						<MaterialCommunityIcons name="clipboard" style={{flex: 1, marginLeft: '3%'}} size={25} color="#3a5998" />
						<Text style={styles.textPesanan}>Pesanan Saya</Text>
						<Text style={styles.textPesanan}>Lihat Riwayat Pesanan</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<View style={styles.itemPesanan}>
						<TouchableOpacity style={styles.statusPesanan} onPress={() => alert('Soon!')}>
							<SimpleLineIcons name="wallet" size={30}/>
							<Text style={styles.textStatus}>Belum Bayar</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statusPesanan} onPress={() => alert('Soon!')}>
							<MaterialCommunityIcons name="truck" size={30}/>
							<Text style={styles.textStatus}>Dikemas</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statusPesanan} onPress={() => alert('Soon!')}>
							<MaterialIcons name="move-to-inbox" size={30}/>
							<Text style={styles.textStatus}>Dikirim</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.statusPesanan} onPress={() => alert('Soon!')}>
							<EvilIcons name="star" size={37}/>
							<Text style={styles.textStatus}>Beri Penilaian</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.items} onPress={() => alert('Soon!')}>
						<MaterialCommunityIcons name="cellphone" style={{flex: 1, marginLeft: '3%'}} size={25} color="#369e55"/>
						<Text style={styles.text}>Pulsa & Produk Digital</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
				</View>
				<View style={styles.body}>
					<TouchableOpacity style={styles.items} onPress={() => {this.props.navigation.navigate('Wishlist')}}>
						<MaterialCommunityIcons name="heart-outline" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
						<Text style={styles.text}>Favorit Saya</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => alert('Soon!')}>
						<SimpleLineIcons name="clock" style={{flex: 1, marginLeft: '3%'}} size={25} color="#3a5998"/>
						<Text style={styles.text}>Terakhir Dilihat</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => alert('Soon!')}>
						<MaterialCommunityIcons name="wallet" style={{flex: 1, marginLeft: '3%'}} size={25} color="#EE4D2D"/>
						<Text style={styles.text}>ShoveePay</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => alert('Soon!')}>
						<FontAwesome name="share-alt" style={{flex: 1, marginLeft: '3%'}} size={25} color="#3a5998"/>
						<Text style={styles.text}>Undang Teman</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => alert('Soon!')}>
						<MaterialCommunityIcons name="coin" style={{flex: 1, marginLeft: '3%'}} size={25} color="#edd51a"/>
						<Text style={styles.text}>Koin Shovee</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => alert('Soon!')}>
						<MaterialCommunityIcons name="star-outline" style={{flex: 1, marginLeft: '3%'}} size={25} color="#369e55"/>
						<Text style={styles.text}>Penilaian Saya</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
				</View>
				<View style={styles.body}>
					<TouchableOpacity style={styles.items} onPress={() => this.props.navigation.navigate('AccountSettings')}>
						<SimpleLineIcons name="user" style={{flex: 1, marginLeft: '3%'}} size={25} color="#3a5998"/>
						<Text style={styles.text}>Pengaturan Akun</Text>
						<SimpleLineIcons name="arrow-right" style={{flex: 1, marginRight: '-1%'}} size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.items} onPress={() => alert('Soon!')}>
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
        user: state.user,
        products: state.products,
		wishlist: state.wishlist
    }
}

export default connect(mapStateToProps)(AfterLogin)

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