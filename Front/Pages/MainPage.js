import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  View,
  Image,
  TextInput,
  Animated,
  FlatList
} from "react-native";
import { createStackNavigator } from "react-navigation";
import SideBar from "../Components/SideBar";
import { observer } from "mobx-react";
import mainPageStore from "../MobX/MainPageStore";
import Wallpaper from "../Components/Wallpaper";
import toggler from "../APIs/toggler";
let { width } = Dimensions.get("window");

@observer
class MainPage extends Component {
  static navigationOptions = { header: null };

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
      if (mainPageStore.expanded) this.toggle();
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
    let initialValue = mainPageStore.expanded ? width : width / 8,
      finalValue = mainPageStore.expanded ? width / 8 : width;

    let initialValue2 = mainPageStore.expanded ? 0 : (7 * width) / 8,
      finalValue2 = mainPageStore.expanded ? (7 * width) / 8 : 0;

    mainPageStore.expanded = !mainPageStore.expanded;
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
    if (mainPageStore.expanded) {
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
          margin: "3%"
        }
      });
    }
    toggler(mainPageStore);
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
            store={mainPageStore}
            navigationToMyProfile={this.navigationToMyProfile.bind(this)}
            navigationToMainPage={this.navigationToMainPage.bind(this)}
            navigationToContacts={this.navigationToContacts.bind(this)}
            navigationToShop={this.navigationToShop.bind(this)}
            navigationToSetting={this.navigationToSetting.bind(this)}
            navigationToAbout={this.navigationToAbout.bind(this)}
          />
          <Animated.View
            style={{ alignItems: "center", width: this.state.animation2 }}
          >
            <Wallpaper source={require("../RES/background.jpg")} />
            <TextInput
              style={{
                width: "90%",
                borderBottomWidth: width / 360,
                borderRadius: 5,
                textAlign: "center",
                fontSize: width / 22.5,
                padding: "2%",
                borderColor: "rgba(0,30,255,0.5)"
              }}
              placeholder="Search..."
            />
            <FlatList
              style={{ width: "100%" }}
              data={[
                {
                  key: "Devin",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jackson",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "James",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Joel",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "John",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jillian",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jimmy",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Julie",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                }
              ]}
              renderItem={({ item }) => {
                return (
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.navigate("ChatPage", {
                        name: item.key
                      })
                    }
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        margin: "1%"
                      }}
                    >
                      <Image source={item.image} style={styles.profileImage} />
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "space-around",
                          marginLeft: "2%",
                          flex: 1
                        }}
                      >
                        <Text
                          style={{ fontSize: width / 22.5, fontWeight: "bold" }}
                        >
                          {item.key}
                        </Text>
                        <Text style={{ fontSize: width / 30 }}>
                          {item.lastMessage}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row-reverse",
                            alignItems: "center"
                          }}
                        >
                          <Text
                            style={{ fontSize: width / 36, marginRight: "5%" }}
                          >
                            {item.date}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableHighlight>
                );
              }}
            />
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
  profileImage: {
    width: width / 5.5,
    height: width / 5.5,
    resizeMode: "contain",
    margin: "1%"
  },
  textStyle: {
    fontSize: width / 20,
    fontWeight: "bold",
    marginTop: "3%"
  }
});

export default createStackNavigator({
  MainPage: {
    screen: MainPage
  }
});
