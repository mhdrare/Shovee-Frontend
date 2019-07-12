import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, FlatList, Image, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fa from 'react-native-vector-icons/FontAwesome';
import { getWishlist, deleteWishlist } from '../../public/redux/actions/wishlist';
import { connect } from 'react-redux';

class WishlistCard extends Component {

    constructor() {
        super();

        this.state = {
            like: 0,
			token: '',
            name: 'heart',
            color: '#fa0a1a',
        }

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

    love = () => {
        if(this.state.name == 'heart') {
            return this.setState({
                name: 'heart-o',
                color: ''
            }, () => {
                this.props.dispatch(deleteWishlist(this.state.token, this.props.item._id))
            })
        } else {
            return this.setState(prevState => (
                {
                    name: prevState.name = 'heart', 
                    color: prevState.color = '#fa0a1a'
                }))
        }
    }

    render() {
        return (
            <TouchableOpacity style={{flex:1, marginHorizontal:5, backgroundColor:'#fff', justifyContent:'center', alignItems:'center', marginBottom: 5, marginTop:5, elevation:2}}>
                <Image source={{uri: this.props.item.product.thumbnail }} style={{width:'100%', height:193}} />
                
                <View style={{flexDirection:'row', padding:8}}>
                    <View style={{flex:1}}>
                        <Text numberOfLines={1}>{this.props.item.product.name}</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', padding:8}}>
                    <View style={{flex:1}}>
                        <Text style={{color:'#ee4d2d'}}>Rp {this.props.item.product.price}</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', paddingBottom:8, paddingHorizontal:8, alignItems:'center', justifyContent:'flex-start'}}>
                    <TouchableOpacity style={{flex:1}} onPress={() => {this.love(this.props.token)}}>
                        <Fa name={this.state.name} color={this.state.color} size={14} />
                    </TouchableOpacity>
                    <View style={{flex:9}}>
                        <Text>999</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

class Wishlist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            token: ''
        };
    }

    render() {
        return (
            <React.Fragment>
                <View style={{backgroundColor:'#efefef', position:'absolute', top:24, right:0, left:0, bottom:0}}>
                    <View style={{backgroundColor:'#fff', elevation:2, marginBottom:10}}>
                        <View style={{flexDirection:'row', paddingHorizontal:14, paddingVertical:15, alignItems:'center'}}>
                            <TouchableOpacity style={{flex:1}} onPress={() => {this.props.navigation.goBack()}}>
                                <AntDesign name="arrowleft" size={26} color={'#EE4D2D'}/>
                            </TouchableOpacity>

                            <View style={{flex:6}}>
                                <Text style={{color:'#000', fontSize:20}}>Favorit Saya</Text>
                            </View>

                            <View style={{flex:1, alignItems:'flex-end'}}>
                                <SimpleLineIcons name="bubbles" size={26} color={'#EE4D2D'} />
                            </View>
                        </View>
                    </View>

                    {
                        this.props.wishlist.isLoading ? <ActivityIndicator size={'large'} /> :  
                    
                    <FlatList
                    data={this.props.wishlist.data.data}
                    numColumns={2}
                    keyExtractor={(item, index) => item.key}
                    renderItem={({item, index}) => {
                        return (
                            <WishlistCard item={item} index={index} token={this.state.token} dispatch={this.props.dispatch} />
                            )
                        }}
                        />
                    }
                </View>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        wishlist: state.wishlist
    }
}

export default connect(mapStateToProps)(Wishlist);