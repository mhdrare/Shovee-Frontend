import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight, FlatList, Image, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fa from 'react-native-vector-icons/FontAwesome';
import DummyData from '../../components/dummydata/index.product';

class WishlistCard extends Component {

    constructor() {
        super();

        this.state = {
            like: 0,
            name: 'heart',
            color: '#fa0a1a',
        }
    }

    love = () => {
        if(this.state.name == 'heart') {
            return this.setState({
                name: 'heart-o',
                color: ''
            })
        } else {
            return this.setState(prevState => ({name: prevState.name = 'heart', color: prevState.color = '#fa0a1a'}))
        }
    }

    render() {
        return (
            <TouchableOpacity style={{flex:1, margin:10, backgroundColor:'#fff', justifyContent:'center', alignItems:'center', marginBottom: 5, elevation:2}}>
                <Image source={{uri: this.props.item.image }} style={{width:'100%', height:193}} />
                
                <View style={{flexDirection:'row', padding:8}}>
                    <View style={{flex:1}}>
                        <Text numberOfLines={1}>{this.props.item.title}</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', padding:8}}>
                    <View style={{flex:1}}>
                        <Text style={{color:'#ee4d2d'}}>Rp {this.props.item.harga}</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', paddingBottom:8, paddingHorizontal:8, alignItems:'center', justifyContent:'flex-start'}}>
                    <TouchableOpacity style={{flex:1}} onPress={() => {this.love}}>
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

export default class Wishlist extends Component {

    render() {
        return (
            <React.Fragment>
                <View style={{backgroundColor:'#efefef', position:'absolute', top:24, right:0, left:0, bottom:0}}>
                    <View style={{backgroundColor:'#fff', elevation:2}}>
                        <View style={{flexDirection:'row', paddingHorizontal:14, paddingVertical:15, alignItems:'center'}}>
                            <TouchableOpacity style={{flex:1}} onPress={() => {this.props.navigation.goBack()}}>
                                <AntDesign name="arrowleft" size={26} color={'#EE4D2D'}/>
                            </TouchableOpacity>

                            <View style={{flex:6}}>
                                <Text style={{color:'#000', fontSize:20}}>Favorit Saya</Text>
                            </View>

                            <View style={{flex:1, alignItems:'flex-end'}}>
                                <SimpleLineIcons name="bubbles" size={26} color={'#EE4D2D'}/>
                            </View>
                        </View>
                    </View>

                    
                    <FlatList
                    data={DummyData}
                    numColumns={2}
                    keyExtractor={(item, index) => item.key}
                    renderItem={({item, index}) => {
                        return (
                            <WishlistCard item={item} index={index} />
                        )
                    }}
                     />
                </View>
            </React.Fragment>
        )
    }
}