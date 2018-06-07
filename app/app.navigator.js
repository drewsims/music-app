import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import FavoritesScreen from './screens/favorites.screen';
import ProfileScreen from './screens/profile.screen';

const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}
const Login = {
  screen: LoginScreen,
  navigationOptions: {
    header: null
  }
}
const Favorites = {
  screen: FavoritesScreen,
  navigationOptions: {
    header: null
  }
}
const Profile = {
  screen: ProfileScreen,
  navigationOptions: {
    header: null
  }
}
const RouteConfig = {
  initialRoute: 'Splash'
}
const AppNavigator = DrawerNavigator({
  Home: Splash,
  Login: Login,
  Favorites: Favorites,
  Profile: Profile
},RouteConfig)

export default AppNavigator;
