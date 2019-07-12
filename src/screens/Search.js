import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fa from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';

class HistorySearch extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#fff', borderBottomWidth:1, borderBottomColor:'rgba(0,0,0,0.1)'}}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => {this.props.navigation.navigate('ListSearch', this.props.item)}}>
                    <View style={{flex:1, paddingHorizontal:15, paddingVertical:15}}>
                        <Text>{this.props.item.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default class Search extends Component {

    constructor() {
        super();

        this.state = {
            id: 'fsadfd',
            data: [
                {
                    id: '1',
                    title: 'Laptop Core i5'
                },
                {
                    id: '2',
                    title: 'Bola Dribble'
                },
                {
                    id: '3',
                    title: 'Pacar'
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <View style={{backgroundColor:'#efefef', position:'absolute', top:24, right:0, left:0, bottom:0}}>
                    <View style={{backgroundColor:'#fff', elevation:1}}>
                        <View style={{flexDirection:'row', paddingHorizontal:14, paddingVertical:7, alignItems:'center'}}>
                            <TouchableOpacity style={{flex:1}} onPress={() => {this.props.navigation.goBack()}}>
                                <AntDesign name="arrowleft" size={26} color={'#EE4D2D'}/>
                            </TouchableOpacity>

                            <View style={{flex:8}}>
                                <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#efefef', borderRadius:4}}>
                                    <TextInput placeholder='Cari Produk' style={{ borderRadius:5, paddingVertical:7, paddingLeft:14, flex:7}} />
                                    <TouchableOpacity onPress={() => alert('Soon!')}>
                                        <SimpleLineIcons name='camera' color={'#EE4D2D'} size={24} style={{marginRight:10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <FlatList 
                            data={this.state.data}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({item, index}) => {
                                return (
                                    <HistorySearch item={item} index={index} navigation={this.props.navigation} />
                                    )
                                }}
                        />
                        <View style={{backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'rgba(0,0,0,0.1)'}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={{flex:1, paddingHorizontal:15, paddingVertical:10, justifyContent:'center', alignItems:'center'}} onPress={() => alert('Soon!')}>
                                    <Text>Hapus Riwayat Pencarian</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <ScrollView style={{backgroundColor:'#efefef', elevation:1}}>
                        <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:14, marginTop:10, backgroundColor:'#fff', borderBottomWidth:1, borderBottomColor:'rgba(0,0,0,0.05)'}}>
                            <View style={{flex:1}}>
                                <Text>Pencarian Populer</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:14, backgroundColor:'#fff'}}>
                            <View style={{flex:1}}>
                                <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:10}}>
                                    <View style={{flex:1}}>
                                        <Text>Jetpack GTA</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end'}}>
                                        <Image source={{ uri: 'http://icons.iconarchive.com/icons/100-seedless-penguins/video-game/256/GTA-San-Andreas-Jetpack-icon.png' }} style={{width:50, height:50}} />
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1, borderLeftWidth:1, borderLeftColor:'rgba(0,0,0,0.2)'}}>
                                <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:10}}>
                                    <View style={{flex:1}}>
                                        <Text>Jetpack GTA</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end'}}>
                                        <Image source={{ uri: 'http://icons.iconarchive.com/icons/100-seedless-penguins/video-game/256/GTA-San-Andreas-Jetpack-icon.png' }} style={{width:50, height:50}} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:14, backgroundColor:'#fff', marginTop:2}}>
                            <View style={{flex:1}}>
                                <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:10}}>
                                    <View style={{flex:1}}>
                                        <Text>Jetpack GTA</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end'}}>
                                        <Image source={{ uri: 'http://icons.iconarchive.com/icons/100-seedless-penguins/video-game/256/GTA-San-Andreas-Jetpack-icon.png' }} style={{width:50, height:50}} />
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1, borderLeftWidth:1, borderLeftColor:'rgba(0,0,0,0.2)'}}>
                                <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:10}}>
                                    <View style={{flex:1}}>
                                        <Text>Jetpack GTA</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end'}}>
                                        <Image source={{ uri: 'http://icons.iconarchive.com/icons/100-seedless-penguins/video-game/256/GTA-San-Andreas-Jetpack-icon.png' }} style={{width:50, height:50}} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:14, backgroundColor:'#fff', marginTop:2}}>
                            <View style={{flex:1}}>
                                <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:10}}>
                                    <View style={{flex:1}}>
                                        <Text>Jetpack GTA</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end'}}>
                                        <Image source={{ uri: 'http://icons.iconarchive.com/icons/100-seedless-penguins/video-game/256/GTA-San-Andreas-Jetpack-icon.png' }} style={{width:50, height:50}} />
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:1, borderLeftWidth:1, borderLeftColor:'rgba(0,0,0,0.2)'}}>
                                <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:10}}>
                                    <View style={{flex:1}}>
                                        <Text>Jetpack GTA</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end'}}>
                                        <Image source={{ uri: 'http://icons.iconarchive.com/icons/100-seedless-penguins/video-game/256/GTA-San-Andreas-Jetpack-icon.png' }} style={{width:50, height:50}} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </React.Fragment>
        )
    }
}