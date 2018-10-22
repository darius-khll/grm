import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  View,
  Image,
  TextInput,
  Animated,
  FlatList
} from "react-native";
import { createStackNavigator } from "react-navigation";
let { width } = Dimensions.get("window");

class MainPage extends Component {
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

  render() {
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
            style={{ alignItems: "center", width: this.state.animation2 }}
          >
            <TextInput style={{ width: "100%" }} placeholder="Search..." />
            <FlatList
              style={{ width: "100%" }}
              data={[
                {
                  key: "Devin",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jackson",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "James",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Joel",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "John",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jillian",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jimmy",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Julie",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Devin",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jackson",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "James",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Joel",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "John",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jillian",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jimmy",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Julie",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Devin",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jackson",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "James",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Joel",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "John",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "Tuesday 16:05"
                },
                {
                  key: "Jillian",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jimmy",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Julie",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                }
              ]}
              renderItem={({ item }) => {
                return (
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.navigate("ChatPage", {
                        name: item.key
                      })
                    }
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        margin: "1%"
                      }}
                    >
                      <Image source={item.image} style={styles.profileImage} />
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "space-around",
                          marginLeft: "5%",
                          flex: 1
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                          {item.key}
                        </Text>
                        <Text style={{ fontSize: 12 }}>{item.lastMessage}</Text>
                        <View
                          style={{
                            flexDirection: "row-reverse",
                            alignItems: "center"
                          }}
                        >
                          <Text style={{ fontSize: 10, marginRight: "5%" }}>
                            {item.date}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableHighlight>
                );
              }}
            />
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
  profileImage: {
    width: 65,
    height: 65,
    resizeMode: "contain",
    margin: "1%"
  }
});

export default createStackNavigator({
  MainPage: {
    screen: MainPage
  }
});
