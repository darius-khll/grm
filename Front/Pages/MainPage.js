import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  StatusBar,
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
import Axios from "axios";
let { width } = Dimensions.get("window");

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/getMasseges"
});

@observer
class MainPage extends Component {
  static navigationOptions = ({ navigation }) => {
    let { params = {} } = navigation.state;
    return {
      headerTitle: params.serachExpanded ? (
        <TextInput
          style={{ fontSize: width / 20, marginLeft: "5%", width: "70%" }}
          placeholder="search..."
          onChangeText={text => {
            if (text.length > 0) {
              mainPageStore.flatListData = [];
              mainPageStore.flatList.forEach(item => {
                if (item.key.toLowerCase().includes(text.toLowerCase())) {
                  mainPageStore.flatListData.push(item);
                }
              });
            } else {
              mainPageStore.flatListData = mainPageStore.flatList;
            }
          }}
        />
      ) : (
        "Rich Messenger"
      ),
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerRight: (
        <View
          style={{
            flexDirection: "row-reverse",
            marginLeft: 8,
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            onPress={() => {
              navigation.setParams({ serachExpanded: !params.serachExpanded });
            }}
          >
            <Image
              source={
                !params.serachExpanded
                  ? require("../RES/searchheader.png")
                  : require("../RES/close.png")
              }
              style={
                !params.serachExpanded
                  ? { width: 40, height: 40, resizeMode: "contain" }
                  : {
                      width: 30,
                      height: 30,
                      marginRight: 5,
                      resizeMode: "contain"
                    }
              }
            />
          </TouchableHighlight>
        </View>
      )
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
      if (mainPageStore.expanded) this.toggle();
      this.props.navigation.setParams({ serachExpanded: false });
    });
    requester
      .get("/", {
        params: {
          uniqueId: "_id"
        }
      })
      .then(response => {
        if (response.status === 200) {
          mainPageStore.flatList = response.data.flatlist;
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
        <StatusBar backgroundColor="#00ACF4" barStyle="dark-content" />
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
            <FlatList
              style={{ width: "100%" }}
              data={mainPageStore.flatListData}
              renderItem={({ item }) => {
                return (
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.navigate("ChatPage", {
                        name: item.key,
                        image: item.image
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
  },
  image: {
    width: 48,
    height: 48,
    resizeMode: "contain"
  }
});

export default createStackNavigator({
  MainPage: {
    screen: MainPage
  }
});
