import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { inject } from 'mobx-react';
import { ListItem, Card, Button, Icon } from 'react-native-elements';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

//@inject("stores")
export default class FavoritesScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      // implemented with Text and Button as children
      <Card
        title='HELLO WORLD'
        image={require('../../images/splash.jpg')}>

        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          fontFamily='Lato'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>

    );
  }
}

const users = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
})
