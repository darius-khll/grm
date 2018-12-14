import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Linking,
  AsyncStorage,
  Switch,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import Drawer from "react-native-drawer";
import ShortcutBar from "../Components/ShortcutBar";
import settingStore from "../MobX/SettingStore";
import mainPageStore from "../MobX/MainPageStore";
import aboutStore from "../MobX/AboutStore";
import contactsStore from "../MobX/ContactsStore";
import myProfileStore from "../MobX/MyProfileStore";
import profileStore from "../MobX/ProfileStore";
import shopStore from "../MobX/ShopStore";
import notificationStore from "../MobX/NotificationStore";
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

  toggle() {
    this._drawer.open();
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
        <View style={styles.container}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <ShortcutBar
              width={settingStore.isShortcutAvailable ? width / 8 : 0}
              toggle={this.toggle.bind(this)}
              imageStyle={styles.imageStyle}
              navigationToMyProfile={this.navigationToMyProfile.bind(this)}
              navigationToMainPage={this.navigationToMainPage.bind(this)}
              navigationToContacts={this.navigationToContacts.bind(this)}
              navigationToShop={this.navigationToShop.bind(this)}
              navigationToSetting={this.navigationToSetting.bind(this)}
              navigationToAbout={this.navigationToAbout.bind(this)}
            />
            <View
              style={{
                width: settingStore.isShortcutAvailable
                  ? (7 * width) / 8
                  : width,
                alignItems: "center"
              }}
            >
              <Wallpaper source={require("../RES/background.jpg")} />
              <ScrollView style={{ width: "100%" }}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.headerStyle}>General Settings</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "85%",
                      padding: "1%",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text>Shortcut Bar</Text>
                    <Switch
                      value={settingStore.isShortcutAvailable}
                      onValueChange={async () => {
                        settingStore.isShortcutAvailable = !settingStore.isShortcutAvailable;
                        mainPageStore.isShortcutAvailable = !mainPageStore.isShortcutAvailable;
                        aboutStore.isShortcutAvailable = !aboutStore.isShortcutAvailable;
                        contactsStore.isShortcutAvailable = !contactsStore.isShortcutAvailable;
                        myProfileStore.isShortcutAvailable = !myProfileStore.isShortcutAvailable;
                        notificationStore.isShortcutAvailable = !notificationStore.isShortcutAvailable;
                        profileStore.isShortcutAvailable = !profileStore.isShortcutAvailable;
                        shopStore.isShortcutAvailable = !shopStore.isShortcutAvailable;
                        await AsyncStorage.setItem(
                          "shortcut",
                          settingStore.isShortcutAvailable ? "true" : "false"
                        );
                      }}
                    />
                  </View>
                  <Text style={styles.headerStyle}>Theme Settings</Text>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {}}
                  >
                    <Text>Theme</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {}}
                  >
                    <Text>Change Chat Background</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {}}
                  >
                    <Text>Chat Font</Text>
                  </TouchableOpacity>
                  <Text style={styles.headerStyle}>Notification Settings</Text>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {}}
                  >
                    <Text>LED Color</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {}}
                  >
                    <Text>Vibration</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {}}
                  >
                    <Text>Notificarion Sound</Text>
                  </TouchableOpacity>
                  <Text style={styles.headerStyle}>Privacy Settings</Text>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {}}
                  >
                    <Text>Last Seen Status</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => this.props.navigation.navigate("SignInPage")}
                  >
                    <Text>Log Out!</Text>
                  </TouchableOpacity>

                  <Text style={styles.headerStyle}>Support</Text>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {
                      Linking.openURL("http://www.google.com");
                    }}
                  >
                    <Text>How does RichMessenger work?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {
                      Linking.openURL("http://www.google.com");
                    }}
                  >
                    <Text>Ask a Question</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.optionStyle}
                    onPress={() => {
                      Linking.openURL("http://www.google.com");
                    }}
                  >
                    <Text>Rich Messenger FAQ</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
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
    width: "85%",
    padding: "1%"
  },
  imageStyle: {
    width: (0.85 * width) / 8,
    height: (0.85 * width) / 8,
    resizeMode: "contain",
    margin: "3%"
  }
});

export default createStackNavigator({
  Setting: {
    screen: Setting
  }
});
