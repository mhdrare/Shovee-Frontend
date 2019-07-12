import React, { Component } from 'react';
import { connect } from 'react-redux'
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getCategories } from '../public/redux/actions/categories';
import { fetchProducts } from '../public/redux/actions/product';
import { fetchCart } from '../public/redux/actions/cart';

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

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
              <Text style={{fontSize:10, color:'#000'}}>99999 TERJUAL</Text>
            </View>
          </View>
        </View>

      </TouchableOpacity>
    )
  }
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
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

  }

  componentDidMount() {
    this.fetchProducts()

  }

  fetchProducts = async () => {
    await this.props.dispatch(fetchProducts())
  }

  fetchCart = async () => {
    await this.props.dispatch(fetchCart())
  }

  componentDidMount() {
    this.props.dispatch(getCategories());
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
                  <View style={{flexDirection:'row', marginHorizontal:13, marginTop:5, marginBottom:5, justifyContent:'center', width:50, height:60}}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={{uri:item.image}} style={{width:42, height:42}} />
                      <Text numberOfLines={2} style={{fontSize:8, textAlign:'center', color:'#000'}}>{item.title}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', marginHorizontal:13, marginBottom:10, justifyContent:'center', width:50, height:90}}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                      <Image source={{uri:item.image2}} style={{width:42, height:42}} />
                      <Text style={{fontSize:8, textAlign:'center', color:'#000'}}>{item.title2}</Text>
                    </View>
                  </View>
                </View>
              )
            }} />
          
          <View style={{flex:1}}>
            <Image source={require('../assets/img/promo-shopee.jpeg')} style={{height:109, width:'100%'}} />
          </View>

          <View style={{flex:1}}>
            <Image source={require('../assets/img/promo-shopee2.jpeg')} style={{height:80, width:'100%'}} />
          </View>

          <Image source={require('../assets/img/header-promo.jpeg')} style={{height:41, width:'100%'}} />

          <View style={{flex:1}}>

            <View style={{flexDirection:'row', backgroundColor:'#fff', padding: 10, borderBottomWidth:1, borderBottomColor:'rgba(0,0,0,0.05)'}}>
              <View style={{flex:1}}>
                <Text style={{color:'#ee4d2d', fontSize:19, fontFamily:'HelveticaNeueMedium', fontWeight:'300'}}>REKOMENDASI</Text>
              </View>

              <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                <TouchableOpacity>
                  <Text>Lihat Lainnya &gt;</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList 
            data={this.props.products.produk.data}
            numColumns={2}
            keyExtractor={(item, index) => item._id}
            renderItem={({item, index}) => {
              return (
                <CardsProduct item={item} index={index} navigation={this.props.navigation} />
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
                <TouchableOpacity>
                  <AntDesign name='shoppingcart' size={30} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity>
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
    products: state.products
    }
}

export default connect(mapStateToProps)(Home)
