/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import SignInPage from "./Components/SignInPage";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import Setting from "./Components/Setting";
import Profile from "./Components/Profile";
import Contacts from "./Components/Contacts";
import ChatPage from "./Components/ChatPage";
import Shop from "./Components/Shop";

import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator(
  {
    SignInPage: {
      screen: SignInPage
    },
    MainPage: {
      screen: MainPage
    },
    About: {
      screen: About
    },
    Setting: {
      screen: Setting
    },
    Profile: {
      screen: Profile
    },
    Contacts: {
      screen: Contacts
    },
    ChatPage: {
      screen: ChatPage
    },
    Shop: {
      screen: Shop
    }
  },
  {
    initialRouteName: "SignInPage",
    navigationOptions: {
      // header: null,
      // headerVisible: false,
      // headerMode: "none"
    }
  }
);

// type Props = {};
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
