import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import { createStackNavigator } from "react-navigation";
import SideBar from "../Parts/SideBar";
let { width } = Dimensions.get("window");

class About extends Component {
  static navigationOptions = { header: null };

  state = {
    expanded: false,
    animation: new Animated.Value(width / 8),
    animation2: new Animated.Value((7 * width) / 8),
    collapseText: "",
    myProfileText: "",
    messagesText: "",
    contactsText: "",
    shopText: "",
    settingText: "",
    aboutText: "",
    collapseIcon: require("../RES/expand1.png"),
    myProfileIcon: require("../RES/profile1.png"),
    messagesIcon: require("../RES/message1.png"),
    contactsIcon: require("../RES/contacts1.png"),
    shopIcon: require("../RES/shop1.png"),
    settingIcon: require("../RES/setting1.png"),
    aboutIcon: require("../RES/about1.png"),
    imageStyle: {
      width: (0.85 * width) / 8,
      height: (0.85 * width) / 8,
      resizeMode: "contain",
      margin: 2
    },
    textStyle: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: "3%"
    }
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
        duration: 800
      })
    ]);
    if (!this.state.expanded) {
      this.setState({
        collapseText: "Collapse",
        myProfileText: "Profile",
        messagesText: "Masseges",
        contactsText: "Contacts",
        shopText: "Shop",
        settingText: "Setting",
        aboutText: "About",
        collapseIcon: "",
        myProfileIcon: "",
        messagesIcon: "",
        contactsIcon: "",
        shopIcon: "",
        settingIcon: "",
        aboutIcon: "",
        imageStyle: {
          width: 0,
          height: 0
        }
      });
    } else {
      this.setState({
        collapseText: "",
        myProfileText: "",
        messagesText: "",
        contactsText: "",
        shopText: "",
        settingText: "",
        aboutText: "",
        collapseIcon: require("../RES/expand1.png"),
        myProfileIcon: require("../RES/profile1.png"),
        messagesIcon: require("../RES/message1.png"),
        contactsIcon: require("../RES/contacts1.png"),
        shopIcon: require("../RES/shop1.png"),
        settingIcon: require("../RES/setting1.png"),
        aboutIcon: require("../RES/about1.png"),
        imageStyle: {
          width: (0.85 * width) / 8,
          height: (0.85 * width) / 8,
          resizeMode: "contain",
          margin: 2
        }
      });
    }
    animate.start();
  }

  navigationToMyProfile() {
    this.props.navigation.navigate("MyProfile");
  }
  navigationToMainPage() {
    this.props.navigation.navigate("MainPage");
  }
  navigationToShop() {
    this.props.navigation.navigate("Shop");
  }
  navigationToContacts() {
    this.props.navigation.navigate("Contacts");
  }
  navigationToSetting() {
    this.props.navigation.navigate("Setting");
  }
  navigationToAbout() {
    this.props.navigation.navigate("About");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <SideBar
            width={this.state.animation}
            toggle={this.toggle.bind(this)}
            expanded={this.state.expanded}
            imageStyle={this.state.imageStyle}
            textStyle={this.state.textStyle}
            collapseIcon={this.state.collapseIcon}
            collapseText={this.state.collapseText}
            myProfileIcon={this.state.myProfileIcon}
            myProfileText={this.state.myProfileText}
            messagesIcon={this.state.messagesIcon}
            messagesText={this.state.messagesText}
            contactsIcon={this.state.contactsIcon}
            contactsText={this.state.contactsText}
            shopIcon={this.state.shopIcon}
            shopText={this.state.shopText}
            settingIcon={this.state.settingIcon}
            settingText={this.state.settingText}
            aboutIcon={this.state.aboutIcon}
            aboutText={this.state.aboutText}
            navigationToMyProfile={this.navigationToMyProfile.bind(this)}
            navigationToMainPage={this.navigationToMainPage.bind(this)}
            navigationToContacts={this.navigationToContacts.bind(this)}
            navigationToShop={this.navigationToShop.bind(this)}
            navigationToSetting={this.navigationToSetting.bind(this)}
            navigationToAbout={this.navigationToAbout.bind(this)}
          />
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
  }
});

export default createStackNavigator({
  About: {
    screen: About
  }
});
