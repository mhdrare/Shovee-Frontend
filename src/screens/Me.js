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
            token: ''
        };

        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
    	await AsyncStorage.getItem('Token', (error, result) => {
        if(result){
          this.setState({
            isLogin: true,
            token: result
          })
        }
        else{
          this.setState({
            isLogin: false
          })
        }
      });
    // 	if (userToken) {
  		// 	this.setState({
  		// 		isLogin: true
  		// 	})
  		// } else {
  		// 	this.setState({
  		// 		isLogin: false
  		// 	})
  		// }
  	};

  	componentDidMount() {
    	// this.props.fetchData();   	
    	this.willFocusSubscription = this.props.navigation.addListener(
      	'willFocus',
      		() => {
        		this._bootstrapAsync();
      		}
    	);
  	}

  	componentWillUnmount() {
    	this.willFocusSubscription.remove();
  	}


	render(){
		return(
			<ScrollView>
				{
					this.state.isLogin ? 
					<AfterLogin navigation={this.props.navigation} token={this.state.token}/> : 
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