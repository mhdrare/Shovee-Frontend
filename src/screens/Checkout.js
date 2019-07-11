import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';

class CheckoutList extends Component {
    render() {
        return (
            <React.Fragment>
                <View style={{marginBottom:8}}>
                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row', paddingHorizontal:14, paddingVertical:8, alignItems:'center', justifyContent:'flex-start'}}>
                            <View style={{flex:1}}>
                                <Entypo name='shop' size={18} />
                            </View>
                            <View style={{flex:13}}>
                                <Text style={{color:'#000'}}>{this.props.item.seller}</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{backgroundColor:'#f8f8e8'}}>

                    <View style={{flexDirection:'row', padding:14, alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <View style={{flexDirection:'row'}}>

                                    <Image source={{ uri: this.props.item.image }} style={{width:72, height:72}} />
                                    
                                    <View style={{flex:1, justifyContent:'space-between', marginLeft:8}}>
                                        <Text numberOfLines={1}>{this.props.item.description}</Text>

                                        <Text>Variasi: -</Text>
                                        
                                        <Text>{this.props.item.price}</Text>
                                    </View>
                                    
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row', padding:14, alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <Text style={{color:'#000'}}>Total Pesanan (1 Produk ):</Text>
                            </View>

                            <View style={{flex:1, alignItems:'flex-end'}}>
                                <Text style={{color:'#ee4d2d', fontSize:18, fontWeight:'bold'}}>{this.props.item.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </React.Fragment>
        )
    }
}

export default class Checkout extends Component {

    constructor() {
        super();

        this.state = {
            checked: false,
            count: 0,
            data: [
                {
                    id: '1',
                    seller: 'grosir.outdoor.shop',
                    description: '1 KG 1 Roll Wallpaper 10 meter X 45 cm  wallpaper dinding Motif hellokitty doraemon dll',
                    image: 'https://cf.shopee.co.id/file/webp/6e060dc67897556a6065a1e93750521d_tn',
                    price: 'Rp 25.000'
                },
                {
                    id: '2',
                    seller: 'Shopeefy',
                    description: 'Pilih voucher Gratis Ongkir untuk menikmati Gratis Ongkir',
                    image: 'https://cf.shopee.co.id/file/webp/a0fcf29d450e4ca8e164958efd870bf9_tn',
                    price: 'Rp 25.000'
                }
            ]
        }
    }

    _decreaseItem = () => {
        if(this.state.count == 0){
            return;
        } else {
            return this.setState(prevState => ({ count: prevState.count - 1 }))
        }
    }

    _increaseItem = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            // HEADER \\
            <React.Fragment>
                <View style={{backgroundColor:'#fff', position:'absolute', top:24, right:0, left:0, elevation:1}}>
                    <View style={{flexDirection:'row', paddingHorizontal:15, paddingVertical:18, justifyContent:'flex-end', alignItems:'center'}}>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                                <Image source={require('../assets/icon/left-arrow.png')} style={{width:28, height:28}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:7}}>
                            <Text style={{fontSize:20, color:'#000'}}>Checkout</Text>
                        </View>
                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <TouchableOpacity>
                                <AntDesign size={26} name='message1' color={'#ee4d2d'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <ScrollView style={{position:'absolute', top:88, left:0, right:0, bottom:0,backgroundColor:'#efefef'}}>
                    <View style={{backgroundColor:'#fbfbf8'}}>
                        <TouchableOpacity style={{flexDirection:'row', paddingHorizontal:17, paddingVertical:13, alignItems:'center'}}>
                            <View style={{flex:1, alignSelf:'flex-start'}}>
                                <Icon name='location' color={'#ee4d2d'} size={24} />
                            </View>

                            <View style={{flex:11}}>
                                <Text style={{fontSize:15, color:'#000'}}>Alamat Pengiriman {'\n'}</Text>
                                
                                <Text style={{fontSize:15, color:'#000'}}>Andre Feri (+62) 831-2024-7547</Text>
                                <Text style={{fontSize:15, color:'#000'}}>Dsn. Karanganyar RT.04/RW.02</Text>
                                <Text style={{fontSize:15, color:'#000'}}>KAB.SLEMAN - MLATI, DI YOGYAKARTA, ID 55284</Text>
                            </View>

                            <TouchableOpacity style={{flex:1}}>
                                <Entypo name='chevron-thin-right' color={'#000'} size={18} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>

                    <FlatList 
                    data={this.state.data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item, index}) => {
                        return (
                            <CheckoutList item={item} index={index} />
                        )
                    }}
                    />

                    <View style={{backgroundColor:'#fff'}}>

                        <View style={{flexDirection:'row', paddingHorizontal:12, paddingVertical:4, alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <Text style={{color:'#000'}}>Subtotal untuk Produk</Text>
                            </View>

                            <View style={{flex:1, alignItems:'flex-end'}}>
                                <Text style={{color:'#000'}}>Rp50.000</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', paddingHorizontal:12, paddingVertical:4, alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <Text style={{color:'#000'}}>Subtotal Pengiriman</Text>
                            </View>

                            <View style={{flex:1, alignItems:'flex-end'}}>
                                <Text style={{color:'#000'}}>Gratis</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', paddingHorizontal:12, paddingVertical:4, alignItems:'center', paddingBottom:14}}>
                            <View style={{flex:1}}>
                                <Text style={{color:'#000', fontSize:18, fontWeight:'400'}}>Total Pembayaran</Text>
                            </View>

                            <View style={{flex:1, alignItems:'flex-end'}}>
                                <Text style={{color:'#ee4d2d', fontSize:18, fontWeight:'400'}}>Rp50.000</Text>
                            </View>
                        </View>

                    </View>
                    
                    <View style={{margin:20}}>
                        <TouchableOpacity style={{flex:1, flexDirection:'row', backgroundColor:'#ee4d2d', justifyContent:'center', alignItems:'center', paddingVertical:10, borderRadius:5}}>
                            <Text style={{color:'#fff', fontSize:16}}>BUAT PESANAN</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </React.Fragment>
        )
    }
}