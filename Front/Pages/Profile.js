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
import ModalTwoButtons from "../Components/ModalTwoButtons";

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
    },
    buttonTwo: {
      borderWidth: width / 180,
      borderRadius: 5,
      padding: "1%",
      paddingRight: "6%",
      paddingLeft: "6%"
    },
    buttonOne: {
      borderWidth: width / 180,
      borderRadius: 5,
      padding: "1%",
      paddingRight: "6%",
      paddingLeft: "6%"
    },
    viewButton: {
      height: "10%"
    }
  };

  setModalRemoveInvisible() {
    profileStore.isModalRemove = false;
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

  clickOnButtonOne() {
    if (profileStore.addingStatus === "notAdded") {
      requester.post("/status", {
        uniqueId: "_id",
        addingStatus: "waiting"
      });
      profileStore.addingStatus = "waiting";
      profileStore.buttonText = `        Cancle
Friend  Request`;
      profileStore.font = width / 22;
    } else if (profileStore.addingStatus === "waiting") {
      requester.post("/status", {
        uniqueId: "_id",
        addingStatus: "notAdded"
      });
      profileStore.addingStatus = "notAdded";
      profileStore.buttonText = "Add To Friends";
      profileStore.font = width / 22;
    } else if (profileStore.addingStatus === "added") {
      this.props.navigation.navigate("ChatPage", {
        name: this.props.navigation.getParam("name", "Unknown"),
        image: this.props.navigation.getParam(
          "image",
          require("../RES/anonymous.png")
        )
      });
    } else if (profileStore.addingStatus === "responsing") {
      requester.post("/status", {
        uniqueId: "_id",
        addingStatus: "added"
      });
      profileStore.addingStatus = "added";
      profileStore.buttonText = "Send A Message";
      profileStore.secondButtonText = "Remove Friend";
      this.setState({
        buttonOne: {
          borderWidth: width / 180,
          borderRadius: 5,
          padding: "1%",
          paddingRight: "6%",
          paddingLeft: "6%"
        }
      });
    }
  }

  clickOnButtonTwo() {
    if (profileStore.addingStatus === "added") {
      profileStore.isModalRemove = true;
    } else if (profileStore.addingStatus === "responsing") {
      requester.post("/status", {
        uniqueId: "_id",
        addingStatus: "notAdded"
      });
      profileStore.addingStatus = "notAdded";
      profileStore.buttonText = "Add to Friends";
      this.setState({
        buttonOne: {
          borderWidth: width / 180,
          borderRadius: 5,
          padding: "1%",
          paddingRight: "6%",
          paddingLeft: "6%"
        },
        buttonTwo: {
          borderWidth: 0,
          borderRadius: 5,
          padding: "1%",
          paddingRight: "6%",
          paddingLeft: "6%",
          width: 0,
          height: 0
        },
        viewButton: {
          height: 0
        }
      });
    }
  }

  buttonDecider() {
    if (profileStore.addingStatus === "notAdded") {
      profileStore.buttonText = "Add to Friends";
      this.setState({
        buttonTwo: {
          width: 0,
          height: 0
        },
        viewButtonTwo: {
          height: 0
        }
      });
    } else if (profileStore.addingStatus === "waiting") {
      profileStore.buttonText = `        Cancle
      Friend  Request`;
      this.setState({
        button: {
          width: 0,
          height: 0
        },
        viewButton: {
          height: 0
        }
      });
    } else if (profileStore.addingStatus === "added") {
      profileStore.buttonText = "Send a Message";
      profileStore.secondButtonText = "Remove Friend";
      this.setState({
        buttonTwo: {
          borderWidth: width / 180,
          borderRadius: 5,
          borderColor: "red",
          padding: "1%",
          paddingRight: "6%",
          paddingLeft: "6%"
        },
        viewButton: {
          height: "10%"
        }
      });
    } else if (profileStore.addingStatus === "responsing") {
      profileStore.buttonText = "Accept";
      profileStore.secondButtonText = "Decline";
      this.setState({
        buttonOne: {
          borderWidth: width / 180,
          borderRadius: 5,
          padding: "1%",
          borderColor: "green",
          paddingRight: "6%",
          paddingLeft: "6%"
        },
        buttonTwo: {
          borderWidth: width / 180,
          borderColor: "red",
          borderRadius: 5,
          padding: "1%",
          paddingRight: "6%",
          paddingLeft: "6%"
        },
        viewButton: {
          height: "10%"
        }
      });
    }
  }

  render() {
    const profileImage = this.props.navigation.getParam(
      "image",
      require("../RES/anonymous.png")
    );
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <ModalTwoButtons
            visibility={profileStore.isModalRemove}
            invisibleFunction={this.setModalRemoveInvisible}
            yesFunction={() => {
              this.setModalRemoveInvisible();
              requester.post("/status", {
                uniqueId: "_id",
                addingStatus: "notAdded"
              });
              profileStore.addingStatus = "notAdded";
              profileStore.buttonText = "Add to Friends";
              this.setState({
                buttonTwo: {
                  borderWidth: 0,
                  borderRadius: 5,
                  padding: "1%",
                  paddingRight: "6%",
                  paddingLeft: "6%",
                  width: 0,
                  height: 0
                },
                viewButton: {
                  height: 0
                }
              });
            }}
            noFunction={this.setModalRemoveInvisible}
            headerTitle="Remove?"
            body={`Are You sure you want to remove ${this.props.navigation.getParam(
              "name",
              "?"
            )} ?`}
            buttonNoText="NO"
            buttonYesText="YES"
          />

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
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "3%"
                }}
              >
                <Image style={this.state.profileImage} source={profileImage} />
                <View
                  style={{
                    alignItems: "center",
                    width: "60%"
                  }}
                >
                  <TouchableHighlight
                    onPress={this.clickOnButtonOne.bind(this)}
                    style={this.state.buttonOne}
                  >
                    <Text
                      style={{
                        fontSize: width / 22,
                        fontWeight: "bold"
                      }}
                    >
                      {profileStore.buttonText}
                    </Text>
                  </TouchableHighlight>
                  <View style={this.state.viewButton} />
                  <TouchableHighlight
                    onPress={this.clickOnButtonTwo.bind(this)}
                    style={this.state.buttonTwo}
                  >
                    <Text
                      style={{
                        fontSize: width / 22,
                        fontWeight: "bold"
                      }}
                    >
                      {profileStore.secondButtonText}
                    </Text>
                  </TouchableHighlight>
                  {/*This Button should be evaluated.*/}
                </View>
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
  textStyle: {
    fontSize: width / 20,
    fontWeight: "bold",
    marginTop: "3%"
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
