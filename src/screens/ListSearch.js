import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, FlatList, Image, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

class CardSearchList extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#fff', marginHorizontal:3, marginVertical:3}}>
                <Image source={{ uri: this.props.item.image}} style={{width:'100%', height:193}} />
                <View style={{paddingHorizontal:10, paddingVertical:8}}>
                    <Text numberOfLines={2} style={{fontSize:15}}>{this.props.item.title}</Text>
                </View>
                <View style={{paddingHorizontal:10}}>
                    <Text numberOfLines={2} style={{fontSize:16, color:'#EE4D2D'}}>Rp {this.props.item.price}</Text>
                </View>
                <View style={{paddingHorizontal:10, paddingVertical:8, justifyContent:'flex-end', alignItems:'center',flexDirection:'row'}}>
                    <EvilIcon name='location' />
                    <Text numberOfLines={2} style={{fontSize:9}}>{this.props.item.sellerAddress}</Text>
                </View>
            </View>
        )
    }
}

export default class ListSearch extends Component {

    constructor() {
        super();

        this.state = {
            data: [
                {
                    id: '1',
                    title: 'Charger toshiba original19v-3,42Ac640,L640,L730,L745,C800 C840 L10 L510 T135 C40 M35X M40X B40a T110',
                    price: '85.000',
                    sellerAddress: 'KOTA JAKARTA UTARA',
                    image: 'https://cf.shopee.co.id/file/88181e18e9c400f004be5ad78f145d40_tn'
                },
                {
                    id: '2',
                    title: 'Laptop Bekas Second ASUS X200 - RAM 2GB - HDD 500GB - Slim Elegan Bekas Second Berkualitas',
                    price: '2.025.000',
                    sellerAddress: 'KOTA JAKARTA UTARA',
                    image: 'https://cf.shopee.co.id/file/7789f8cb30eefe0a75f9beba04022f47_tn'
                },
                {
                    id: '3',
                    title: '★Star Seller★ Laptop Core i5 RAM 8GB 500GB, Laptop Bekas Second Seken Core i5 Ram 8GB - Twenty Cell',
                    price: '3.650.000',
                    sellerAddress: 'KOTA JAKARTA UTARA',
                    image: 'https://cf.shopee.co.id/file/7ad55e22e62899b1df88be137dd5f80f_tn'
                },
                {
                    id: '4',
                    title: 'Laptop Lenovo 15.6" Core i5 / 500GB / Ram 4GB - Laptop Bekas Lenovo 15.6 inch',
                    price: '3.000.000',
                    sellerAddress: 'KOTA SUBANG UTARA',
                    image: 'https://cf.shopee.co.id/file/14a90f185c88aa0a65fc563c91250ffb_tn'
                },
                {
                    id: '5',
                    title: 'Laptop Bekas Second ASUS X200 - RAM 2GB - HDD 500GB - Slim Elegan Bekas Second Berkualitas',
                    price: '2.025.000',
                    sellerAddress: 'KOTA JAKARTA UTARA',
                    image: 'https://cf.shopee.co.id/file/7789f8cb30eefe0a75f9beba04022f47_tn'
                },
                {
                    id: '6',
                    title: '★Star Seller★ Laptop Core i5 RAM 8GB 500GB, Laptop Bekas Second Seken Core i5 Ram 8GB - Twenty Cell',
                    price: '3.650.000',
                    sellerAddress: 'KOTA JAKARTA UTARA',
                    image: 'https://cf.shopee.co.id/file/7ad55e22e62899b1df88be137dd5f80f_tn'
                },
                {
                    id: '7',
                    title: 'Laptop Lenovo 15.6" Core i5 / 500GB / Ram 4GB - Laptop Bekas Lenovo 15.6 inch',
                    price: '3.000.000',
                    sellerAddress: 'KOTA SUBANG UTARA',
                    image: 'https://cf.shopee.co.id/file/14a90f185c88aa0a65fc563c91250ffb_tn'
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
                                    <TouchableOpacity>
                                        <AntDesign name='search1' size={20} style={{paddingLeft:15}} />
                                    </TouchableOpacity>
                                    <TextInput placeholder='Cari Produk' style={{ borderRadius:5, paddingVertical:7, paddingLeft:10, flex:7}}>{this.props.navigation.state.params.title}</TextInput>
                                </View>
                            </View>
                        </View>
                    </View>

                    <FlatList
                    data={this.state.data}
                    numColumns={2}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item, index}) => {
                        return (
                            <CardSearchList item={item} index={index} />
                        )
                    }} />
                    
                </View>
            </React.Fragment>
        )
    }
}