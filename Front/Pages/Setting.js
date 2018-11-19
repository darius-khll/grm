import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Linking,
  ScrollView,
  Animated,
  TouchableHighlight
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import toggler from "../APIs/toggler";
import settingStore from "../MobX/SettingStore";
import Wallpaper from "../Components/Wallpaper";
import SideBar from "../Components/SideBar";
import { observer } from "mobx-react";
let { width } = Dimensions.get("window");

@observer
class Setting extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Setting",
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
      if (settingStore.expanded) this.toggle();
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
            <Wallpaper source={require("../RES/background.jpg")} />
            <ScrollView style={{ width: "100%" }}>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.headerStyle}>General Settings</Text>
                <Text style={styles.headerStyle}>Theme Settings</Text>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {}}
                >
                  <Text>Theme</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {}}
                >
                  <Text>Change Chat Background</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {}}
                >
                  <Text>Chat Font</Text>
                </TouchableHighlight>
                <Text style={styles.headerStyle}>Notification Settings</Text>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {}}
                >
                  <Text>LED Color</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {}}
                >
                  <Text>Vibration</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {}}
                >
                  <Text>Notificarion Sound</Text>
                </TouchableHighlight>
                <Text style={styles.headerStyle}>Privacy Settings</Text>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {}}
                >
                  <Text>Last Seen Status</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => this.props.navigation.navigate("SignInPage")}
                >
                  <Text>Log Out!</Text>
                </TouchableHighlight>

                <Text style={styles.headerStyle}>Support</Text>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {
                    Linking.openURL("http://www.google.com");
                  }}
                >
                  <Text>How does it work?</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {
                    Linking.openURL("http://www.google.com");
                  }}
                >
                  <Text>Ask a Question</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.optionStyle}
                  onPress={() => {
                    Linking.openURL("http://www.google.com");
                  }}
                >
                  <Text>Rich Messenger FAQ</Text>
                </TouchableHighlight>
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
  image: {
    width: width / 9,
    height: width / 9,
    resizeMode: "contain",
    margin: width / 180
  },
  textStyle: {
    fontSize: width / 20,
    fontWeight: "bold",
    marginTop: "3%"
  },
  headerStyle: {
    fontSize: width / 22.5,
    marginTop: "4%",
    width: "90%",
    borderBottomWidth: width / 360,
    marginBottom: "1%"
  },
  optionStyle: {
    borderBottomWidth: width / 720,
    width: "85%",
    padding: "1%"
  }
});

export default createStackNavigator({
  Setting: {
    screen: Setting
  }
});
