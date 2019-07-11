import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Text } from 'react-native';

export default class Mall extends Component {

    state = {
      entries: ['https://cf.shopee.co.id/file/webp/167d17a4d0733942a5853ae5305108cd_xxhdpi','https://cf.shopee.co.id/file/webp/baa1cd10eda6eedbafee8f002ae6b391_xxhdpi','https://cf.shopee.co.id/file/webp/f3824ab80b89d29677eca72163f93565_xxhdpi']
    }

    _renderItem ({item, index}) {
        return (
            <View>
                <Text>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={300}
              itemWidth={300}
            />
        );
    }
}