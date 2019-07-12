import React, {Component} from 'react';
import { connect } from 'react-redux'

import { View, Text, TouchableOpacity, Image, CheckBox, FlatList, ScrollView } from 'react-native';
import Fa from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import cart from '../public/redux/reducer/cart';

class CartList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            checked: true
        }
    }

    render() {
        return (
            <React.Fragment>
                <View style={{marginBottom:10}}>
                    <View style={{backgroundColor:'#fff', borderBottomWidth:1, borderBottomColor:'rgba(0,0,0,0.08)'}}>
                        <View style={{flexDirection: 'row', paddingHorizontal:15, paddingVertical:10, alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <CheckBox
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                            </View>

                            <View style={{flex:9}}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={{ uri: this.props.item.product.seller.image_profil }} style={{width:24, height:24, borderRadius:50 }} />

                                    <Text style={{color:'#000'}}>  {this.props.item.product.seller.user.username}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row', padding:15, alignItems:'center'}}>
                            <View style={{flex:1}}>
                            <CheckBox
                                value={this.state.checked}
                                onValueChange={() => this.setState({ checked: !this.state.checked })}
                            />
                            </View>
                            <View style={{flex:9}}>
                                <View style={{flexDirection:'row'}}>

                                    <Image source={{ uri: this.props.item.product.thumbnail }} style={{width:72, height:72}} />
                                    
                                    <View style={{flex:1, justifyContent:'space-between', marginLeft:8}}>
                                        <Text numberOfLines={1}>{this.props.item.product.name}</Text>
                                        
                                        <View style={{flexDirection:'row'}} >
                                            <TouchableOpacity onPress={this.props.decreaseItem}>
                                                <AntDesign name='minussquareo' size={20} />
                                            </TouchableOpacity>

                                            <View>
                                                <Text>  {this.props.item.count}  </Text>
                                            </View>

                                            <TouchableOpacity onPress={this.props.increaseItem}>
                                                <AntDesign name='plussquareo' size={20} />
                                            </TouchableOpacity>
                                        </View>

                                        <Text style={{color:'#ee4d2d'}}>Rp {this.props.item.product.price}</Text>
                                    </View>
                                    
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </React.Fragment>
        )
    }
}

class Cart extends Component {
    
    constructor() {
        super();

        this.state = {
            data: [
                {
                    idProduct: '1',
                    idSeller: '1',
                    titleProduct: '1 KG 1 Roll Wallpaper 10 meter X 45 cm  wallpaper dinding Motif hellokitty doraemon dll',
                    username: 'grosir.outdoor.shop',
                    imageUser: 'https://cf.shopee.co.id/file/webp/67b2f11382844708891f26b3ad91790d_tn',
                    imageProduct: 'https://cf.shopee.co.id/file/webp/44a66a34e96e2444d291a52f5125732c_tn',
                    price: 50000,
                    count: 1,
                    checked: false
                }
            ]
        }
    }

    _decreaseItem = () => {
        if(this.props.data[0].count == 0){
            return;
        } else {
            return this.setState(prevState => ({ count: prevState.data[0].count - 1 }))
        }
    }

    _increaseItem = () => {
        this.setState(prevState => ({ count: prevState.data[0].count + 1 }))
    }

    countPrice = () => {
        if (this.props.cart.data.length == 0){
            return 0
        } else if (this.props.cart.data.length == 1){
            let totalPrice = this.props.cart.data.reduce((x, y) => {price: x.produk.price + y.produk.price})
            return totalPrice.product.price
        } else {
            let totalPrice = this.props.cart.data.reduce((a, b) => ({price: a.product.price + b.product.price}))
            return totalPrice.price
        }
    }

    render() {
        return (
            // HEADER \\
            <React.Fragment>
                <View style={{backgroundColor:'#fff', position:'absolute', top:24, right:0, left:0}}>
                    <View style={{flexDirection:'row', paddingHorizontal:15, paddingVertical:18, justifyContent:'flex-end', alignItems:'center'}}>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                                <Image source={require('../assets/icon/left-arrow.png')} style={{width:28, height:28}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:7}}>
                            <Text style={{fontSize:20, color:'#000'}}>Keranjang Saya</Text>
                        </View>
                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <TouchableOpacity>
                                <AntDesign size={26} name='message1' color={'#ee4d2d'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <ScrollView style={{position:'absolute', top:88, left:0, right:0, bottom:0,backgroundColor:'#efefef'}} >

                    <View style={{backgroundColor:'#fff7b8'}}>
                        <View style={{flexDirection:'row', paddingHorizontal:17, paddingVertical:13, justifyContent:'flex-end', alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <Fa name='truck' color={'#01bfa5'} size={24} />
                            </View>
                            <View style={{flex:8}}>
                                <Text style={{fontSize:15}}>Pilih voucher Gratis Ongkir untuk menikmati Gratis Ongkir</Text>
                            </View>
                        </View>
                    </View>

                    <FlatList
                    data={this.props.cart.data}
                    keyExtractor={(item, index) => item._id}
                    renderItem={({item, index}) => {
                        return (
                            <CartList item={item} index={index} increaseItem={this._increaseItem} decreaseItem={this._decreaseItem} />
                        )
                    }}
                    />
                </ScrollView>                

                <View style={{backgroundColor:'#fff', position:'absolute', bottom:0, left:0, right:0}}>
                    <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:5, alignItems:'center'}}>

                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <CheckBox
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                                <Text style={{color:'#000'}}>Pilih Semua</Text>
                            </View>
                        </View>

                        <View style={{flex:2, alignItems:'flex-end'}}>
                            <Text style={{color:'#000'}}>SubTotal : <Text style={{color:'#ee4d2d'}}>Rp{this.countPrice()}</Text></Text>
                            <Text style={{fontSize:12, color:'#f6a700'}}>Dapatkan 0 Koin</Text>
                        </View>

                        <TouchableOpacity style={{flex:1, alignItems:'center', backgroundColor:'#ee4d2d', paddingVertical:8, borderRadius:5, marginLeft:10}} onPress={() => {this.props.navigation.navigate('Checkout')}}>
                            <Text style={{color:'#fff', fontSize:16}}>Checkout</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </React.Fragment>
        )
    }
}

export default connect(state => ({cart: state.cart}))(Cart)