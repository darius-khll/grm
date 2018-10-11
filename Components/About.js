import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ backgroundColor: "gray", justifyContent: "space-between" }}
          >
            <View>
              <TouchableHighlight>
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/expand.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Profile")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/profile.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("MainPage")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/message.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Contacts")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/contact.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Shop")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/shop.png")}
                  />
                </View>
              </TouchableHighlight>
            </View>
            <View style={StyleSheet.downLeftBand}>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Setting")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/setting.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("About")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/about.png")}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <Text style={styles.welcome}>Welcome to Rich Messenger</Text>
            <Text style={styles.version}>Rich Messenger Version 1.0.0 </Text>
            <Text style={styles.creators}>
              Created By Ali Khalili & Arash Heidary
            </Text>
            <Text style={{ marginBottom: 2, textAlign: "center" }}>
              Website: www.richmessenger.com
            </Text>
            <Text style={{ marginBottom: 30, textAlign: "center" }}>
              E-Mail: info@richmessenger.com
            </Text>
            <Text style={{ textAlign: "center" }}>©2018</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2deef"
  },
  welcome: {
    fontSize: 25,
    textAlign: "center",
    margin: 30,
    marginBottom: 12
  },
  version: {
    textAlign: "center",
    color: "#9B59B6",
    marginBottom: 180
  },
  creators: {
    textAlign: "center",
    marginBottom: 15
  }
});

export default createStackNavigator({
  About: {
    screen: About
  }
});
