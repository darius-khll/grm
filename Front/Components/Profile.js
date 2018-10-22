import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  Dimensions,
  TouchableHighlight,
  Image
} from "react-native";
import { createStackNavigator } from "react-navigation";
let { width } = Dimensions.get("window");

class Profile extends Component {
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
    },
    profileImage: {
      marginRight: 30,
      width: 75,
      height: 75,
      resizeMode: "contain",
      margin: 2
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
        },
        profileImage: {
          marginRight: 0,
          width: 0,
          height: 0,
          resizeMode: "contain",
          margin: 2
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
        },
        profileImage: {
          marginRight: 30,
          width: 75,
          height: 75,
          resizeMode: "contain",
          margin: 2
        }
      });
    }
    animate.start();
  }

  render() {
    const profileImage = this.props.navigation.getParam(
      "image",
      require("../RES/myprofile.jpg")
    );
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Animated.View
            style={{
              backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "space-between",
              width: this.state.animation
            }}
          >
            <View style={{ alignItems: "center" }}>
              <TouchableHighlight onPress={this.toggle.bind(this)}>
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={this.state.imageStyle}
                      source={this.state.collapseIcon}
                    />
                    <Text style={this.state.textStyle}>
                      {this.state.collapseText}
                    </Text>
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
                      style={this.state.imageStyle}
                      source={this.state.myProfileIcon}
                    />
                    <Text style={this.state.textStyle}>
                      {this.state.myProfileText}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  if (this.state.expanded) {
                    this.toggle();
                  }
                  this.props.navigation.navigate("MainPage");
                }}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={this.state.imageStyle}
                      source={this.state.messagesIcon}
                    />
                    <Text style={this.state.textStyle}>
                      {this.state.messagesText}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  if (this.state.expanded) {
                    this.toggle();
                  }
                  this.props.navigation.navigate("Contacts");
                }}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={this.state.imageStyle}
                      source={this.state.contactsIcon}
                    />
                    <Text style={this.state.textStyle}>
                      {this.state.contactsText}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  if (this.state.expanded) {
                    this.toggle();
                  }
                  this.props.navigation.navigate("Shop");
                }}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={this.state.imageStyle}
                      source={this.state.shopIcon}
                    />
                    <Text style={this.state.textStyle}>
                      {this.state.shopText}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableHighlight
                onPress={() => {
                  if (this.state.expanded) {
                    this.toggle();
                  }
                  this.props.navigation.navigate("Setting");
                }}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={this.state.imageStyle}
                      source={this.state.settingIcon}
                    />
                    <Text style={this.state.textStyle}>
                      {this.state.settingText}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  if (this.state.expanded) {
                    this.toggle();
                  }
                  this.props.navigation.navigate("About");
                }}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={this.state.imageStyle}
                      source={this.state.aboutIcon}
                    />
                    <Text style={this.state.textStyle}>
                      {this.state.aboutText}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              width: this.state.animation2,
              marginTop: 6,
              alignItems: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly"
              }}
            >
              <Image style={this.state.profileImage} source={profileImage} />
              <View>
                <Button title="Add to Contacts" />
                {/*This Button should be evaluated.*/}
              </View>
            </View>
            <Text
              style={{
                margin: 5,
                marginTop: 15,
                borderBottomWidth: 0.5,
                width: "85%"
              }}
            >
              Bio
            </Text>
            <Text
              style={{
                width: "80%"
              }}
            >
              Bio From The Server
            </Text>
            <Text
              style={{
                margin: 5,
                marginTop: 15,
                borderBottomWidth: 0.5,
                width: "85%"
              }}
            >
              General Informations
            </Text>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Name:</Text>
              <Text>Name Of Person From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Age:</Text>
              <Text>Age of Person From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Gender:</Text>
              <Text>From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>ID:</Text>
              <Text>ID From Server</Text>
            </View>
            <Text
              style={{
                margin: 5,
                marginTop: 15,
                borderBottomWidth: 0.5,
                width: "85%"
              }}
            >
              Location Informations
            </Text>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Country:</Text>
              <Text>Country From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>City:</Text>
              <Text>City from Server</Text>
            </View>
            <Text
              style={{
                margin: 5,
                marginTop: 15,
                borderBottomWidth: 0.5,
                width: "85%"
              }}
            >
              Contact Informations
            </Text>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Phone Number:</Text>
              <Text>From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Email:</Text>
              <Text>From Server</Text>
            </View>
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
  }
});

export default createStackNavigator({
  Profile: {
    screen: Profile
  }
});
