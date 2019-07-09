import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  TouchableHighlight
} from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

const HEADER_MAX_HEIGHT = 220;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class Home extends Component {
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
    const data = Array.from({ length: 10 });
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) => (
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    );
  }

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
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={require('./src/assets/img/shopeefeed.jpeg')}
          />
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

          <Image source={require('./src/assets/icon/search.png')} style={{position:'absolute', top:7, left:13, width:20, height:20}} />

          <TouchableHighlight style={{position:'absolute', top:7, right: 80}}>
            <Image source={require('./src/assets/icon/shopcart.png')} style={{width:24, height:24}} />
          </TouchableHighlight>

          <TouchableHighlight style={{position:'absolute', top:7, right: 30}}>
            <Image source={require('./src/assets/icon/chat.png')} style={{width:28, height:28}} />
          </TouchableHighlight>

        </Animated.View>
      </View>
    )
  };
}

class Feed extends Component {
  render() {  
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Feed</Text>
      </View>
    );
  };
}

class Mail extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Mail</Text>
      </View>
    );
  };
}

class Notification extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Notification</Text>
      </View>
    );
  };
}

class Me extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Me</Text>
      </View>
    );
  };
}

const AppTabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={22} />
      )
    },
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="feed" color={tintColor} size={22} />
      )
    }
  },
  Mail: {
    screen: Mail,
    navigationOptions: {
      tabBarLabel: 'Mail',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="envelope" color={tintColor} size={22} />
      )
    }
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      tabBarLabel: 'Notify',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bell" color={tintColor} size={22} />
      )
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" color={tintColor} size={22} />
      )
    }
  },
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'grey',
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 9,
      marginTop: 1
    },
    style: {
      backgroundColor: '#f2f2f2',
      elevation: 15,
      height: 50
    },
    indicatorStyle: {
      height: 0
    },
    showIcon: true
  }
})

const AppNavigator = createAppContainer(AppTabNavigator)

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        <AppNavigator />
      </SafeAreaView>
    );
  }
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
    backgroundColor: '#ccc',
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
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});