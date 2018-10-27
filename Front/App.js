/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import "core-js/es6/symbol";
import "core-js/fn/symbol/iterator";
import "es6-symbol/implement";
import "core-js/es6/set";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from "react-native";
import SignInPage from "./Pages/SignInPage";
import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import Setting from "./Pages/Setting";
import Profile from "./Pages/Profile";
import Contacts from "./Pages/Contacts";
import ChatPage from "./Pages/ChatPage";
import Shop from "./Pages/Shop";
import MyProfile from "./Pages/MyProfile";
import SearchPage from "./Pages/SearchPage";
import EditProfile from "./Pages/EditProfile";
import CheckCode from "./Pages/CheckCode";
import Notifications from "./Pages/Notifications";

import { createStackNavigator } from "react-navigation";
import OptionsMenu from "react-native-options-menu";
const MoreIcon = require("./RES/more.png");
let { width } = Dimensions.get("window");

const RootStack = createStackNavigator(
  {
    SignInPage: {
      screen: SignInPage,
      navigationOptions: {
        header: null
      }
    },
    CheckCode: {
      screen: CheckCode,
      navigationOptions: {
        header: null
      }
    },
    MainPage: {
      screen: MainPage,
      navigationOptions: {
        title: "Rich Messenger",
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
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        title: "Edit Profile",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
      }
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        title: "Notifications",
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
      navigationOptions: ({ navigation }) => {
        return {
          title: "Friends",
          headerRight: (
            <View
              style={{
                flexDirection: "row-reverse",
                marginRight: width / 20,
                alignItems: "center"
              }}
            >
              <TouchableHighlight
                onPress={() => navigation.navigate("Notifications")}
              >
                <Image
                  source={require("./RES/notification.png")}
                  style={styles.image}
                />
              </TouchableHighlight>
            </View>
          ),
          headerStyle: { backgroundColor: "#2196f3" },
          headerTintColor: "#fff"
        };
      }
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        title: "My Profile",
        headerStyle: { backgroundColor: "#2196f3" },
        headerTintColor: "#fff"
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
                <Image
                  source={img}
                  style={{
                    width: width / 8,
                    height: width / 8,
                    resizeMode: "contain",
                    marginRight: width / 15
                  }}
                />
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
    resizeMode: "contain"
  }
});
