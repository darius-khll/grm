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
      screen: SignInPage,
      navigationOptions: {
        header: null
      }
    },
    MainPage: {
      screen: MainPage,
      navigationOptions: {
        title: "Chats",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        title: "About",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        title: "Setting",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
      }
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: "Contacts",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
      }
    },
    ChatPage: {
      screen: ChatPage,
      navigationOptions: {
        title: "Chats",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
      }
    },
    Shop: {
      screen: Shop,
      navigationOptions: {
        title: "Shop",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
      }
    }
  },
  {
    initialRouteName: "SignInPage"
  }
);

// type Props = {};
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
