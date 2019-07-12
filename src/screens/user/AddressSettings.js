import React, {Component} from 'react'
import { AsyncStorage, Alert, StyleSheet, Text, ScrollView, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
        super(props);
  
        this.state = {
    
        };
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
							<Text style={{color: '#000000', fontSize: 17}}>Alamat Saya</Text>
						</View>
					</View>
				</View>
				<View style={{marginTop: 80, backgroundColor: '#f2f2f2', height: 10, paddingLeft: 25}}>
					
				</View>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
					<TouchableOpacity style={styles.buttonTambah} onPress={()=>this.props.navigation.navigate('AddAddress')}>
						<Text style={{color: '#000'}}>Tambah alamat baru</Text>
					</TouchableOpacity>
				</View>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps)(App)

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
		marginLeft: '10%'
	},
	container: {
		width: '100%',
		alignItems: 'center',
		marginTop: 80,
		backgroundColor: '#EFEFEF'
	},
	items: {
		width: '100%',
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
	buttonTambah: { 
		width: '100%', 
		height: 50, 
		flex: 1, 
		justifyContent: 'center', 
		paddingLeft: 30, 
		borderBottomWidth: 1, 
		borderTopWidth: 1, 
		borderColor: '#f2f2f2'
	}
})