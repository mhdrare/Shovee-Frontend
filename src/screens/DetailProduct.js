import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableWithoutFeedback,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import dummyData from '../components/dummydata/index.product';
import Carousel from 'react-native-smart-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ViewMoreText from 'react-native-view-more-text';
import Login from '../screens/user/Login'
import Axios from 'axios';
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'

import { changePage, fetchCart } from '../public/redux/actions/cart'

const HEADER_MAX_HEIGHT = 411;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class CardsProduct extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.productContainer}>
        <TouchableOpacity style={styles.productItem}>
          <Image source={{uri: this.props.item.image}} style={styles.productImage} />
          <Text numberOfLines={2} style={styles.productTitle}>{this.props.item.title}</Text>
          <View style={styles.productPrice}>
            <Text style={{color:'#ee4d2d', fontSize:12}}>RP</Text>
            <Text style={{color:'#ee4d2d', fontSize:16}}>{this.props.item.harga}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
class DetailProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
      item: this.props.navigation.state.params,
      isLogin: false,
      like: false,
      count: '0'
    };
    console.log(this.state.item)
    this._bootstrapAsync
  }

  _doNavigateAndFetch = async () => {
    const userToken = await AsyncStorage.getItem('Token')
    await this.props.dispatch(fetchCart(userToken))
    await this.props.navigation.navigate('Cart', this.props.item)
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

  renderViewMore(onPress){
    return(
      <View style={{marginTop:20, borderTopWidth:1, borderTopColor:'rgba(0,0,0,0.1)'}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', paddingTop:10}}>
          <Text onPress={onPress} style={{color:'#ee4d2d'}}>Lihat Lainnya </Text>
          <Entypo name='chevron-thin-down' color={'#ee4d2d'} />
        </View>
      </View>
    )
  }

  renderViewLess(onPress){
    return(
      <View style={{marginTop:20, borderTopWidth:1, borderTopColor:'rgba(0,0,0,0.1)'}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center', flexDirection:'row', paddingTop:10}}>
          <Text onPress={onPress} style={{color:'#ee4d2d'}}>Sembunyikan </Text>
          <Entypo name='chevron-thin-up' color={'#ee4d2d'} />
        </View>
      </View>
    )
  }

  renderLike = () => {
    if(this.state.like == false) { // fungsi dispatch bisa ditaruh disini
      return this.setState({
        like: true
      })
    } else {
      return this.setState({
        like: false
      })
    }
  }

  _renderScrollViewContent() {
    console.log(this.state.like)
    return (
      <React.Fragment>

        <View style={styles.scrollViewContent}>
          <View style={{backgroundColor:'#fff', width:'100%', height:hp('20%'), paddingHorizontal:12, paddingTop:12}}>
            <View style={{flex:1}}>
              <Text style={{fontSize:20, color:'#000'}} numberOfLines={1} maxFontSizeMultiplier={1}>{this.state.item.name}</Text>
            </View>

            <View style={{flex:1}}>
              <Text style={{fontSize:22, color:'#ee4d2d', fontWeight:'300'}}>Rp {this.state.item.price}</Text>
            </View>

            <View style={{flex:1, justifyContent:'center'}}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Entypo name='star' color={'#FFD211'} size={20} />
                <Entypo name='star' color={'#FFD211'} size={20} />
                <Entypo name='star' color={'#FFD211'} size={20} />
                <Entypo name='star' color={'#FFD211'} size={20} />
                <Entypo name='star' color={'#FFD211'} size={20} />
                <Text style={{color:'#ee4d2d'}}>5.0</Text>

                <View style={{flex:1, alignItems:'flex-end'}}>
                  <TouchableOpacity style={{alignItems:'center', width:30}} onPress={() => this.renderLike()}>
                    <AntDesign name={this.state.like == false ? 'hearto': 'heart'} size={22} color={'#f80e1d'} />
                    <Text>{this.state.like == true && parseInt(this.state.count) == 0 ? this.setState({count: parseInt(this.state.count) + 1}) : this.state.like == false && parseInt(this.state.count) > 0 ? this.setState({count: this.state.count - 1}) : this.state.count}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{backgroundColor:'#de2de1', width:'100%', height:125, marginTop:10}} />

          <View style={{backgroundColor:'#ff0000', width:'100%', height:118.3, marginTop:10}} />

          <View style={{backgroundColor:'#ff0000', width:'100%', height:48, marginTop:10}} />

          <View style={{backgroundColor:'#fff', width:'100%', height:140, marginTop:10}}>
            <View style={{flexDirection:'row'}}>

              <View style={{paddingTop:10, paddingLeft:10}}>
                <Image source={require('../assets/img/profile.jpeg')} style={{width:52, height:52, borderRadius:50}}  />
              </View>

              <View style={{flex:3, marginLeft:10, paddingTop:10}}>
                <Text style={{fontWeight:'bold'}}>andreferi3</Text>
                <Text style={{fontSize:11}}>Aktif 2 hari yang lalu</Text>
                <View style={{flexDirection:'row'}}>
                  <Icon name='location' size={16} style={{paddingTop:4, marginLeft:-3}} />
                  <Text style={{fontSize:14}}>Kota Yogyakarta</Text>
                </View>
              </View>

              <View style={{flex:3, marginLeft:10, justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity style={{borderWidth:1, borderColor:'#ee4d2d', borderRadius:20}}>
                  <Text style={{paddingHorizontal:20, fontSize:12, paddingVertical:6, color:'#ee4d2d'}} numberOfLines={1}>Kunjungi Toko</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{flexDirection:'row', marginTop:18,}}>

              <View style={{flex:1, marginRight:3, justifyContent:'center', alignItems:'center', borderRightWidth:1, borderRightColor:'rgba(0,0,0,0.150)'}} >
                <Text style={{fontSize:18, color:'#ee4d2d'}}>05</Text>
                <Text>Produk</Text>
              </View>
              <View />

              <View style={{flex:1, marginRight:3, justifyContent:'center', alignItems:'center', borderRightWidth:1, borderRightColor:'rgba(0,0,0,0.150)'}} >
                <Text style={{fontSize:18, color:'#ee4d2d'}}>99</Text>
                <Text>Penilaian</Text>
              </View>

              <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
                <Text style={{fontSize:18, color:'#ee4d2d'}}>12</Text>
                <Text>Chat Dibalas</Text>
              </View>

            </View>

          </View>

          <View style={{backgroundColor:'#fff', width:'100%', marginTop:8, padding:8}}>
            <View style={{flex:1}}>
              <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:'#000'}}>Rincian Produk</Text>
                <AntDesign name='clockcircleo' size={14} style={{marginLeft:6}} />
                <Text style={{fontSize:12, marginLeft:3}}>5 Bulan</Text>
              </View>
            </View>
          </View>

          <View style={{backgroundColor:'#fff', width:'100%', marginTop:1, padding:8}}>
            <View style={{flexDirection:'row', paddingBottom:20}}>
              <View style={{flex:1, backgroundColor:'#fff'}}>
                <Text>Stok</Text>
              </View>
              <View style={{flex:1.5, backgroundColor:'#fff'}}>
                <Text style={{color:'#000'}}>1629</Text>
              </View>
            </View>

            <View style={{flexDirection:'row', paddingBottom:20}}>
              <View style={{flex:1, backgroundColor:'#fff'}}>
                <Text>Merek</Text>
              </View>
              <View style={{flex:1.5, backgroundColor:'#fff'}}>
                <Text style={{color:'#000'}}>Tidak ada merek</Text>
              </View>
            </View>

            <View style={{flexDirection:'row', paddingBottom:20}}>
              <View style={{flex:1, backgroundColor:'#fff'}}>
                <Text>Bahan</Text>
              </View>
              <View style={{flex:1.5, backgroundColor:'#fff'}}>
                <Text style={{color:'#000'}}>Katun</Text>
              </View>
            </View>

            <View style={{flexDirection:'row', paddingBottom:8}}>
              <View style={{flex:1, backgroundColor:'#fff'}}>
                <Text>Dikirim Dari</Text>
              </View>
              <View style={{flex:1.5, backgroundColor:'#fff'}}>
                <Text style={{color:'#000'}} numberOfLines={2}>Los Santos - United States</Text>
              </View>
            </View>
          </View>

          <View style={{backgroundColor:'#fff', width:'100%', marginTop:1, padding:10}}>
            <View style={{flex:1, backgroundColor:'#fff'}}>
            <ViewMoreText
              numberOfLines={4}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}
            >              
              <Text>
                    Kode : J138 {'\n'}
                    Bahan tali :silikon {'\n'}
                    Ketebalan Watchcase  : 1CM {'\n'}
                    Panjang keseluruhan (tali jam + casing jam ) = 25.5CM {'\n'}
                    {'\n'}
                    {'\n'}
                    Deskripsi: {'\n'}
                    - 100% baru {'\n'}
                    - tersedia baterai dalam jam {'\n'}
                    - Tampilan waktu dan tanggal digital. {'\n'}
                    - Gelang jam silikon yang tahan lama dan nyaman {'\n'}
                    - Gerakan digital yang tepat untuk menjaga waktu akurat. {'\n'}
                    - Daya tahan air harian 30M (jangan tekan tombol apa pun di bawah air).{'\n'}
                    {'\n'}
                    Jam tangan digital ini dapat dipakai oleh anak anak dan remaja (Pria & Wanita) dalam bepergian kemanapun yang kamu sukai.
              </Text>
            </ViewMoreText>
            </View>
          </View>

          <View style={{backgroundColor:'#ff0000', width:'100%', height:422, marginTop:8}} />

          <View style={{marginTop:15, flex:1, backgroundColor:'#efefef'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', height:42, width:'100%', backgroundColor:'#fff', paddingHorizontal:10}}>
              <View style={{justifyContent:'center'}}>
                <Text style={{alignItems:'flex-start', color:'#ee4d2d', fontSize:19, fontFamily:'HelveticaNeueMedium', fontWeight:'300'}}>REKOMENDASI</Text>
              </View>
              <View style={{justifyContent:'center'}}>
                <TouchableOpacity>
                  <Text style={{alignItems:'flex-end', color:'rgba(0, 0, 0, 0.54)', fontFamily:'HelveticaNeueMedium', fontWeight:'300'}}>Lihat Lainnya &gt;</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList 
            data={dummyData}
            numColumns={2}
            keyExtractor={(item, index) => item.key}
            renderItem={({item, index}) => {
              return (
                <CardsProduct item={item} index={index} />
              )
            }} />

            <View style={{flexDirection:'row', justifyContent:'center', flex:1, backgroundColor:'#fff', borderWidth:1, borderColor:'#ee4d2d', borderRadius:6, marginVertical:15, marginHorizontal:10}}>
              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:8}}>
                <Text style={{color:'#ee4d2d'}}>Lihat Lainnya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }

  render(){
    const datacarousel = [
      {
        "id": '339964',
        "imagePath": "https://cf.shopee.co.id/file/c34c7eadcd6376f5f9355f7a26326c93", // URL
      },
      {
        "id": '33995',
        "imagePath": "https://cf.shopee.co.id/file/webp/baa1cd10eda6eedbafee8f002ae6b391_xxhdpi",
      },
      {
        "id": '33995dsf4',
        "imagePath": 'https://cf.shopee.co.id/file/webp/f3824ab80b89d29677eca72163f93565_xxhdpi',
      },
      {
        "id": '3399545dsf4',
        "imagePath": 'https://cf.shopee.co.id/file/webp/1836a466998e4d1f7cca52275028f6be_xxhdpi',
      },
      {
        "id": '33993465dsf4',
        "imagePath": 'https://cf.shopee.co.id/file/webp/abec0363e8defc836985fa884529470a_xxhdpi',
      },
      {
        "id": '33993465d585',
        "imagePath": 'https://cf.shopee.co.id/file/webp/286bb3d889034d103f8576cb6119bc71_xxhdpi',
      },
    ];

    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const barOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 1, 1],
      extrapolate: 'clamp'
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.View style={[
            styles.backgroundImage,
            {
              opacity: imageOpacity,
              transform: [{ translateY: imageTranslate }],
            },
          ]}>
            <ScrollView
              ref={(c) => { this.parentScrollView = c; }}
            >
              <Carousel
                data={datacarousel}
                height={HEADER_MAX_HEIGHT}
                navigation={true}
                navigationColor={'#ffffff'}
                navigationType={'dots'}
                parentScrollViewRef={this.parentScrollView}
              />
            </ScrollView>
          </Animated.View>
        </Animated.View>

        {/* Bottom Navigation */}
        <View style={{backgroundColor:'#fff', position:'absolute', bottom:0, left:0, right:0, height:50, justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>

            <TouchableOpacity style={{flex:1, backgroundColor:'#00bfa5', height:50, justifyContent:'center', alignItems:'center', marginRight:0.5}}>
              <AntDesign name='message1' color={'#fff'} size={26} />
            </TouchableOpacity>

            <TouchableOpacity style={{flex:1, backgroundColor:'#00bfa5', height:50, justifyContent:'center', alignItems:'center'}}>
              <MaterialIcon name='add-shopping-cart' size={26} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity style={{flex:2, backgroundColor:'#ee4d2d', height:50, justifyContent:'center', alignItems:'center'}} onPress={async () => {
              try {
                await this.props.dispatch(changePage('Cart'))
                console.log('akaka')
              } catch {
                console.log('wkwkw')
              }
              
              await this.state.isLogin ? this._doNavigateAndFetch() : this.props.navigation.navigate('Login', this.props.item )
              }}>
              <Text style={{color:'#fff'}}>Beli Sekarang</Text>
            </TouchableOpacity>

          </View>
        </View>

        <Animated.View
          style={[
            styles.bar,
            {
              opacity: barOpacity,
              transform: [
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <TouchableWithoutFeedback>
            <View style={{width:'70%', height:40, flex:1, flexDirection:'column', justifyContent:'center', marginBottom:5}}>
              <Text style={{alignItems:'flex-start', color:'#000', fontSize:20, marginLeft:'20%', fontWeight:'bold', fontFamily:'Helvetica Neue,Helvetica,Roboto,Droid Sans,Arial,sans-serif'}} numberOfLines={1}>{'Jilbab Pasmina Sabyan Diamond'.substring(0,20)+'...'}</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableOpacity style={{position:'absolute', top:7, left:13}} onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../assets/icon/left-arrow.png')} style={{width:24, height:24}} />
          </TouchableOpacity>

          <TouchableHighlight style={{position:'absolute', top:7, right:'17%', zIndex:10}}>
            <Image source={require('../assets/icon/shopcartorange.png')} style={{width:24, height:24}} />
          </TouchableHighlight>

          <TouchableHighlight style={{position:'absolute', top:7, right:'5%'}}>
            <Image source={require('../assets/icon/more.png')} style={{width:24, height:24}} />
          </TouchableHighlight>

        </Animated.View>
      </View>
    )
  };
}

export default connect(state => ({auth: state.auth}))(DetailProduct)

const styles = StyleSheet.create({
    fill: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: null,
      height: HEADER_MAX_HEIGHT,
      resizeMode:'cover'
    },
    bar: {
      backgroundColor: 'transparent',
      marginTop: Platform.OS === 'ios' ? 28 : 38,
      height: 40,
      marginLeft: 10,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    title: {
      color: 'white',
      fontSize: 18,
    },
    scrollViewContent: {
      marginTop: Platform.OS !== 'ios' ? 0 : 0,
      paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
      backgroundColor: '#efefef'
    },
    row: {
      height: 40,
      margin: 16,
      backgroundColor: '#efefef',
      alignItems: 'center',
      justifyContent: 'center',
    },
    productItem: {
      height:hp('39%'), 
      width:wp('48.3%'), 
      backgroundColor:'#fff'
    },
    productContainer: {
      flex:1, 
      flexDirection:'row', 
      justifyContent:'center', 
      marginBottom:5
    },
    productImage: {
      height:196.5, 
      width:196.5
    },
    productTitle: {
      fontFamily:'Helvetica Neue,Helvetica,Roboto,Droid Sans,Arial,sans-serif', 
      paddingHorizontal:5
    },
    productPrice: {
      flexDirection:'row', 
      paddingHorizontal:5, 
      paddingTop:2
    }
  });