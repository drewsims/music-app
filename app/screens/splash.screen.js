import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { inject } from 'mobx-react';
import { ListItem, Header, Card, Button, Icon, CheckBox, Rating } from 'react-native-elements';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';


export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
      this.state = {
        checked:false,};
  }
  render() {
    return <RootStack />;
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
     headerTitle: 'LogoTitle',
     // headerRight: (
     //   <Button
     //     onPress={() => alert('This is a button!')}
     //     title="Info"
     //     color="#fff"
     //   />
     // ),
   };

  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 0, backgroundColor: "white" }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar backgroundColor='#33ccff'/>}
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
  state = {
    checked:false,};
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'NO-ID');
    const HEADPHONE_IMAGE = require('../../images/headphones.jpg');

    return (
        <ScrollView>{
      // implemented with Text and Button as children
      <Card
        title={JSON.stringify(name)}
        image={require('../../images/splash.jpg')}>

      <Rating
        type='custom'
        ratingImage={HEADPHONE_IMAGE}
        ratingCount={5}
        imageSize={60}
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }}
      />
        <CheckBox
          title="Favorite"
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}/>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <View backgroundColor= '#cccccc'>
          {
            listProfile.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
              />
            ))
          }
        </View>
      </Card>
    }
        </ScrollView>
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
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#33ccff',
      },
      headerTitleStyle: {
        fontWeight: 'bold', textAlign:'center',flex: 1,
      },
    },
  }
);

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    description:'',
    location:{
    latitude:'',
    longitude:''
  },
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    location:{
    latitude:'',
    longitude:''
  },
  }
]

const listProfile = [
  {
    title: 'Credentials'
  },
  {
    title: 'Examples'
  },
  {
    title: 'Services'
  },
  {
    title: 'Reviews'
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
