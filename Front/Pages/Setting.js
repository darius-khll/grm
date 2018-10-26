import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";
import toggler from "../APIs/toggler";
import settingStore from "../MobX/SettingStore";
import SideBar from "../Components/SideBar";
import { observer } from "mobx-react";
let { width } = Dimensions.get("window");

@observer
class Setting extends Component {
  static navigationOptions = { header: null };

  state = {
    animation: new Animated.Value(width / 8),
    animation2: new Animated.Value((7 * width) / 8),
    imageStyle: {
      width: (0.85 * width) / 8,
      height: (0.85 * width) / 8,
      resizeMode: "contain",
      margin: 2
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
    let initialValue = settingStore.expanded ? width : width / 8,
      finalValue = settingStore.expanded ? width / 8 : width;

    let initialValue2 = settingStore.expanded ? 0 : (7 * width) / 8,
      finalValue2 = settingStore.expanded ? (7 * width) / 8 : 0;

    settingStore.expanded = !settingStore.expanded;
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
    if (settingStore.expanded) {
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
    toggler(settingStore);
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
            store={settingStore}
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
            <Text
              style={{
                fontSize: 16,
                marginTop: "2%",
                width: "90%",
                borderBottomWidth: 0.5,
                marginBottom: "1%"
              }}
            >
              General Settings
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: "5%",
                width: "90%",
                borderBottomWidth: 0.5,
                marginBottom: "1%"
              }}
            >
              Theme Settings
            </Text>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Theme</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Change Chat Background</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Chat Font</Text>
            </TouchableHighlight>

            <Text
              style={{
                fontSize: 16,
                marginTop: "5%",
                width: "90%",
                borderBottomWidth: 0.5,
                marginBottom: "1%"
              }}
            >
              Privacy Settings
            </Text>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Last Seen Status</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => this.props.navigation.navigate("SignInPage")}
            >
              <Text>Log Out!</Text>
            </TouchableHighlight>
            <Text
              style={{
                fontSize: 16,
                marginTop: "5%",
                width: "90%",
                borderBottomWidth: 0.5,
                marginBottom: "1%"
              }}
            >
              Support
            </Text>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Ask a Question</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Rich Messenger FAQ</Text>
            </TouchableHighlight>
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
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    margin: 2
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "3%"
  }
});

export default createStackNavigator({
  Setting: {
    screen: Setting
  }
});
