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
							<Text style={{color: '#000000', fontSize: 17}}>Ubah Profil</Text>
						</View>
						<TouchableOpacity style={styles.check} onPress={() => this.props.navigation.goBack()}>
							<MaterialCommunityIcons name="check" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.photo}>
							<Image style={{width: 70, height: 70, borderRadius: 50, marginTop: '5%'}} source={{ uri: 'https://i.pinimg.com/736x/a1/1b/95/a11b95eb80d3451f384c2f565835071f.jpg'}}/>
						</View>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Nama</Text>
							<Text style={styles.text}>M Faisal Akbar</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Username</Text>
							<Text style={styles.text}>mhdrare</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Profil</Text>
							<Text style={styles.text}>Whoops!</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Ubah Password</Text>
						</TouchableOpacity>
						<View style={{height: 15}}/>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Jenis Kelamin</Text>
							<Text style={styles.text}>Pria</Text>	
						</TouchableOpacity>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Tanggal Lahir</Text>
							<Text style={styles.text}>02-06-2001</Text>	
						</TouchableOpacity>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Telepon</Text>
							<Text style={styles.text}>******17</Text>	
						</TouchableOpacity>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Email</Text>
							<Text style={styles.text}>a******7@gmail.com</Text>	
						</TouchableOpacity>
						<TouchableOpacity style={styles.items}>
							<Text style={styles.textLabel}>Akun Sosial Media</Text>
						</TouchableOpacity>
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