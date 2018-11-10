import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  Image
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import profileStore from "../MobX/ProfileStore";
import toggler from "../APIs/toggler";
import SideBar from "../Components/SideBar";
import { observer } from "mobx-react";
import Wallpaper from "../Components/Wallpaper";
import OptionsMenu from "react-native-options-menu";
import Axios from "axios";

let { width } = Dimensions.get("window");
const MoreIcon = require("../RES/more.png");

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/profile"
});

@observer
class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
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
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };
  state = {
    animation: new Animated.Value(width / 8),
    animation2: new Animated.Value((7 * width) / 8),
    profileImage: {
      marginRight: width / 12,
      width: width / 4.8,
      height: width / 4.8,
      resizeMode: "contain",
      margin: width / 180
    },
    imageStyle: {
      width: (0.85 * width) / 8,
      height: (0.85 * width) / 8,
      resizeMode: "contain",
      margin: "3%"
    }
  };

  componentWillMount() {
    this.props.navigation.addListener("didBlur", () => {
      if (profileStore.expanded) this.toggle();
    });
    requester
      .get("/get", {
        params: {
          uniqueId: "_id"
        }
      })
      .then(response => {
        if (response.status === 200) {
          profileStore.bio = response.data.bio;
          profileStore.name = response.data.name;
          profileStore.age = response.data.age;
          profileStore.gender = response.data.gender;
          profileStore.id = response.data.id;
          profileStore.country = response.data.country;
          profileStore.city = response.data.city;
          profileStore.phoneNumber = response.data.phoneNumber;
          profileStore.email = response.data.email;
          profileStore.tags = response.data.tags;
          profileStore.addingStatus = response.data.addingStatus;
        }
      });
    this.buttonDecider();
  }

  buttonDecider() {
    if (profileStore.addingStatus === "notAdded") {
      profileStore.buttonText = "Add to Friends";
    } else if (profileStore.addingStatus === "waiting") {
      profileStore.buttonText = `Cancle  Friend
      Request`;
    } else if (profileStore.addingStatus === "added") {
      profileStore.buttonText = "Send a Message";
    } else if (profileStore.addingStatus === "responsing") {
      profileStore.buttonText = "accept";
    }
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

  toggle() {
    let initialValue = profileStore.expanded ? width : width / 8,
      finalValue = profileStore.expanded ? width / 8 : width;

    let initialValue2 = profileStore.expanded ? 0 : (7 * width) / 8,
      finalValue2 = profileStore.expanded ? (7 * width) / 8 : 0;

    profileStore.expanded = !profileStore.expanded;
    this.state.animation.setValue(initialValue);
    this.state.animation2.setValue(initialValue2);

    let animate = Animated.parallel([
      Animated.spring(this.state.animation, {
        toValue: finalValue,
        speed: 2
      }),

      Animated.timing(this.state.animation2, {
        toValue: finalValue2,
        duration: 600
      })
    ]);
    if (profileStore.expanded) {
      this.setState({
        imageStyle: {
          width: 0,
          height: 0
        },
        profileImage: {
          width: 0,
          height: 0
        }
      });
    } else {
      this.setState({
        imageStyle: {
          width: (0.85 * width) / 8,
          height: (0.85 * width) / 8,
          resizeMode: "contain",
          margin: 2
        },
        profileImage: {
          width: 75,
          height: 75,
          resizeMode: "contain"
        }
      });
    }
    toggler(profileStore);
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
          <SideBar
            width={this.state.animation}
            toggle={this.toggle.bind(this)}
            imageStyle={this.state.imageStyle}
            textStyle={styles.textStyle}
            store={profileStore}
            navigationToMyProfile={this.navigationToMyProfile.bind(this)}
            navigationToMainPage={this.navigationToMainPage.bind(this)}
            navigationToContacts={this.navigationToContacts.bind(this)}
            navigationToShop={this.navigationToShop.bind(this)}
            navigationToSetting={this.navigationToSetting.bind(this)}
            navigationToAbout={this.navigationToAbout.bind(this)}
          />
          <Animated.View
            style={{
              width: this.state.animation2,
              alignItems: "center"
            }}
          >
            <Wallpaper source={require("../RES/background.jpg")} />
            <ScrollView style={{ width: "100%" }}>
              <View
                style={{
                  alignContent: "center"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginTop: "3%"
                  }}
                >
                  <Image
                    style={this.state.profileImage}
                    source={profileImage}
                  />
                  <TouchableHighlight onPress={() => {}} style={styles.button}>
                    <Text style={{ fontWeight: "bold" }}>
                      {profileStore.buttonText}
                    </Text>
                  </TouchableHighlight>

                  <TouchableHighlight onPress={() => {}} style={styles.button}>
                    <Text style={{ fontWeight: "bold" }}>
                      {profileStore.buttonText}
                    </Text>
                  </TouchableHighlight>
                  {/*This Button should be evaluated.*/}
                </View>
                <Text style={styles.headerStyle}>Bio</Text>
                <Text
                  style={{
                    width: "87.5%",
                    marginLeft: "6.25%"
                  }}
                >
                  Bio From The Server
                </Text>
                <Text style={styles.headerStyle}>General Informations</Text>
                <View style={styles.bodyStyle}>
                  <Text>Name:</Text>
                  <Text>Name Of Person From Server</Text>
                </View>
                <View style={styles.bodyStyle}>
                  <Text>Age:</Text>
                  <Text>Age of Person From Server</Text>
                </View>
                <View style={styles.bodyStyle}>
                  <Text>Gender:</Text>
                  <Text>From Server</Text>
                </View>
                <View style={styles.bodyStyle}>
                  <Text>ID:</Text>
                  <Text>ID From Server</Text>
                </View>
                <Text style={styles.headerStyle}>Location Informations</Text>
                <View style={styles.bodyStyle}>
                  <Text>Country:</Text>
                  <Text>Country From Server</Text>
                </View>
                <View style={styles.bodyStyle}>
                  <Text>City:</Text>
                  <Text>City from Server</Text>
                </View>
                <Text style={styles.headerStyle}>Contact Informations</Text>
                <View style={styles.bodyStyle}>
                  <Text>Phone Number:</Text>
                  <Text>From Server</Text>
                </View>
                <View style={styles.bodyStyle}>
                  <Text>Email:</Text>
                  <Text>From Server</Text>
                </View>
                <Text style={styles.headerStyle}>Tags</Text>
                <Text
                  style={{
                    marginLeft: "6.25%",
                    width: "87.5%"
                  }}
                >
                  #Tag1, #Tag2, #Tag3, #Tag4
                </Text>
              </View>
            </ScrollView>
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
    alignItems: "center"
  },
  textStyle: {
    fontSize: width / 20,
    fontWeight: "bold",
    marginTop: "3%"
  },
  button: {
    borderWidth: width / 180,
    borderRadius: 5,
    padding: "1%",
    paddingRight: "6%",
    paddingLeft: "6%"
  },
  headerStyle: {
    marginBottom: "1%",
    marginLeft: "5%",
    marginTop: "4%",
    borderBottomWidth: width / 720,
    width: "90%"
  },
  bodyStyle: {
    width: "87.5%",
    marginLeft: "6.25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default createStackNavigator({
  Profile: {
    screen: Profile
  }
});
