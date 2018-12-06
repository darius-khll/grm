import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import Drawer from "react-native-drawer";
import ShortcutBar from "../Components/ShortcutBar";
import shopStore from "../MobX/ShopStore";
import Wallpaper from "../Components/Wallpaper";
import SideBar from "../Components/SideBar";
import Axios from "axios";
import { observer } from "mobx-react";
let { width } = Dimensions.get("window");
const requester = Axios.create({
  baseURL: "https://localhost:3000/api/shop"
});

@observer
class Shop extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Shop",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  componentWillMount() {
    requester.get("/").then(response => {
      if (response.status === 200) {
        shopStore.stickers = response.data.sticekrs;
        shopStore.themes = response.data.themes;
      }
    });
  }
  toggle() {
    this._drawer.open();
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
        content={<SideBar imageStyle={styles.imageStyle} />}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <ShortcutBar
              width={shopStore.isShortcutAvailable ? width / 8 : 0}
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
                width: shopStore.isShortcutAvailable ? (7 * width) / 8 : width,
                alignItems: "center"
              }}
            >
              <Wallpaper source={require("../RES/background.jpg")} />
              <Text
                style={{ marginTop: "1%", fontSize: 18, marginBottom: "5%" }}
              >
                Welcome To Shop!
              </Text>
              <View style={{ width: "90%" }}>
                <Text>You have 6 days left.</Text>
                <Text
                  style={{
                    borderBottomWidth: width / 720,
                    marginTop: "3%",
                    marginBottom: "2%"
                  }}
                >
                  Buy some days!
                </Text>
                <ScrollView horizontal={true}>
                  <FlatList
                    horizontal={true}
                    data={shopStore.days}
                    keyExtractor={index => index}
                    renderItem={({ item }) => {
                      return (
                        <View style={styles.viewStyler}>
                          <TouchableHighlight onPress={() => {}}>
                            <Image
                              style={styles.shopImage}
                              source={item.image}
                            />
                          </TouchableHighlight>
                        </View>
                      );
                    }}
                  />
                </ScrollView>
                <Text
                  style={{
                    borderBottomWidth: width / 720,
                    marginTop: "3%",
                    marginBottom: "2%"
                  }}
                >
                  New Stickers
                </Text>
                <ScrollView horizontal={true}>
                  <FlatList
                    horizontal={true}
                    data={shopStore.stickers}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                      return (
                        <View style={styles.viewStyler}>
                          <TouchableHighlight onPress={() => {}}>
                            <Image
                              style={styles.shopImage}
                              source={item.image}
                            />
                          </TouchableHighlight>
                        </View>
                      );
                    }}
                  />
                </ScrollView>
                <Text
                  style={{
                    borderBottomWidth: width / 720,
                    marginTop: "3%",
                    marginBottom: "2%"
                  }}
                >
                  New Themes
                </Text>
                <ScrollView horizontal={true}>
                  <FlatList
                    horizontal={true}
                    data={shopStore.themes}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => {
                      return (
                        <View style={styles.viewStyler}>
                          <TouchableHighlight onPress={() => {}}>
                            <Image
                              style={styles.shopImage}
                              source={item.image}
                            />
                          </TouchableHighlight>
                        </View>
                      );
                    }}
                  />
                </ScrollView>
                <View style={{ height: "7%" }} />
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center"
                  }}
                >
                  <TouchableHighlight
                    onPress={() => {
                      this.props.navigation.navigate("Stickers");
                    }}
                    style={styles.button}
                  >
                    <Text style={{ fontSize: width / 20, fontWeight: "bold" }}>
                      All Stickers
                    </Text>
                  </TouchableHighlight>
                  <View style={{ width: "10%" }} />
                  <TouchableHighlight
                    onPress={() => {
                      this.props.navigation.navigate("Themes");
                    }}
                    style={styles.button}
                  >
                    <Text style={{ fontSize: width / 22, fontWeight: "bold" }}>
                      All Themes
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
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
  shopImage: {
    width: width / 5.5,
    height: width / 5.5,
    resizeMode: "contain",
    marginLeft: width / 72
  },
  textStyle: {
    fontSize: width / 20,
    fontWeight: "bold",
    marginTop: "3%"
  },
  button: {
    marginTop: "7%",
    borderWidth: width / 180,
    borderRadius: 5,
    padding: "1%",
    paddingRight: "6%",
    paddingLeft: "6%"
  },
  imageStyle: {
    width: (0.85 * width) / 8,
    height: (0.85 * width) / 8,
    resizeMode: "contain",
    margin: "3%"
  }
});

export default createStackNavigator({
  Shop: {
    screen: Shop
  }
});
