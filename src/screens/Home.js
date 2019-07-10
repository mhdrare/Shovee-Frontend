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
  FlatList
} from 'react-native';
import dummyData from '../components/dummydata/index.product';
import Carousel from 'react-native-smart-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class CardsProduct extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.productContainer}>
        <TouchableOpacity style={styles.productItem} onPress={() => {this.props.navigation.navigate('DetailProduct')}}>
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

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
    };
  }

  _renderScrollViewContent() {
    return (
      <React.Fragment>

        <View style={styles.scrollViewContent}>
          <Image source={require('../assets/img/promo-shopee.jpeg')} style={{height:109, width:'100%'}} />
          <Image source={require('../assets/img/promo-shopee2.jpeg')} style={{height:90, width:'100%'}} />

          <Image source={require('../assets/img/header-promo.jpeg')} style={{height:41, width:411}} />
          <View style={{width:411, height:200, backgroundColor:'#e3ebfe', padding:10}}>
            <View style={{flexDirection:'row', flex:1}}>
            </View>
          </View>

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
          <TouchableWithoutFeedback>
            <View style={{width:'70%', height:40, backgroundColor:'#fff', borderRadius:3, flex:1, flexDirection:'column', justifyContent:'center', marginBottom:5}}>
              <Text style={{alignItems:'flex-start', color:'#F36B2C', fontSize:17, marginLeft:'18%'}}>Shovee</Text>
            </View>
          </TouchableWithoutFeedback>

          <Image source={require('../assets/icon/search.png')} style={{position:'absolute', top:7, left:13, width:20, height:20}} />

          <TouchableHighlight style={{position:'absolute', top:7, right:'20%'}}>
            <MaterialCommunityIcons name="cart-outline" size={24} color={'#FFFFFF'}/>
          </TouchableHighlight>

          <TouchableHighlight style={{position:'absolute', top:4, right:'7%'}}>
            <SimpleLineIcons name="bubbles" size={28} color={'white'}/>
          </TouchableHighlight>

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
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: null,
      height: HEADER_MAX_HEIGHT,
      resizeMode: 'cover',
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
      marginTop: Platform.OS !== 'ios' ? 30 : 0,
      paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
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
      marginBottom:5
    },
    productImage: {
      height:196.5, 
      width:'100%'
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