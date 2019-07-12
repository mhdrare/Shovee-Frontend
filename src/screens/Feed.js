import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class App extends Component {
	render(){
		return(
			<View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
				<Image source={require('../assets/icon/shopee-seeklogo.com.png')} style={{width: 80, height: 120}}/>
				<Text style={{ fontSize: 17, fontWeight: '600' }}>Soon!</Text>
			</View>
		)
	}
}