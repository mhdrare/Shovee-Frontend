import React, {Component} from 'react'
import { StyleSheet, Text, ScrollView, AsyncStorage, TextInput, View, TouchableOpacity, TouchableHighlight, Image, Button} from 'react-native'
import AfterLogin from './user/AfterLogin'
import BeforeLogin from './user/BeforeLogin'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
        super(props);
  
        this.state = {
            isLogin: false,
        };
    }

    componentWillMount(){
    	AsyncStorage.getItem('Token', (error, result) => {
			if (result) {
				this.setState({
					isLogin: true
				})
			} else {
				console.log('Not Login')
			}
		})
    }

	render(){
		return(
			<ScrollView>
				{
					this.state.isLogin ? 
					<AfterLogin navigation={this.props.navigation}/> : 
					<BeforeLogin navigation={this.props.navigation}/>
				}
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(App)