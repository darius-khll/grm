import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Animated,
  Image
} from "react-native";
import { createStackNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import toggler from "../APIs/toggler";
import SideBar from "../Components/SideBar";
import myProfileStore from "../MobX/MyProfileStore";
import { observer } from "mobx-react";
let { width } = Dimensions.get("window");

@observer
class MyProfile extends Component {
  static navigationOptions = { header: null };

  state = {
    animation: new Animated.Value(width / 8),
    animation2: new Animated.Value((7 * width) / 8),
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
      resizeMode: "contain"
    }
  };
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
    let initialValue = myProfileStore.expanded ? width : width / 8,
      finalValue = myProfileStore.expanded ? width / 8 : width;

    let initialValue2 = myProfileStore.expanded ? 0 : (7 * width) / 8,
      finalValue2 = myProfileStore.expanded ? (7 * width) / 8 : 0;

    myProfileStore.expanded = !myProfileStore.expanded;
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
    if (myProfileStore.expanded) {
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
          marginRight: 30,
          width: 75,
          height: 75,
          resizeMode: "contain"
        }
      });
    }
    toggler(myProfileStore);
    animate.start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <SideBar
            width={this.state.animation}
            toggle={this.toggle.bind(this)}
            imageStyle={this.state.imageStyle}
            textStyle={styles.textStyle}
            store={myProfileStore}
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: "3%",
                justifyContent: "space-evenly"
              }}
            >
              <Image
                style={this.state.profileImage}
                source={require("../RES/anonymous.png")}
              />
              <View>
                <Button
                  title="Edit Profile"
                  onPress={() =>
                    this.props.navigation.navigate("EditProfile", {
                      image: require("../RES/anonymous.png")
                    })
                  }
                />
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
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Days Remaining:</Text>
              <Text>From Server</Text>
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
    alignItems: "center"
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
    resizeMode: "contain"
  }
});

export default createStackNavigator({
  MyProfile: {
    screen: MyProfile
  }
});
