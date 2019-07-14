import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import OneSignal from 'react-native-onesignal'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'

import { fetchCart } from '../public/redux/actions/cart'
import { postCheckout } from '../public/redux/actions/checkout'

import Loading from './Loading'

import axios from 'axios'
import NavigationService from './NavigationService';

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
                                <Text style={{color:'#000'}}>{this.props.item.product.seller.user.username}</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{backgroundColor:'#f8f8e8'}}>

                    <View style={{flexDirection:'row', padding:14, alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <View style={{flexDirection:'row'}}>

                                    <Image source={{ uri: this.props.item.product.thumbnail }} style={{width:72, height:72}} />
                                    
                                    <View style={{flex:1, justifyContent:'space-between', marginLeft:8}}>
                                        <Text numberOfLines={1}>{this.props.item.product.description}</Text>

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
                                <Text style={{color:'#ee4d2d', fontSize:18, fontWeight:'bold'}}>{this.props.item.product.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </React.Fragment>
        )
    }
}
class Checkout extends Component {

    constructor(props) {
        super(props);

        this.deviceID = ''

        OneSignal.init("df4cae47-cd9d-4dd5-b97f-5f63593f39fb")
        OneSignal.inFocusDisplaying(2)
        
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', device => {
            this.deviceID = device.userId
        });
        OneSignal.configure();

        this.state = {
            checked: false,
            count: 0,
            isLoading: false,
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
        this._bootstrapAsync()
    }

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
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
      }
      onReceived(notification) {
        console.log("Notification received: ", notification);
      }
    
      onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
      }
    
      onIds(device) {
        this.deviceID= device.userId
        console.log('Device info: ', device);
      }


    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('Token');
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        if (userToken) {
        this.setState({
          isLogin: true
        })
      } else {
        this.setState({
          isLogin: false
        })
      }
      };

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

    handleCheckout = async (data) => {
        this.setState({isLoading: true})
        const arr = []
        await data.map(datum => arr.push({main: datum.product._id, cart: datum._id}))
        
        const checkout = {
            product: arr,
            totalPrice: this.props.navigation.state.params,
            totalItem: this.props.cart.data.length,
            seller: this.props.cart.data[0].product.seller.user._id
        }
        const userToken = await AsyncStorage.getItem('Token');
        console.log(userToken)
        //do dispatch here bitch

        await this.props.dispatch(postCheckout(checkout, userToken, this.deviceID))
        NavigationService.navigate('Home')
        await this.props.dispatch(fetchCart(userToken))
        this.setState({isLoading: false})
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
                                
                                <Text style={{fontSize:15, color:'#000'}}>{this.props.user.data.address.full_address}</Text>
                                <Text style={{fontSize:15, color:'#000'}}>{this.props.user.data.address.city}</Text>
                                <Text style={{fontSize:15, color:'#000'}}>{this.props.user.data.address.province}, ID {this.props.user.data.address.zip_code}</Text>
                            </View>

                            <TouchableOpacity style={{flex:1}}>
                                <Entypo name='chevron-thin-right' color={'#000'} size={18} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>

                    <FlatList 
                    data={this.props.cart.data}
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
                                <Text style={{color:'#ee4d2d', fontSize:18, fontWeight:'400'}}>{this.props.navigation.state.params}</Text>
                            </View>
                        </View>

                    </View>
                    
                    <View style={{margin:20}}>
                        <TouchableOpacity style={{flex:1, flexDirection:'row', backgroundColor:'#ee4d2d', justifyContent:'center', alignItems:'center', paddingVertical:10, borderRadius:5}}
                        onPress={() => {
                            this.handleCheckout(this.props.cart.data)
                            }}>
                            <Text style={{color:'#fff', fontSize:16}}>BUAT PESANAN</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.isLoading ? <Loading /> : <View />}
                </ScrollView>
            </React.Fragment>
        )
    }
}

export default connect(state => ({cart: state.cart, user: state.user}))(Checkout)