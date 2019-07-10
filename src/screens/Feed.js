import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class App extends Component {
	render(){
		return(
			<React.Fragment>
				<View style={styles.header}>
					<View style={styles.headerTop}>	
						<TouchableHighlight style={styles.follow}>
							<SimpleLineIcons name="user-follow" size={24} color={'#EE4D2D'}/>
						</TouchableHighlight>
						<View style={styles.title}>
							<Text style={styles.text}>Feed</Text>
						</View>
						<TouchableHighlight style={styles.shopcart}>
							<MaterialCommunityIcons name="cart-outline" size={24} color={'#EE4D2D'}/>
						</TouchableHighlight>
						<TouchableHighlight style={styles.chat}>
							<SimpleLineIcons name="bubbles" size={24} color={'#EE4D2D'}/>
						</TouchableHighlight>
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
		backgroundColor: '#F2F2F2',
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
	shopcart: {
		marginLeft: '1%'
	},
	chat: {
		marginLeft: '7%'
	}
})