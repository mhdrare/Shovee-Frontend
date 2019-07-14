import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal'
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
  AsyncStorage,
  ScrollView,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-smart-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Faf from 'react-native-vector-icons/FontAwesome5';
import Fa from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { getCategories } from '../public/redux/actions/categories';
import { fetchProducts, fetchProductsMore } from '../public/redux/actions/product';
import { fetchCart } from '../public/redux/actions/cart';
import { getWishlist } from '../public/redux/actions/wishlist';
import dataShopeeLive from '../components/dummydata/live.shopee';
import dataShopeeMall from '../components/dummydata/shopee.mall';

const HEADER_MAX_HEIGHT = 180;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const dataFlashSale = [
  {
    id: '1',
    image: 'https://cf.shopee.co.id/file/765aeb4b74bccb805fbd977000a4536c_tn',
    harga: '86.000',
    diskon: '30%',
    off: 'OFF'
  },
  {
    id: '2',
    image: 'https://cf.shopee.co.id/file/57a3f9127fc2d3bae2f40b340832c441_tn',
    harga: '70.000',
    diskon: '70%',
    off: 'OFF'
  },
  {
    id: '3',
    image: 'https://cf.shopee.co.id/file/9ca203634f979d8a8458356e5358383e_tn',
    harga: '354.900',
    diskon: '20%',
    off: 'OFF'
  },
  {
    id: '4',
    image: 'https://cf.shopee.co.id/file/69144231e045fed91be0041237e3478b_tn',
    harga: '34.000',
    diskon: '11%',
    off: 'OFF'
  },
  {
    id: '5',
    image: 'https://cf.shopee.co.id/file/729673dc15fb5a4e151b7c6960b25849_tn',
    harga: '21.825',
    diskon: '42%',
    off: 'OFF'
  },
  {
    id: '6',
    image: 'https://cf.shopee.co.id/file/208f3515616180fdfa0b7d8d1d9f46b2_tn',
    harga: '75.000',
    diskon: '80%',
    off: 'OFF'
  },
  {
    id: '7',
    image: 'https://cf.shopee.co.id/file/f596e89fa16bbeb261f57819ffe37b93_tn',
    harga: '63.000',
    diskon: '50%',
    off: 'OFF'
  },
  {
    id: '8',
    image: 'https://cf.shopee.co.id/file/08b680ec057f47f924f84ec0bd131fd9_tn',
    harga: '324.900',
    diskon: '21%',
    off: 'OFF'
  },
  {
    id: '9',
    image: 'https://cf.shopee.co.id/file/df750867e6ebf9bd4c16e33680550865_tn',
    harga: '82.999',
    diskon: '20%',
    off: 'OFF'
  },
  {
    id: '10',
    image: 'https://cf.shopee.co.id/file/6fa7cc7ee6c086df80daa75f3c8f948d_tn',
    harga: '19.800',
    diskon: '99%',
    off: 'OFF'
  }
]

class CardsProduct extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', paddingHorizontal:3, marginBottom: 5}} onPress={() => {this.props.navigation.navigate('DetailProduct', this.props.item)}}>
        <Image source={{uri: this.props.item.thumbnail}} style={{width:'100%', height:194}} />

        <View style={{width:'100%', backgroundColor:'#fff', paddingHorizontal:10, paddingVertical:8}}>
          <Text numberOfLines={2} style={[styles.productTitle, {color:'#000'}]}>{this.props.item.name}</Text>

          <View style={{flexDirection:'row', marginTop:4}}>
            <View style={{flex:1}}>
              <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{color:'#ee4d2d', fontSize:12, marginTop:3.5}}>RP</Text>
                <Text style={{color:'#ee4d2d', fontSize:16}}>{this.props.item.price}</Text>
              </View>
            </View>
            
            <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
              <Text style={{fontSize:8, color:'#000'}}>99 TERJUAL</Text>
            </View>
          </View>
        </View>

      </TouchableOpacity>
    )
  }
}

class FlashSale extends Component {
  render() {
    return (
      <TouchableOpacity style={{flex:1, paddingBottom:10}}>
        <View>
          <ImageBackground source={{ uri: this.props.item.image }} style={{height:134, width:134, resizeMode:'cover', flexDirection:'row', justifyContent:'flex-end'}}>
            <View style={{backgroundColor:'#fcd511', width:'30%', alignItems:'center', height:45}}>
              <Text style={{color:'#ee4d2d', fontSize:14, fontWeight:'700', paddingTop:3}}>{this.props.item.diskon}</Text>
              <Text style={{color:'#fff', fontWeight:'700'}}>{this.props.item.off}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{alignItems:'center', paddingTop:5}}>
          <Text style={{color:'#ee4d2d', fontSize:16}}>Rp{this.props.item.harga}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

class ShopeeLive extends Component {
  render() {
    return (
      <TouchableOpacity style={{flex:1}}>
        <View>
          <ImageBackground source={{uri:this.props.item.image}} style={{height:215, width:133, marginTop:5, marginBottom:5, marginLeft:10}} >
            <View style={{flex:1}}>
              <View style={{flexDirection:'row', padding:7}}>
                <View style={{flex:0.8, backgroundColor:'rgba(0,0,0,.6)', borderRadius:3}}>
                  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                    <View style={{backgroundColor:'#f53d2d', flex:1, alignItems:'center', borderTopLeftRadius:3, borderBottomLeftRadius:3}}>
                      <Text style={{color:'#fff', fontSize:12, padding:2}}><Faf name='dot-circle' /> LIVE</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                      <Text style={{color:'#fff', fontSize:12, padding:2}}><Fa name='eye' /> {this.props.item.see}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex:1, justifyContent:'flex-end', alignItems:'center', paddingBottom:10, paddingHorizontal:5}}>
              <Text style={{justifyContent:'flex-end', color:'#fff'}} numberOfLines={2}>{this.props.item.title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }
}

class ShopeeMall extends Component {
  render() {
    return (
      <TouchableOpacity style={{flex:1, paddingBottom:10}}>
        <View style={{borderWidth:1, borderColor:'rgba(0,0,0,0.087)', marginLeft:10, marginBottom:5}}>
          <Image source={{ uri: this.props.item.image }} style={{height:140, width:134}} />
          <Text style={{color:'rgb(208, 1, 27)',fontWeight:'700', textAlign:'center', marginBottom:10}}>{this.props.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      page: 1,
      scrollY: new Animated.Value(
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
      isLogin: false,
      data: [
        {
          id: '1',
          title: 'Fashion New',
          image: 'https://cf.shopee.co.id/file/65164c330fe5dcd4b549c26ba132b082_mdpi',
          title2: 'Gratis Ongkir Min. Blj RP0',
          image2: 'https://cf.shopee.co.id/file/c5b56ff42e59c067f6ff42b7f8bf8ebb_mdpi',
        },
        {
          id: '2',
          title: 'Shopee Liga 1',
          title2: 'Cashback & Voucher',
          image: 'https://cf.shopee.co.id/file/28af3bde68e263fbb22cf7e721995aca_mdpi',
          image2: 'https://cf.shopee.co.id/file/45d56e0479139407d21058ebf0db2c18_mdpi',
        },
        {
          id: '3',
          image: 'https://cf.shopee.co.id/file/67f3e3f21980f16e56708f90ac824677_mdpi',
          title: 'Produk Digital',
          image2: 'https://cf.shopee.co.id/file/1adc3f8eb48e266fbb2c7a6f96b07632_mdpi',
          title2: 'Shopee Games'
        },
        {
          id: '4',
          image: 'https://cf.shopee.co.id/file/2141bfac013f0ddec9edcead24c5dd3a_mdpi',
          title: 'Serba 10 Ribu',
          image2: 'https://cf.shopee.co.id/file/73cd5727e938469f3a76e75063b38651_mdpi',
          title2: 'Shopee Live'
        },
        {
          id: '5',
          image: 'https://cf.shopee.co.id/file/ed12a75188e87fa8e2abdd22987817cd_mdpi',
          title: 'Men Saleee',
          image2: 'https://cf.shopee.co.id/file/31ae2807a3ba16f6d178d790984ad364_mdpi',
          title2: 'Elektronik Center'
        },
        {
          id: '6',
          image: 'https://cf.shopee.co.id/file/76d3682ef1e8d6509884396c76882b19_mdpi',
          title: 'Shopee Mart',
          image2: 'https://cf.shopee.co.id/file/eda88d3aeb6b530fb474748b3745b2eb_mdpi',
          title2: 'Bayar Di Tempat'
        },
        {
          id: '7',
          image: 'https://cf.shopee.co.id/file/02d68f4802d362eebc2651cf5fffc818_mdpi',
          title: 'Garansi',
          image2: 'https://cf.shopee.co.id/file/089a2d01c0eec65b4dd8868eb9744457_mdpi',
          title2: 'Shopee24'
        },
        {
          id: '8',
          image: 'https://cf.shopee.co.id/file/3cdb64f61f85872896dc005831022c5c_mdpi',
          title: 'Pastin Ada',
          image2: 'https://cf.shopee.co.id/file/cbd3190664937ba29777128f396c54a7_mdpi',
          title2: 'Shopee Grosir'
        },
        {
          id: '9',
          image: 'https://cf.shopee.co.id/file/739145261c83cb94365a04092a2a3d99_mdpi',
          title: 'Koin Receh',
          image2: 'https://cf.shopee.co.id/file/92adf331a35427749be394080dcdb076_mdpi',
          title2: 'Promo Bank'
        },
        {
          id: '10',
          image: 'https://cf.shopee.co.id/file/28f927fafe477945932b2cb571023be7_mdpi',
          title: 'More',
          image2: 'https://cf.shopee.co.id/file/063614d109a1921becac69eb6fafdba7_mdpi',
          title2: 'Semua Promo'
        }
      ]
    };
    this._bootstrapAsync()
  }

  fetchProducts = async () => {
    await this.props.dispatch(fetchProducts())
  }

  fetchCart = async () => {
      const userToken = await AsyncStorage.getItem('Token');
      console.log(this.props)
      await this.props.dispatch(fetchCart(userToken))
  }

  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
        () => {
          this._bootstrapAsync();
        }
    );
    this.props.dispatch(getCategories());
    this.fetchProducts();
    this.fetchCart()
  }
  
  componentWillUnmount() {
    this.willFocusSubscription.remove();
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

  loadMoreFlatlist(){
    
    this.setState({
      page: this.state.page+1
    }, () => {
      this.props.dispatch(fetchProductsMore(this.state.page))
    })

  }

  _renderScrollViewContent() {
    return (
      <React.Fragment>

        <View style={styles.scrollViewContent}>

          <FlatList 
          data={this.state.data}
          keyExtractor={(item, index) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
                <View style={{flex:1, backgroundColor:'#fff', paddingTop:5}}>
                  <TouchableOpacity style={{flexDirection:'row', marginHorizontal:13, marginTop:5, marginBottom:5, justifyContent:'center', width:50, height:60}}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={{uri:item.image}} style={{width:42, height:42}} />
                      <Text numberOfLines={2} style={{fontSize:8, textAlign:'center', color:'#000'}}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection:'row', marginHorizontal:13, marginBottom:10, justifyContent:'center', width:50, height:90}}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={{uri:item.image2}} style={{width:42, height:42}} />
                      <Text style={{fontSize:8, textAlign:'center', color:'#000'}}>{item.title2}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }} />
          
          <View style={{flex:1}}>
            <Image source={require('../assets/img/promo-shopee.jpeg')} style={{height:109, width:'100%'}} />
          </View>

          <View style={{flex:1}}>
            <Image source={require('../assets/img/promo-shopee2.jpeg')} style={{height:80, width:'100%'}} />
          </View>

          <View style={{backgroundColor:'#fff', flex:1}}>
            <View style={{flexDirection:'row', padding:10}}>
              <View style={{flex:1}}>
                <Image source={require('../assets/img/flashsale.png')} style={{height:20, width:80}} />
              </View>
              <View style={{flex:1}}>
                <TouchableOpacity style={{alignItems:'flex-end'}}>
                  <Text>Lihat Lainnya <AntDesign name='right' /></Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
            data={dataFlashSale}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => {
              return (
                <FlashSale item={item} index={index} />
              )
            }} />
          </View>

          <View style={{backgroundColor:'#fff', flex:1, marginTop:10}}>
            <View style={{flexDirection:'row', padding:10}}>
              <View style={{flex:1}}>
                <Text style={{fontSize:16, color:'#ee4d2d'}}>SHOPEE LIVE</Text>
              </View>
              <View style={{flex:1}}>
                <TouchableOpacity style={{alignItems:'flex-end'}}>
                  <Text>Lihat Lainnya <AntDesign name='right' /></Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
            data={dataShopeeLive}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => {
              return (
                <ShopeeLive item={item} index={index} />
              )
            }}
            />
          </View>

          <View style={{backgroundColor:'#fff', flex:1, marginTop:10}}>
            <View style={{flexDirection:'row', padding:10}}>
              <View style={{flex:1}}>
                <Text style={{fontSize:16, color:'#d0011b'}}>SHOPEE MALL</Text>
              </View>
              <View style={{flex:1}}>
                <TouchableOpacity style={{alignItems:'flex-end'}}>
                  <Text>Lihat Lainnya <AntDesign name='right' /></Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection:'row', padding:10}}>
              <View style={{flex:1.7,}}>
                <Text style={{fontSize:13}}><AntDesign name='checkcircleo'/> 7 Hr Pengembalian</Text>
              </View>
              <View style={{flex:1}}>
                <View>
                  <Text style={{fontSize:13}}><AntDesign name='checkcircleo' /> 100% Ori</Text>
                </View>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <View>
                  <Text style={{fontSize:13}}><AntDesign name='checkcircleo' /> Gratis Ongkir</Text>
                </View>
              </View>
            </View>

            <View style={{flexDirection:'row', paddingHorizontal:10, paddingBottom:10}}>
              <View style={{flex:1}}>
                <Image source={{uri:'https://cf.shopee.co.id/file/webp/4e4a42d339d7110186058a2a2a514450'}} style={{height:104, width:'100%'}} />
              </View>
            </View>

            <FlatList 
            data={dataShopeeMall}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => {
              return (
                <ShopeeMall item={item} index={index} />
              )
            }} />

          </View>

          <View style={{flex:1, marginTop:10}}>

            <View style={{flexDirection:'row', backgroundColor:'#fff', padding: 10, borderBottomWidth:1, borderBottomColor:'rgba(0,0,0,0.05)'}}>
              <View style={{flex:1}}>
                <Text style={{color:'#ee4d2d', fontSize:16, fontFamily:'HelveticaNeueMedium', fontWeight:'300'}}>REKOMENDASI</Text>
              </View>

              <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                <TouchableOpacity>
                  <Text>Lihat Lainnya <AntDesign name='right' /></Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList 
            data={this.props.products.data}
            numColumns={2}
            keyExtractor={(item, index) => item._id}
            renderItem={({item, index}) => {
              return (
                <CardsProduct item={item} index={index} navigation={this.props.navigation} />
              )
            }} />

            { (this.props.products.isLoadingMore) ? <View style={{marginTop: 8}}><ActivityIndicator size='large' /></View> : <View/> }

            <View style={{flexDirection:'row', justifyContent:'center', flex:1, backgroundColor:'#fff', borderWidth:1, borderColor:'#ee4d2d', borderRadius:6, marginVertical:15, marginHorizontal:10}}>
              <TouchableOpacity style={{paddingHorizontal:10,paddingVertical:8}} onPress={()=>this.loadMoreFlatlist()}>
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
        "imagePath": "https://cf.shopee.co.id/file/webp/167d17a4d0733942a5853ae5305108cd_xxhdpi", // URL
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

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
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
          barStyle="light-content"
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
            <Carousel
              data={datacarousel}
              autoPlay={true}
              height={HEADER_MAX_HEIGHT}
              navigation={true}
              navigationColor={'#ffffff'}
              navigationType={'bars'}
            />
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { translateY: titleTranslate },
              ],
            },
          ]}
        >

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{flex:2.5, backgroundColor:'#fff',paddingHorizontal:13, paddingVertical:3, justifyContent:'center', borderRadius:3}} onPress={() => {this.props.navigation.navigate('Search')}}>
              <View style={{flexDirection:'row'}}>
                <AntDesign name='search1' size={18} />
                <Text style={{fontSize:16, color:'#ee4d2d', marginLeft:5}}>Sobat Balkon</Text>
              </View>
            </TouchableOpacity>

            <View style={{flex:1, justifyContent:'center', alignItems:'flex-start', padding:8, marginLeft:10}}>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {this.state.isLogin ? this.props.navigation.navigate('Cart') : this.props.navigation.navigate('Login')}}>
                  <AntDesign name='shoppingcart' size={30} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Soon!')}>
                  <AntDesign name='message1' color={'#fff'} size={28} style={{marginLeft:30}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    )
  };
}

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
      backgroundColor: '#ee4d2d',
      overflow: 'hidden',
      height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: HEADER_MAX_HEIGHT,
    },
    bar: {
      flex: 1,
      backgroundColor: 'transparent',
      marginTop: Platform.OS === 'ios' ? 20 : 38,
      height: 37,
      paddingHorizontal:10,
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
      height:hp('41%'), 
      width:wp('50%'), 
      backgroundColor:'#fff'
    },
    productContainer: {
      flex:1, 
      flexDirection:'row', 
      justifyContent:'center', 
      marginBottom:5,
    },
    productImage: {
      height:196.5, 
      width:'100%'
    },
    productTitle: {
      fontFamily:'Helvetica Neue,Helvetica,Roboto,Droid Sans,Arial,sans-serif'
    },
    productPrice: {
      flexDirection:'row', 
      paddingHorizontal:5, 
      paddingTop:2
    }
  });

  const mapStateToProps = state => {
    return {
		  categories: state.categories,
      products: state.products,
      cart: state.cart,
      products: state.products,
      wishlist: state.wishlist
    }
}

// export default connect(state => ({products: state.products}))(Home)

export default connect(mapStateToProps)(Home)
