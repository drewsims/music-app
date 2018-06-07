import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDHc8xvO15D7OzsDGw9vkz6xIyv6CguBIg",
    authDomain: "dinder-6c407.firebaseapp.com",
    databaseURL: "https://dinder-6c407.firebaseio.com",
    projectId: "dinder-6c407",
    storageBucket: "dinder-6c407.appspot.com",
    messagingSenderId: "616309919030"
  };




export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config)
    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG() {
    return this.loginBG
  }
}
