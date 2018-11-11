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
import OptionsMenu from "react-native-options-menu";
import About from "./Pages/About";
import Setting from "./Pages/Setting";
import Profile from "./Pages/Profile";
import Stickers from "./Pages/Stickers";
import Themes from "./Pages/Themes";
import Contacts from "./Pages/Contacts";
import ChatPage from "./Pages/ChatPage";
import Shop from "./Pages/Shop";
import MyProfile from "./Pages/MyProfile";
import SearchPage from "./Pages/SearchPage";
import EditProfile from "./Pages/EditProfile";
import CheckCode from "./Pages/CheckCode";
import Notifications from "./Pages/Notifications";
import PayPage from "./Pages/PayPage";

import { createStackNavigator, HeaderBackButton } from "react-navigation";

let { width } = Dimensions.get("window");
const MoreIcon = require("./RES/more.png");

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
    PayPage: {
      screen: PayPage,
      navigationOptions: {
        header: null
      }
    },
    MainPage: {
      screen: MainPage,
      navigationOptions: { header: null }
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        header: null
      }
    },
    Stickers: {
      screen: Stickers,
      navigationOptions: {
        header: null
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        header: null
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        header: null
      }
    },
    SearchPage: {
      screen: SearchPage,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Search",
          headerStyle: { backgroundColor: "#2196f3" },
          headerTintColor: "#000",
          headerLeft: (
            <HeaderBackButton onPress={() => navigation.goBack(null)} />
          )
        };
      }
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        header: null
      }
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null
      }
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        header: null
      }
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        header: null
      }
    },
    ChatPage: {
      screen: ChatPage,
      navigationOptions: ({ navigation }) => {
        const tit = navigation.getParam("name", "NO-ID");
        const img = navigation.getParam(
          "image",
          require("./RES/anonymous.png")
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
            </View>
          ),
          headerStyle: { backgroundColor: "#2196f3" },
          headerTintColor: "#000",
          headerLeft: (
            <HeaderBackButton onPress={() => navigation.goBack(null)} />
          )
        };
      }
    },
    Shop: {
      screen: Shop,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "SignInPage"
  }
);

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
