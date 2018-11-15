import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Animated,
  SectionList,
  TouchableHighlight
} from "react-native";
import { createStackNavigator, HeaderBackButton } from "react-navigation";
import { FloatingAction } from "react-native-floating-action";
import Wallpaper from "../Components/Wallpaper";
import contactsStore from "../MobX/ContactsStore";
import toggler from "../APIs/toggler";
import SideBar from "../Components/SideBar";
import { observer } from "mobx-react";
import Axios from "axios";

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/contactlist"
});
let { width } = Dimensions.get("window");

@observer
class Contacts extends Component {
  static navigationOptions = ({ navigation }) => {
    let { params = {} } = navigation.state;
    return {
      headerTitle: params.serachExpanded ? (
        <TextInput
          style={{ fontSize: width / 20, marginLeft: "5%", width: "70%" }}
          placeholder="search..."
          onChangeText={text => {
            if (text.length > 0) {
              contactsStore.sectionsData = [];
              for (item of contactsStore.sections) {
                for (contacts of item.data) {
                  if (
                    contacts.name.toLowerCase().includes(text.toLowerCase())
                  ) {
                    let sectit = contactsStore.dataSource.find(secdat => {
                      return secdat.title === item.title;
                    });
                    if (sectit) {
                      sectit.data.push(contacts);
                    } else {
                      contactsStore.sectionsData = [
                        ...contactsStore.dataSource,
                        { title: item.title, data: [] }
                      ];
                      let sectit = contactsStore.dataSource.find(secdat => {
                        return secdat.title === item.title;
                      });
                      sectit.data.push(contacts);
                    }
                  }
                }
              }
              contactsStore.sectionsData = [...contactsStore.sectionsData];
            } else {
              contactsStore.sectionsData = contactsStore.dataSections;
            }
          }}
        />
      ) : (
        "Friends"
      ),
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
      headerRight: (
        <View
          style={{
            flexDirection: "row-reverse",
            marginLeft: 8,
            alignItems: "center"
          }}
        >
          <TouchableHighlight
            style={params.serachExpanded ? { width: 0, height: 0 } : {}}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image
              source={require("../RES/notification.png")}
              style={
                params.serachExpanded
                  ? { width: 0, height: 0 }
                  : { width: 40, height: 40, resizeMode: "contain" }
              }
            />
          </TouchableHighlight>
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
  actions = [
    {
      text: "Search and Add",
      color: "black",
      icon: require("../RES/search.png"),
      name: "search",
      position: 1
    }
  ];
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
      if (contactsStore.expanded) this.toggle();
    });
    requester
      .get("/get", {
        params: {
          uniqueId: "_id"
        }
      })
      .then(response => {
        if (response.status === 200) {
          contactsStore.sections = response.data.contacts;
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
    let initialValue = contactsStore.expanded ? width : width / 8,
      finalValue = contactsStore.expanded ? width / 8 : width;

    let initialValue2 = contactsStore.expanded ? 0 : (7 * width) / 8,
      finalValue2 = contactsStore.expanded ? (7 * width) / 8 : 0;

    contactsStore.expanded = !contactsStore.expanded;
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
    if (contactsStore.expanded) {
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
    toggler(contactsStore);
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
            store={contactsStore}
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

            <SectionList
              style={{ width: "100%" }}
              sections={contactsStore.dataSource}
              renderItem={({ item }) => {
                return (
                  <View style={{ alignItems: "center" }}>
                    <TouchableHighlight
                      style={{ width: "90%" }}
                      onPress={() =>
                        this.props.navigation.navigate("Profile", {
                          name: item.name,
                          image: item.image
                        })
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center"
                        }}
                      >
                        <Image
                          source={item.image}
                          style={styles.profileImage}
                        />
                        <Text style={{ margin: width / 72 }}>{item.name}</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                );
              }}
              renderSectionHeader={({ section: { title, data } }) => {
                if (data.length)
                  return (
                    <View
                      style={{
                        borderTopWidth: width / 180,
                        borderRadius: 5,
                        width: "92%",
                        marginTop: "1%",
                        marginLeft: "4%",
                        alignItems: "center",
                        borderBottomWidth: width / 180
                      }}
                    >
                      <Text style={{ marginLeft: 5 }}>{title}</Text>
                    </View>
                  );
              }}
              keyExtractor={(item, index) => index}
            />
          </Animated.View>
        </View>
        <FloatingAction
          visible={!contactsStore.expanded}
          listenKeyboard={true}
          actions={this.actions}
          color="black"
          onPressItem={name => {
            if (name === "search") this.props.navigation.navigate("SearchPage");
          }}
        />
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
    margin: "1%",
    width: width / 5.5,
    height: width / 5.5,
    resizeMode: "contain",
    margin: width / 180
  },
  textStyle: {
    fontSize: width / 20,
    fontWeight: "bold",
    marginTop: "3%"
  }
});

export default createStackNavigator({
  Contacts: {
    screen: Contacts
  }
});
