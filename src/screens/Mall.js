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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';

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

export default class Mall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
      entries: [
        {
          image: "https://cf.shopee.co.id/file/c34c7eadcd6376f5f9355f7a26326c93", // URL
        },
        {
          image: "https://cf.shopee.co.id/file/webp/baa1cd10eda6eedbafee8f002ae6b391_xxhdpi",
        },
        {
          image: 'https://cf.shopee.co.id/file/webp/f3824ab80b89d29677eca72163f93565_xxhdpi',
        },
        {
          image: 'https://cf.shopee.co.id/file/webp/1836a466998e4d1f7cca52275028f6be_xxhdpi',
        },
        {
          image: 'https://cf.shopee.co.id/file/webp/abec0363e8defc836985fa884529470a_xxhdpi',
        },
        {
          image: 'https://cf.shopee.co.id/file/webp/286bb3d889034d103f8576cb6119bc71_xxhdpi',
        },
      ]
    };
  }

  _renderScrollViewContent() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
  
  _renderItem ({item, index}) {
    return (
      <View>
          <Image source={{ uri: item.image }} />
      </View>
  );}

  render(){
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
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={150}
              itemWidth={100}
            />
          </Animated.View>
        </Animated.View>
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

          <Image source={require('../assets/icon/left-arrow.png')} style={{position:'absolute', top:7, left:13, width:24, height:24}} />

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