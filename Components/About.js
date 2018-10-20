import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";
let { width } = Dimensions.get("window");

class About extends Component {
  static navigationOptions = { header: null };

  state = {
    expanded: false,
    animation: new Animated.Value(width / 8),
    animation2: new Animated.Value((7 * width) / 8),
    collapseIcon: "",
    myProfileIcon: "",
    messagesIcon: "",
    contactsIcon: "",
    shopIcon: "",
    settingIcon: "",
    aboutIcon: ""
  };

  toggle() {
    let initialValue = this.state.expanded ? width : width / 8,
      finalValue = this.state.expanded ? width / 8 : width;

    let initialValue2 = this.state.expanded ? 0 : (7 * width) / 8,
      finalValue2 = this.state.expanded ? (7 * width) / 8 : 0;

    this.setState({
      expanded: !this.state.expanded
    });
    this.state.animation.setValue(initialValue);
    this.state.animation2.setValue(initialValue2);

    let animate = Animated.parallel([
      Animated.spring(this.state.animation, {
        toValue: finalValue,
        speed: 2
      }),

      Animated.timing(this.state.animation2, {
        toValue: finalValue2,
        duration: 400
      })
    ]);
    if (!this.state.expanded) {
      this.setState({
        collapseIcon: "Collapse",
        myProfileIcon: "Profile",
        messagesIcon: "Masseges",
        contactsIcon: "Contacts",
        shopIcon: "Shop",
        settingIcon: "Setting",
        aboutIcon: "About"
      });
    } else {
      this.setState({
        collapseIcon: "",
        myProfileIcon: "",
        messagesIcon: "",
        contactsIcon: "",
        shopIcon: "",
        settingIcon: "",
        aboutIcon: ""
      });
    }
    animate.start();
  }

  render() {
    let icon = require("../RES/expand1.png");

    if (this.state.expanded) {
      icon = require("../RES/collapse.png"); //Step 4
    }

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Animated.View
            style={{
              backgroundColor: "gray",
              alignItems: "center",
              justifyContent: "space-between",
              width: this.state.animation
            }}
          >
            <View style={{ alignItems: "center" }}>
              <TouchableHighlight onPress={this.toggle.bind(this)}>
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image style={styles.image} source={icon} />
                    <Text>{this.state.collapseIcon}</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  if (this.state.expanded) {
                    this.toggle();
                  }
                  this.props.navigation.navigate("MyProfile");
                }}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={styles.image}
                      source={require("../RES/profile1.png")}
                    />
                    <Text>{this.state.myProfileIcon}</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("MainPage")}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={styles.image}
                      source={require("../RES/message1.png")}
                    />
                    <Text>{this.state.messagesIcon}</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Contacts")}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={styles.image}
                      source={require("../RES/contacts1.png")}
                    />
                    <Text>{this.state.contactsIcon}</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Shop")}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={styles.image}
                      source={require("../RES/shop1.png")}
                    />
                    <Text>{this.state.shopIcon}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Setting")}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={styles.image}
                      source={require("../RES/setting1.png")}
                    />
                    <Text>{this.state.settingIcon}</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("About")}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={styles.image}
                      source={require("../RES/about1.png")}
                    />
                    <Text>{this.state.aboutIcon}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </Animated.View>
          <Animated.View style={{ width: this.state.animation2 }}>
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
          </Animated.View>
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
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    margin: 2
  }
});

export default createStackNavigator({
  About: {
    screen: About
  }
});
