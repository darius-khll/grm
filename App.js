/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import SignInPage from "./Components/SignInPage";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import Setting from "./Components/Setting";
import Profile from "./Components/Profile";
import Contacts from "./Components/Contacts";
import ChatPage from "./Components/ChatPage";
import Shop from "./Components/Shop";
import MyProfile from "./Components/MyProfile";
import SearchPage from "./Components/SearchPage";

import { createStackNavigator } from "react-navigation";
import OptionsMenu from "react-native-options-menu";
const MoreIcon = require("./RES/more.png");

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
    SearchPage: {
      screen: SearchPage,
      navigationOptions: {
        title: "Search",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        const tit = navigation.getParam("name", "Unknown");
        return {
          title: tit,
          headerRight: (
            <View
              style={{
                flexDirection: "row-reverse",
                marginLeft: 8,
                alignItems: "center"
              }}
            >
              <OptionsMenu
                button={MoreIcon}
                buttonStyle={{
                  width: 28,
                  height: 32,
                  resizeMode: "contain"
                }}
                destructiveIndex={1}
                options={["Block Contact"]}
                // actions={[this.editPost, this.deletePost]}
              />
            </View>
          ),
          headerStyle: { backgroundColor: "#2196f3" },
          headerTintColor: "#fff"
        };
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
    MyProfile: {
      screen: MyProfile,
      navigationOptions: () => {
        return {
          title: "My Profile",
          headerRight: (
            <View
              style={{
                flexDirection: "row-reverse",
                marginLeft: 8,
                alignItems: "center"
              }}
            >
              <OptionsMenu
                button={MoreIcon}
                buttonStyle={{
                  width: 28,
                  height: 32,
                  resizeMode: "contain"
                }}
                destructiveIndex={1}
                options={["Edit Profile"]}
                // actions={[this.editPost, this.deletePost]}
              />
            </View>
          ),
          headerStyle: { backgroundColor: "#2196f3" },
          headerTintColor: "#fff"
        };
      }
    },
    ChatPage: {
      screen: ChatPage,
      navigationOptions: ({ navigation }) => {
        const tit = navigation.getParam("name", "NO-ID");
        const img = navigation.getParam(
          "image",
          require("./RES/sampleprofileimage.jpg")
        );
        return {
          title: tit,
          headerRight: (
            <View
              style={{
                flexDirection: "row-reverse",
                marginLeft: 8,
                alignItems: "center"
              }}
            >
              <OptionsMenu
                button={MoreIcon}
                buttonStyle={{
                  width: 28,
                  height: 32,
                  resizeMode: "contain"
                }}
                destructiveIndex={1}
                options={["Block Contact"]}
                // actions={[this.editPost, this.deletePost]}
              />
              <TouchableHighlight
                onPress={() =>
                  navigation.navigate("Profile", {
                    name: tit,
                    image: img
                  })
                }
              >
                <Image source={img} style={styles.image} />
              </TouchableHighlight>
              {/* <Text>{tit}</Text> */}
            </View>
          ),
          headerStyle: { backgroundColor: "#2196f3" },
          headerTintColor: "#fff"
        };
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

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 40,
    resizeMode: "contain",
    margin: 2
  }
});
