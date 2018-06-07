import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { inject } from 'mobx-react';
import { ListItem, Header, Card, Button, Icon } from 'react-native-elements';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';

class HomeScreen extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 0, }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >

      <ScrollView tabLabel='List' >
      {

        list.map((l, i) => (
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

class ProfileView extends Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'NO-ID');

    return (
      // implemented with Text and Button as children
      <Card
        title='HELLO WORLD'
        image={require('../../images/splash.jpg')}>
        <Text>{JSON.stringify(name)}</Text>
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

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileView,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class SplashScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <RootStack />;
  }
}

const list = [
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
