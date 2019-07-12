import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View, FlatList, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class App extends Component {
	render(){
		return(
			<React.Fragment>
				<View style={styles.header}>
					<View style={styles.headerTop}>
						<View style={styles.title}>
							<Text style={styles.text}>Notifikasi</Text>
						</View>
						<TouchableHighlight style={styles.shopcart}>
							<MaterialCommunityIcons name="cart-outline" size={24} color={'#EE4D2D'}/>
						</TouchableHighlight>
						<TouchableOpacity style={styles.chat} onPress={() => alert('Soon!')}>
							<SimpleLineIcons name="bubbles" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.container}>
					<View style={styles.body}>
						<ScrollView>
							<View style={{paddingTop: 10}}>
								<TouchableOpacity style={styles.items}>
									<FontAwesome name="share-alt" style={styles.fontFlex} size={25} color="#3a5998"/>
									<TouchableOpacity style={{flexDirection: 'column', flex: 7}}>
										<Text style={styles.textItems}>Promo & Update Shovee</Text>
										<Text style={styles.textItems} numberOfLines={1}>Dapetin promo menarik di 8.8 MEN SALE 11 Juni</Text>
									</TouchableOpacity>
								</TouchableOpacity>
								<TouchableOpacity style={styles.items}>
									<FontAwesome name="share-alt" style={styles.fontFlex} size={25} color="#3a5998"/>
									<TouchableOpacity style={{flexDirection: 'column', flex: 7}}>
										<Text style={styles.textItems}>Informasi Akun</Text>
										<Text style={styles.textItems} numberOfLines={1}>Belum ada Informasi Akun</Text>
									</TouchableOpacity>
								</TouchableOpacity>
							</View>
							<View style={{paddingTop: 10, paddingBottom: 10}}>
								<View style={{flexDirection: 'row'}}>
									<Text style={{paddingLeft: 20, flex: 1, fontSize: 15, fontWeight: '600', color: '#000'}}>Update Pesanan</Text>
									<Text style={{paddingRight: 20, flex: 1, fontSize: 15, fontWeight: '600', textAlign: 'right'}}>Tandai sudah dibaca</Text>
								</View>
							</View>
							<FlatList
								data = {
									[
										{
											id: 1,
											uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg',
											time: '31-03-2019 13:04'
										},
										{
											id: 2,
											uri: 'https://i.pinimg.com/originals/d3/73/35/d37335c6f1fadbe83468f005b7de5a3a.jpg',
											time: '31-04-2019 13:04'
										},
										{
											id: 3,
											uri: 'https://i.pinimg.com/originals/bb/8f/04/bb8f0490e496208c0d569607c402cbba.jpg',
											time: '31-03-2019 13:14'
										},
										{
											id: 4,
											uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg',
											time: '31-03-2019 14:04'
										}
									]
								}
								keyExtractor = {(item) => item.id.toString()}
								renderItem = {({item, index}) => {
									return (
										<TouchableOpacity style={styles.itemHistory}>
										<View style={{width: 60, height: 60, borderWidth: 0.5, marginLeft: 20}}>
											<Image style={{width: '100%', height: '100%'}} source={{ uri: item.uri }}/>
										</View>
										<View style={{flexDirection: 'column', flex: 7, paddingLeft: 20}}>
											<Text style={{fontWeight: '600', color: '#000', fontSize: 15}}>Pesanan Telah Sampai</Text>
											<Text style={{color: '#000', fontSize: 11, paddingRight: 15}} numberOfLines={3}>Belum ada Informasi Akun Belum ada Informasi Akun Belum ada Informasi Akun Belum ada Informasi Akun Belum ada Informasi Akun </Text>
											<View style={styles.time}>
												<EvilIcons name="clock" size={17} />
												<Text style={styles.size11}>{item.time}</Text>
											</View>
										</View>
									</TouchableOpacity>
									)
								}
							}>
								
							</FlatList>
						</ScrollView>
					</View>
				</View>
			</React.Fragment>
		)
	}
}

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
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 80,
		backgroundColor: '#EFEFEF',
	},
	title: {
		width: '55%',
		marginLeft: '5%'
	},
	text: {
		fontSize: 17,
		color: '#000'
	},
	shopcart: {
		marginLeft: '12%'
	},
	chat: {
		marginLeft: '7%'
	},
	body: {
		backgroundColor: '#EFEFEF',
		flexDirection: 'column',
		width: '100%',
	},
	fontFlex: {
		flex: 1, 
		paddingLeft: 20
	},
	items: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		height: 70,
		alignItems: 'center',
		borderColor: '#efefef',
		borderBottomWidth: 2
	},
	itemHistory: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		height: 120,
		alignItems: 'center',
		borderColor: '#efefef',
		borderBottomWidth: 2
	},
	size11: {
		fontSize: 11
	},
	textItems: {
		color: '#000000',
	},
	time: {
		flexDirection: 'row', 
		paddingTop: 5, 
		alignItems: 'center'
	}
})