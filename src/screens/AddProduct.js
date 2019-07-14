import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button, ActivityIndicator, Alert, Picker, AsyncStorage} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux';
import { getCategories } from '../public/redux/actions/categories';
import { addProduct } from '../public/redux/actions/product';

class App extends Component {
	constructor(props) {
        super(props);
  
        this.state = {
			imageProduct: null,
			isUploading: false,
			category: '',
			price: '',
			stok: '',
			name: '',
			description: '',
			brand: '',
			token: '',
			image: {},
			loading: false,
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

	componentDidMount() {
		this.props.dispatch(getCategories());
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
				  imageProduct: source,
				  image: sendSource
			    });
			}
		})
	}

	addProduct = async () => {
		if(this.state.category == '' && this.state.imageProduct == null && this.state.name == '' && this.state.description == '' && this.state.price == '' && this.state.stok == '' && this.state.brand == '') {
			Alert.alert('Tambah Produk Error', 'Harap periksa kembali form isian tambah produk anda :) jangan sampai ada yang kosong');
		} else {

		await this.setState({
			loading: true
		})


		this.props.dispatch(addProduct(
			this.state.token, 
			this.state.category, 
			this.state.price, 
			this.state.image, 
			'Yogyakarta', 
			this.state.description, 
			this.state.name, 
			this.state.stok, 
			this.state.brand))
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
					alert('Gagal tambah barang')
				})
			})
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
							<Text style={{color: '#000000', fontSize: 17}}>Tambah Produk</Text>
						</View>
						<TouchableOpacity style={styles.check} onPress={() => this.addProduct()}>
							<MaterialCommunityIcons name="check" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.container}>
					{
						(this.state.loading) ? <View style={{top: 12, position: 'absolute', left: 0, right: 0, alignItems: 'center'  }}><ActivityIndicator size='large' /></View> : <View/> 
					}
					<ScrollView>
						<View style={styles.imageProduct}>
							{
								this.state.imageProduct != null ? <Image style={{width: 120, height: 120, margin: 2}} source={this.state.imageProduct}/> : <Image/>
							}
							<TouchableOpacity style={{width: 120, height: 120, margin: 2, borderWidth: 1, borderRadius: 1, borderStyle: 'dashed', justifyContent:'center'}} onPress={this.handleUpdateImage}>
								<Text style={{textAlign: 'center',}}>+ Tambah Foto</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.items}>
							<TextInput placeholder="Nama Produk" onChangeText={val => {this.setState({name: val})}} style={{flex: 1}} />
						</View>
						<View style={styles.items}>
							<TextInput placeholder="Deskripsi Produk" multiline={true} style={{textAlignVertical: 'top', height: 100}} onChangeText={val => {this.setState({description: val})}} style={{flex: 1}} />
						</View>
						<View style={{height: 10}} />
						<View style={styles.items}>
							<Text style={{color: '#000', flex: 1}}>Kategori</Text>
							<Picker
								selectedValue={this.state.category}
								style={{height: 50, width: 200}}
								onValueChange={(itemValue, itemIndex) =>
									this.setState({category: itemValue})
							}>
									<Picker.Item value='' label='Pilih Kategori' />
								{
									this.props.categories.category.data.map(category => (
										<Picker.Item key={category._id} value={category._id} label={category.name} />
									))
								}
								
							</Picker>
						</View>
						<View style={{height: 10}} />
						<View style={styles.items}>
							<Text style={{color: '#000', flex: 1}}>Harga</Text>
							<TextInput placeholder="Atur Harga" onChangeText={val => {this.setState({price: val})}} style={{flex: 1}} />
						</View>
						<View style={styles.items}>
							<Text style={{color: '#000', flex: 1}}>Stok</Text>
							<TextInput placeholder="Atur Stok" onChangeText={val => {this.setState({stok: val})}} style={{flex: 1}} />
						</View>
						<View style={styles.items}>
							<Text style={{color: '#000', flex: 1}}>Brand</Text>
							<TextInput placeholder="Atur Merk" onChangeText={val => {this.setState({brand: val})}} style={{flex: 1}} />
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

const mapStateToProps = state => {
    return {
		categories: state.categories,
		product: state.product
    }
}

export default connect(mapStateToProps)(App)
