import React, {Component} from 'react'
import {AsyncStorage, StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

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
				this.props.navigation.replace('Me')
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
						<TouchableOpacity style={styles.chat} onPress={() => alert('SUKSES')}>
							<SimpleLineIcons name="bubbles" size={24} color={'#EE4D2D'}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{flexDirection: 'row', margin: 13, alignItems: 'center', justifyContent: 'center', marginTop: 80}}>
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