import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
  Dimensions,
  Animated,
  SectionList,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "Add New Member",
    icon: require("../RES/addnewcontact.png"),
    color: "black",
    name: "addNewContact",
    position: 2
  },
  {
    text: "Search",
    color: "black",
    icon: require("../RES/search.png"),
    name: "search",
    position: 1
  }
];
let { width } = Dimensions.get("window");

class Contacts extends Component {
  static navigationOptions = { header: null };

  state = {
    modal1Visible: false,
    modal2Visible: false,
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

  setModal1Invisible() {
    this.setState({ modal1Visible: false });
  }
  setModal2Invisible() {
    this.setState({ modal2Visible: false });
  }
  setModal2Visible() {
    this.setState({ modal2Visible: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modal1Visible}
          onRequestClose={() => {
            this.setModal1Invisible();
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.5)"
            }}
          >
            {this.props.children}
            <View
              style={{
                borderWidth: 1.5,
                padding: 5,
                backgroundColor: "white",
                width: "85%"
              }}
            >
              <Text
                style={{ marginBottom: "5%", fontWeight: "bold", fontSize: 20 }}
              >
                Add New Contact
              </Text>
              <Text>Please Enter The Number of your new contact: </Text>
              <TextInput
                placeholder="Number"
                textContentType="telephoneNumber"
                style={{
                  marginTop: 5,
                  padding: 0,
                  borderBottomWidth: 0.5,
                  width: "70%"
                }}
              />
              <View
                style={{
                  marginTop: "10%",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-end"
                }}
              >
                <TouchableHighlight
                  onPress={() => {
                    this.setModal1Invisible();
                    this.setModal2Visible();
                  }}
                  style={{
                    borderWidth: 0.5,
                    padding: 3,
                    margin: 2,
                    marginBottom: 10
                  }}
                >
                  <Text>Search For This Contact</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    borderWidth: 0.5,
                    padding: 3,
                    margin: 2,
                    marginBottom: 10
                  }}
                  onPress={() => this.setModal1Invisible()}
                >
                  <Text>Cancle</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modal2Visible}
          onRequestClose={() => {
            this.setModal2Invisible();
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.5)"
            }}
          >
            {this.props.children}
            <View
              style={{
                borderWidth: 1.5,
                padding: 5,
                backgroundColor: "white",
                width: "85%"
              }}
            >
              <Text
                style={{ marginBottom: "5%", fontWeight: "bold", fontSize: 20 }}
              >
                Contact Found!
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../RES/sampleprofileimage.jpg")} />
                <TextInput
                  textContentType="name"
                  style={{ borderBottomWidth: 0.5, padding: 1, marginLeft: 10 }}
                  textContentType="name"
                  placeholder="name from server"
                />
              </View>
              <View
                style={{
                  marginTop: "10%",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-end"
                }}
              >
                <TouchableHighlight
                  onPress={() => {
                    this.setModal2Invisible();
                  }}
                  style={{
                    borderWidth: 0.5,
                    padding: 3,
                    margin: 2,
                    marginBottom: 10
                  }}
                >
                  <Text>Add</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    borderWidth: 0.5,
                    padding: 3,
                    margin: 2,
                    marginBottom: 10
                  }}
                  onPress={() => this.setModal2Invisible()}
                >
                  <Text>Cancle</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
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
            style={{ width: this.state.animation2, alignItems: "center" }}
          >
            <TextInput placeholder="Search..." />
            <SectionList
              style={{ width: "100%" }}
              sections={[
                {
                  title: "A",
                  data: [
                    {
                      name: "Ali",
                      image: require("../RES/sampleprofileimage.jpg")
                    },
                    {
                      name: "Arash",
                      image: require("../RES/sampleprofileimage.jpg")
                    }
                  ]
                },
                {
                  title: "J",
                  data: [
                    {
                      name: "Jason",
                      image: require("../RES/sampleprofileimage.jpg")
                    },
                    {
                      name: "Jili",
                      image: require("../RES/sampleprofileimage.jpg")
                    }
                  ]
                },
                {
                  title: "F",
                  data: [
                    {
                      name: "Farid",
                      image: require("../RES/sampleprofileimage.jpg")
                    },
                    {
                      name: "Farbod",
                      image: require("../RES/sampleprofileimage.jpg")
                    }
                  ]
                },
                {
                  title: "Y",
                  data: [
                    {
                      name: "Yazdan",
                      image: require("../RES/sampleprofileimage.jpg")
                    },
                    {
                      name: "Yas",
                      image: require("../RES/sampleprofileimage.jpg")
                    }
                  ]
                }
              ]}
              renderItem={({ item }) => {
                return (
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.navigate("Profile", {
                        name: item.name,
                        image: item.image
                      })
                    }
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        margin: 2,
                        alignItems: "center"
                      }}
                    >
                      <Image source={item.image} style={styles.profileImage} />
                      <Text style={{ margin: 5 }}>{item.name}</Text>
                    </View>
                  </TouchableHighlight>
                );
              }}
              renderSectionHeader={({ section }) => (
                <View
                  style={{
                    borderTopWidth: 2,
                    width: "90%",
                    marginLeft: "5%",
                    alignItems: "center",
                    borderBottomWidth: 2
                  }}
                >
                  <Text style={{ marginLeft: 5 }}>{section.title}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index}
            />
          </Animated.View>
        </View>
        <FloatingAction
          visible={!this.state.expanded}
          actions={actions}
          color="black"
          onPressItem={name => {
            if (name === "search") this.props.navigation.navigate("SearchPage");
            else if (name === "addNewContact")
              this.setState({ modal1Visible: true });
          }}
        />
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
  },
  profileImage: {
    marginRight: 30,
    width: 75,
    height: 75,
    resizeMode: "contain",
    margin: 2
  }
});

export default createStackNavigator({
  Contacts: {
    screen: Contacts
  }
});
