import React, {Component} from 'react'
import {AsyncStorage, StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import NavigationService from '../NavigationService.js';

export default class App extends Component {
	constructor(props) {
        super(props);
  
        this.state = {
            isLogin: 1
        };
    }

    userLogout = () => {
    	AsyncStorage.removeItem('Token', (error) => {
			if (error) {
				// this.setState({
				// 	isLogin: true
				// })
				console.log(error)
			} else {
				console.log('Not Login')
				// this.props.navigation.replace('Me')
				NavigationService.navigate('Me');
			}
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
							<Text style={{color: '#000000', fontSize: 17}}>Pengaturan Akun</Text>
						</View>
						<TouchableOpacity style={styles.chat} onPress={() => alert('Soon!')}>
							<SimpleLineIcons name="bubbles" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{marginTop: 80, backgroundColor: '#f2f2f2', height: 40, paddingLeft: 25, padding: 10}}>
					<Text>Akun Saya</Text>
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
					<TouchableOpacity style={{ width: '100%', height: 50, flex: 1, justifyContent: 'center', paddingLeft: 30, borderTopWidth: 1, borderColor: '#f2f2f2'}} onPress={()=>this.props.navigation.navigate('Profile')}>
						<Text style={{color: '#000'}}>Profil Saya</Text>
					</TouchableOpacity>
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
					<TouchableOpacity style={{ width: '100%', height: 50, flex: 1, justifyContent: 'center', paddingLeft: 30, borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#f2f2f2'}} onPress={()=>this.props.navigation.navigate('AddressSettings')}>
						<Text style={{color: '#000'}}>Alamat Saya</Text>
					</TouchableOpacity>
				</View>
				<View style={{backgroundColor: '#f2f2f2', height: 20}}>
					
				</View>
				<View style={{flexDirection: 'row', margin: 13, alignItems: 'center', justifyContent: 'center'}}>
					<TouchableOpacity style={styles.buttonLogout} onPress={()=>this.userLogout()} >
						<Text style={{color: '#FFFFFF', textAlign: 'center'}}>Logout</Text>
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
	chat: {
		marginLeft: '17%'
	},
	buttonLogout: {
		width: '100%', 
		flex: 1, 
		backgroundColor: '#EE4D2D', 
		height: 40, 
		justifyContent: 'center', 
		borderRadius: 5
	}
})