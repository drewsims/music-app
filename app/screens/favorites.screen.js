import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { inject } from 'mobx-react';
import { ListItem, Card, Button, Icon } from 'react-native-elements';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Marker } from 'react-native-maps';
//@inject("stores")
export default class FavoritesScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 0, backgroundColor: "white" }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar backgroundColor='#33ccff'/>}
      >

      <ScrollView tabLabel='List' >
      {
        users.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            onPress={() => {this.props.navigation.navigate('Profile',
             { name: l.name,});
           }}
          />
        ))
      }
    </ScrollView>
    <View tabLabel='Map' style ={styles.containerMap}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            <MapView.Marker
                        coordinate={{latitude: 37.78825,
                        longitude: -122.4324}}
                        title={"title"}
                        description={"description"}
                     />
            </MapView>
          </View>
      </ScrollableTabView>
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
