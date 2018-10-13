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
      navigationOptions: ({ navigation }) => {
        const tit = navigation.getParam("name", "Your Profile");
        return {
          title: tit,
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
      navigationOptions: {
        title: "Your Profile",
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
                marginLeft: 40,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
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
    width: 50,
    height: 50,
    marginRight: 20,
    resizeMode: "contain",
    margin: 2
  }
});
