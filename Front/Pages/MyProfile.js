import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  Animated,
  Image
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import toggler from "../APIs/toggler";
import SideBar from "../Components/SideBar";
import myProfileStore from "../MobX/MyProfileStore";
import ImageView from "react-native-image-view";
import { observer } from "mobx-react";
import Axios from "axios";
let { width } = Dimensions.get("window");

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/myprofile"
});

@observer
class MyProfile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Your Profile",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  state = {
    animation: new Animated.Value(width / 8),
    animation2: new Animated.Value((7 * width) / 8),
    imageStyle: {
      width: (0.85 * width) / 8,
      height: (0.85 * width) / 8,
      resizeMode: "contain",
      margin: "3%"
    },
    profileImage: {
      marginRight: width / 12,
      width: width / 4.8,
      height: width / 4.8,
      resizeMode: "contain"
    }
  };

  componentWillMount() {
    this.props.navigation.addListener("didBlur", () => {
      if (myProfileStore.expanded) this.toggle();
    });
    requester
      .get("/get", {
        params: {
          uniqueId: "_id"
        }
      })
      .then(response => {
        if (response.status === 200) {
          myProfileStore.bio = response.data.bio;
          myProfileStore.name = response.data.name;
          myProfileStore.age = response.data.age;
          myProfileStore.gender = response.data.gender;
          myProfileStore.id = response.data.id;
          myProfileStore.daysRemaining = response.data.daysRemaining;
          myProfileStore.country = response.data.country;
          myProfileStore.city = response.data.city;
          myProfileStore.phoneNumber = response.data.phoneNumber;
          myProfileStore.email = response.data.email;
          myProfileStore.tags = response.data.tags;
        }
      });
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
          <ImageView
            images={myProfileStore.images}
            animationType="fade"
            imageIndex={0}
            isVisible={myProfileStore.isModalImageView}
            onClose={() => (myProfileStore.isModalImageView = false)}
          />
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
            <ScrollView style={{ width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "3%",
                  justifyContent: "space-evenly"
                }}
              >
                <TouchableHighlight
                  onPress={() => (myProfileStore.isModalImageView = true)}
                >
                  <Image
                    style={this.state.profileImage}
                    source={require("../RES/anonymous.png")}
                  />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate("EditProfile", {
                      image: require("../RES/anonymous.png")
                    })
                  }
                  style={styles.button}
                >
                  <Text style={{ fontWeight: "bold" }}>Edit Profile</Text>
                </TouchableHighlight>
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
              <View style={styles.bodyStyle}>
                <Text>Days Remaining:</Text>
                <Text>From Server</Text>
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
                  width: "87.5%",
                  marginBottom: "10%"
                }}
              >
                #Tag1, #Tag2, #Tag3, #Tag4
              </Text>
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
  },
  textStyle: {
    fontSize: width / 20,
    fontWeight: "bold",
    marginTop: "3%"
  },
  profileImage: {
    marginRight: 30,
    width: width / 4.8,
    height: width / 4.8,
    resizeMode: "contain"
  },
  button: {
    borderWidth: width / 180,
    borderRadius: 5,
    padding: "1%",
    paddingRight: "6%",
    paddingLeft: "6%"
  }
});

export default createStackNavigator({
  MyProfile: {
    screen: MyProfile
  }
});
