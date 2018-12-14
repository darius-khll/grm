import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, AsyncStorage } from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import SideBar from "../Components/SideBar";
import Drawer from "react-native-drawer";
import ShortcutBar from "../Components/ShortcutBar";
import aboutStore from "../MobX/AboutStore";
import Wallpaper from "../Components/Wallpaper";
import { observer } from "mobx-react";

let { width } = Dimensions.get("window");

@observer
class About extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "About",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  toggle() {
    this._drawer.open();
  }
  navigationToMyProfile() {
    this._drawer.close();
    this.props.navigation.navigate("MyProfile");
  }
  navigationToMainPage() {
    this._drawer.close();
    this.props.navigation.navigate("MainPage");
  }
  navigationToShop() {
    this._drawer.close();
    this.props.navigation.navigate("Shop");
  }
  navigationToContacts() {
    this._drawer.close();
    this.props.navigation.navigate("Contacts");
  }
  navigationToSetting() {
    this._drawer.close();
    this.props.navigation.navigate("Setting");
  }
  navigationToAbout() {
    this._drawer.close();
    this.props.navigation.navigate("About");
  }
  navigationToSearch() {
    this._drawer.close();
    this.props.navigation.navigate("SearchPage");
  }
  collapseDrawer() {
    this._drawer.close();
  }
  render() {
    return (
      <Drawer
        ref={c => (this._drawer = c)}
        type="overlay"
        elevation={2}
        openDrawerOffset={0.15}
        panOpenMask={0.95}
        captureGestures={true}
        negotiatePan={true}
        panThreshold={0.3}
        panCloseMask={0.2}
        tweenEasing="linear"
        tweenDuration={500}
        tapToClose={true}
        content={
          <SideBar
            imageStyle={styles.imageStyle}
            goToMyProfile={this.navigationToMyProfile.bind(this)}
            goToMessages={this.navigationToMainPage.bind(this)}
            goToContacts={this.navigationToContacts.bind(this)}
            goToSearch={this.navigationToSearch.bind(this)}
            goToShop={this.navigationToShop.bind(this)}
            goToSetting={this.navigationToSetting.bind(this)}
            goToAbout={this.navigationToAbout.bind(this)}
            collapser={this.collapseDrawer.bind(this)}
          />
        }
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <ShortcutBar
            width={aboutStore.isShortcutAvailable ? width / 8 : 0}
            toggle={this.toggle.bind(this)}
            imageStyle={styles.imageStyle}
            navigationToMyProfile={this.navigationToMyProfile.bind(this)}
            navigationToMainPage={this.navigationToMainPage.bind(this)}
            navigationToContacts={this.navigationToContacts.bind(this)}
            navigationToShop={this.navigationToShop.bind(this)}
            navigationToSetting={this.navigationToSetting.bind(this)}
            navigationToAbout={this.navigationToAbout.bind(this)}
          />
          <View style={styles.container}>
            <View
              style={{
                width: aboutStore.isShortcutAvailable ? (7 * width) / 8 : width,
                height: "100%"
              }}
            >
              <Wallpaper source={require("../RES/background.jpg")} />
              <Text style={styles.welcome}>Welcome to Rich Messenger</Text>
              <Text style={styles.version}>Rich Messenger Version 1.0.0 </Text>
              <Text style={styles.creators}>
                Created By Ali Khalili & Arash Heidary
              </Text>
              <Text style={{ marginBottom: 2, textAlign: "center" }}>
                Website: www.richmessenger.com
              </Text>
              <Text style={{ marginBottom: 30, textAlign: "center" }}>
                E-Mail: info@richmessenger.com
              </Text>
              <Text style={{ textAlign: "center" }}>©2018</Text>
            </View>
          </View>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: (0.85 * width) / 8,
    height: (0.85 * width) / 8,
    resizeMode: "contain",
    margin: "3%"
  },
  welcome: {
    fontSize: width / 14.4,
    textAlign: "center",
    marginTop: width / 20,
    marginBottom: width / 30
  },
  version: {
    textAlign: "center",
    marginBottom: width / 2
  },
  creators: {
    textAlign: "center",
    marginBottom: width / 24
  },
  textStyle: {
    fontSize: width / 18,
    fontWeight: "bold",
    marginTop: "3%"
  }
});

export default createStackNavigator({
  About: {
    screen: About
  }
});
