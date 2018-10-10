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

// type Props = {};
export default class App extends Component {
  render() {
    return <ChatPage />;
  }
}
