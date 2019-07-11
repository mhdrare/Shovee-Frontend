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
							<Text style={styles.text}>Lupa Password</Text>
						</View>
					</View>
				</View>
				<View style={styles.container}>
					<View style={{width:'80%', marginTop: 10}}>
						<Text style={{color: '#000'}}>Masukkan email atau no. telepon Anda yang sudah terdaftar</Text>
					</View>
					<View style={{width:'80%', marginTop: 5}}>
						<TextInput style={styles.input} placeholder="Email"/>
					</View>
					<TouchableOpacity style={styles.button} onPress={() =>  this.props.navigation.navigate('Login')}>
						<Text style={{color: '#FFFFFF'}}>{'Lanjut'.toUpperCase()}</Text>
					</TouchableOpacity>
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
		marginTop: 20,
		backgroundColor: "#EE4D2D",
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 3,
		borderRadius: 5
	},

})
