import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { createStackNavigator } from "react-navigation";
import toggler from "../APIs/toggler";
import shopStore from "../MobX/ShopStore";
import Wallpaper from "../Components/Wallpaper";
import SideBar from "../Components/SideBar";
import { observer } from "mobx-react";
let { width } = Dimensions.get("window");

@observer
class Shop extends Component {
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

  toggle() {
    let initialValue = shopStore.expanded ? width : width / 8,
      finalValue = shopStore.expanded ? width / 8 : width;

    let initialValue2 = shopStore.expanded ? 0 : (7 * width) / 8,
      finalValue2 = shopStore.expanded ? (7 * width) / 8 : 0;

    shopStore.expanded = !shopStore.expanded;
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
    if (shopStore.expanded) {
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
    toggler(shopStore);
    animate.start();
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
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <SideBar
            width={this.state.animation}
            toggle={this.toggle.bind(this)}
            imageStyle={this.state.imageStyle}
            textStyle={styles.textStyle}
            store={shopStore}
            navigationToMyProfile={this.navigationToMyProfile.bind(this)}
            navigationToMainPage={this.navigationToMainPage.bind(this)}
            navigationToContacts={this.navigationToContacts.bind(this)}
            navigationToShop={this.navigationToShop.bind(this)}
            navigationToSetting={this.navigationToSetting.bind(this)}
            navigationToAbout={this.navigationToAbout.bind(this)}
          />
          <Animated.View
            style={{ width: this.state.animation2, alignItems: "center" }}
          >
            <Wallpaper source={require("../RES/background.jpg")} />
            <Text style={{ marginTop: "1%", fontSize: 18, marginBottom: "5%" }}>
              Welcome To Shop!
            </Text>
            <View style={{ width: "90%" }}>
              <Text>You have 6 days left.</Text>
              <Text style={{ borderBottomWidth: 0.5, marginTop: "3%" }}>
                Buy some days!
              </Text>
              <ScrollView
                style={{ marginTop: "2%" }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
              </ScrollView>
              <Text style={{ borderBottomWidth: 0.5, marginTop: "3%" }}>
                Stickers
              </Text>
              <ScrollView
                style={{ marginTop: "2%" }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
              </ScrollView>
              <Text style={{ borderBottomWidth: 0.5, marginTop: "3%" }}>
                Profile Images
              </Text>
              <ScrollView
                style={{ marginTop: "2%" }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
                <Image
                  source={require("../RES/sampleprofileimage.jpg")}
                  style={styles.shopImage}
                />
              </ScrollView>
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
  shopImage: {
    width: 65,
    height: 65,
    resizeMode: "contain",
    marginLeft: 5
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "3%"
  }
});

export default createStackNavigator({
  Shop: {
    screen: Shop
  }
});
