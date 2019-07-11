import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
						<TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
							<AntDesign name="arrowleft" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
						<View style={styles.title}>
							<Text style={{color: '#000000', fontSize: 17}}>Tambah Produk</Text>
						</View>
						<TouchableOpacity style={styles.check} onPress={() => alert('SUKSES')}>
							<MaterialCommunityIcons name="check" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.imageProduct}>
							<Image style={{width: 120, height: 120, margin: 2}} source={{ uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg'}}/>
							<TouchableOpacity style={{width: 120, height: 120, margin: 2, borderWidth: 1, borderRadius: 1, borderStyle: 'dashed', justifyContent:'center'}}>
								<Text style={{textAlign: 'center',}}>+ Tambah Foto</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.items}>
							<TextInput placeholder="Nama Produk" />
						</View>
						<View style={styles.items}>
							<TextInput placeholder="Deskripsi Produk" multiline={true} style={{textAlignVertical: 'top', height: 100}}/>
						</View>
						<View style={{height: 10}} />
						<View style={styles.items}>
							<Text style={{color: '#000', flex: 1}}>Kategori</Text>
							<TextInput placeholder="Atur Kategori" />
						</View>
						<View style={{height: 10}} />
						<View style={styles.items}>
							<Text style={{color: '#000', flex: 1}}>Harga</Text>
							<TextInput placeholder="Atur Harga" />
						</View>
						<View style={styles.items}>
							<Text style={{color: '#000', flex: 1}}>Stok</Text>
							<TextInput placeholder="Atur Stok" />
						</View>
						<View style={styles.items}>
							<Text style={{color: '#000', flex: 1}}>Variasi</Text>
							<TextInput placeholder="Atur Merk" />
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
	back: {
		marginLeft: '5%'
	},
	check: {
		marginLeft: '17%'
	},
	container: {
		flex: 1,
		marginTop: 80,
		backgroundColor: '#EFEFEF'
	},
	imageProduct: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'row',
	},
	items: {
		paddingLeft: 10,
		paddingRight: 10,
		borderColor: 'grey',
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center'
	},
})