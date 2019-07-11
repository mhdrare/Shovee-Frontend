import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class App extends Component {
	render(){
		return(
			<React.Fragment>
				<View style={styles.header}>
					<View style={styles.headerTop}>	
						<TouchableOpacity style={styles.follow} onPress={() => this.props.navigation.goBack()}>
							<AntDesign name="arrowleft" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
						<View style={styles.title}>
							<Text style={styles.text}>Pesanan Saya</Text>
						</View>
						<TouchableHighlight style={styles.chat}>
							<SimpleLineIcons name="bubbles" size={24} color={'#EE4D2D'}/>
						</TouchableHighlight>
					</View>
				</View>
				<View style={styles.container}>
					<ScrollView>
						<View>
							<TouchableOpacity style={styles.items}>
								<View style={{flexDirection: 'row', margin: 13, alignItems: 'center'}}>
									<Image style={{width: 30, height: 30, borderRadius: 50}} source={{ uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg'}}/>
									<Text style={{flex: 1, marginLeft: '2%', fontSize: 15, fontWeight: '500', color: '#000'}}>mhdrare</Text>
									<Text style={{flex: 1, textAlign: 'right', marginRight: '5%', color: '#EE4D2D'}}>Telah Dinilai</Text>
								</View>
								<View style={{flexDirection: 'row', margin: 13, alignItems: 'center'}}>
									<View style={{backgroundColor: '#000', width: 100, height: 100, borderWidth: 0.5}}>
										<Image style={{width: '100%', height: '100%'}} source={{ uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg'}}/>
									</View>
									<View style={{flexDirection: 'column', margin: 13, width: '63%', height: '100%'}}>
										<Text style={{flex: 1, fontSize: 15, color: '#000'}}>Bokugo</Text>
										<Text style={{flex: 1, fontSize: 15, color: '#000', textAlign: 'right'}}>x1</Text>
										<Text style={{flex: 1, fontSize: 15, color: '#000', textAlign: 'right'}}>Rp70.000</Text>
									</View>
								</View>
								<View style={{flexDirection: 'row', marginLeft: 13, marginRight: 18, alignItems: 'center', borderBottomWidth: 0.4, borderTopWidth: 0.4, borderColor: 'grey'}}>
									<Text style={{flex: 1, margin: 10}}>1 produk</Text>
									<Text style={{flex: 2, margin: 10, textAlign: 'right'}}>Jumlah Harus Dibayar: </Text><Text style={{color: '#EE4D2D'}}>Rp70.000</Text>
								</View>
								<View style={{flexDirection: 'row', marginLeft: 13, marginRight: 18, alignItems: 'center', borderBottomWidth: 0.4, borderColor: 'grey'}}>
									<MaterialCommunityIcons name="truck-fast" size={24} color={'#008eaa'} />
									<Text style={{flex: 8, margin: 10, color: '#008eaa'}}>Paket telah diterima</Text>
									<SimpleLineIcons name="arrow-right" style={{ flex: 1, marginRight: '-5%' }} size={18}/>
								</View>
								<View style={{flexDirection: 'row', margin: 13, alignItems: 'center', justifyContent: 'center'}}>
									<Text style={{flex: 1}}></Text>
									<TouchableOpacity style={{width: '100%', flex: 1, backgroundColor: '#EE4D2D', height: 40, justifyContent: 'center', borderRadius: 5}}>
										<Text style={{color: '#FFFFFF', textAlign: 'center'}}>Penilaian Dari Pembeli</Text>
									</TouchableOpacity>
								</View>
							</TouchableOpacity>
						</View>
						<View>
							<TouchableOpacity style={styles.items}>
								<View style={{flexDirection: 'row', margin: 13, alignItems: 'center'}}>
									<Image style={{width: 30, height: 30, borderRadius: 50}} source={{ uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg'}}/>
									<Text style={{flex: 1, marginLeft: '2%', fontSize: 15, fontWeight: '500', color: '#000'}}>mhdrare</Text>
									<Text style={{flex: 1, textAlign: 'right', marginRight: '5%', color: '#EE4D2D'}}>Telah Dinilai</Text>
								</View>
								<View style={{flexDirection: 'row', margin: 13, alignItems: 'center'}}>
									<View style={{backgroundColor: '#000', width: 100, height: 100, borderWidth: 0.5}}>
										<Image style={{width: '100%', height: '100%'}} source={{ uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg'}}/>
									</View>
									<View style={{flexDirection: 'column', margin: 13, width: '63%', height: '100%'}}>
										<Text style={{flex: 1, fontSize: 15, color: '#000'}}>Bokugo</Text>
										<Text style={{flex: 1, fontSize: 15, color: '#000', textAlign: 'right'}}>x1</Text>
										<Text style={{flex: 1, fontSize: 15, color: '#000', textAlign: 'right'}}>Rp70.000</Text>
									</View>
								</View>
								<View style={{flexDirection: 'row', marginLeft: 13, marginRight: 18, alignItems: 'center', borderBottomWidth: 0.4, borderTopWidth: 0.4, borderColor: 'grey'}}>
									<Text style={{flex: 1, margin: 10}}>1 produk</Text>
									<Text style={{flex: 2, margin: 10, textAlign: 'right'}}>Jumlah Harus Dibayar: </Text><Text style={{color: '#EE4D2D'}}>Rp70.000</Text>
								</View>
								<View style={{flexDirection: 'row', marginLeft: 13, marginRight: 18, alignItems: 'center', borderBottomWidth: 0.4, borderColor: 'grey'}}>
									<MaterialCommunityIcons name="truck-fast" size={24} color={'#008eaa'} />
									<Text style={{flex: 8, margin: 10, color: '#008eaa'}}>Paket telah diterima</Text>
									<SimpleLineIcons name="arrow-right" style={{ flex: 1, marginRight: '-5%' }} size={18}/>
								</View>
								<View style={{flexDirection: 'row', margin: 13, alignItems: 'center', justifyContent: 'center'}}>
									<Text style={{flex: 1}}></Text>
									<TouchableOpacity style={{width: '100%', flex: 1, backgroundColor: '#EE4D2D', height: 40, justifyContent: 'center', borderRadius: 5}}>
										<Text style={{color: '#FFFFFF', textAlign: 'center'}}>Penilaian Dari Pembeli</Text>
									</TouchableOpacity>
								</View>
							</TouchableOpacity>
						</View>
					</ScrollView>
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
	chat: {
		marginLeft: '13%'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 80,
		backgroundColor: '#EFEFEF'
	},
	items: {
		marginTop: '2%',
		width: '100%',
		height: 325,
		backgroundColor: '#FFFFFF',
	}
})