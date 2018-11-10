import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Animated, Text } from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import SideBar from "../Components/SideBar";
import notificationStore from "../MobX/NotificationStore";
import { observer } from "mobx-react";
import toggler from "../APIs/toggler";
import Wallpaper from "../Components/Wallpaper";
let { width } = Dimensions.get("window");

@observer
class Notifications extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Notifications",
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
    }
  };

  componentWillMount() {
    this.props.navigation.addListener("didBlur", () => {
      if (notificationStore.expanded) this.toggle();
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
    let initialValue = notificationStore.expanded ? width : width / 8,
      finalValue = notificationStore.expanded ? width / 8 : width;

    let initialValue2 = notificationStore.expanded ? 0 : (7 * width) / 8,
      finalValue2 = notificationStore.expanded ? (7 * width) / 8 : 0;

    notificationStore.expanded = !notificationStore.expanded;
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
    if (notificationStore.expanded) {
      this.setState({
        imageStyle: {
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
        }
      });
    }
    toggler(notificationStore);
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
            store={notificationStore}
            navigationToMyProfile={this.navigationToMyProfile.bind(this)}
            navigationToMainPage={this.navigationToMainPage.bind(this)}
            navigationToContacts={this.navigationToContacts.bind(this)}
            navigationToShop={this.navigationToShop.bind(this)}
            navigationToSetting={this.navigationToSetting.bind(this)}
            navigationToAbout={this.navigationToAbout.bind(this)}
          />
          <Animated.View style={{ width: this.state.animation2 }}>
            <Wallpaper source={require("../RES/background.jpg")} />
            <View style={{ alignItems: "center" }}>
              <View style={styles.styleHeader}>
                <Text
                  style={{
                    fontSize: width / 26
                  }}
                >
                  People, who sent you a friend request
                </Text>
              </View>
              <View style={styles.styleHeader}>
                <Text
                  style={{
                    fontSize: width / 26
                  }}
                >
                  People, you sent them a friend request
                </Text>
              </View>
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
    fontSize: width / 20,
    fontWeight: "bold",
    marginTop: "3%"
  },
  styleHeader: {
    borderBottomWidth: width / 360,
    borderRadius: 5,
    width: "80%",
    alignItems: "center"
  }
});

export default createStackNavigator({
  Notifications: {
    screen: Notifications
  }
});
