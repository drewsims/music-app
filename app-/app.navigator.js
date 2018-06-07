import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import FavoritesScreen from './screens/favorites.screen';

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
const RouteConfig = {
  initialRoute: 'Splash'
}
const AppNavigator = DrawerNavigator({
  Splash: Splash,
  Login: Login,
  Favorites: Favorites
},RouteConfig)

export default AppNavigator;
