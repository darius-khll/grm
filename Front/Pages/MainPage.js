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
  FlatList,
  Modal
} from "react-native";
import { createStackNavigator } from "react-navigation";
import SideBar from "../Components/SideBar";
import Drawer from "react-native-drawer";
import { observer } from "mobx-react";
import mainPageStore from "../MobX/MainPageStore";
import Wallpaper from "../Components/Wallpaper";
import ShortcutBar from "../Components/ShortcutBar";
import Axios from "axios";
import { FloatingAction } from "react-native-floating-action";

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

  actions = [
    {
      text: "New Chat",
      color: "black",
      icon: require("../RES/compose.png"),
      name: "newChat",
      position: 1
    }
  ];

  toggle() {
    this._drawer.open();
  }

  componentWillMount() {
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

  modalCloser() {
    mainPageStore.isModalLongClick = false;
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
          <StatusBar backgroundColor="#00ACF4" barStyle="dark-content" />
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={mainPageStore.isModalLongClick}
              onRequestClose={() => {
                this.modalCloser();
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.5)"
                }}
              >
                {this.props.children}
                <View style={styles.modalView}>
                  <Wallpaper source={require("../RES/modalbackground.jpg")} />
                  <Text style={styles.modalHeader}>
                    {mainPageStore.longClickItemName}
                  </Text>
                  <TouchableHighlight
                    onPress={() => {
                      requester.post("remove", {
                        pramas: {
                          itemToDelete: "_id"
                        }
                      });
                    }}
                    style={{
                      borderBottomColor: "white",
                      borderBottomWidth: 0.5
                    }}
                  >
                    <Text style={styles.modalButton}>Delete Chat</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {}}
                    style={{
                      borderBottomColor: "white",
                      borderBottomWidth: 0.5
                    }}
                  >
                    <Text style={styles.modalButton}>Pin On Top</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {
                      this.modalCloser();
                      this.props.navigation.navigate("Profile", {
                        name: mainPageStore.longClickItemName,
                        image: mainPageStore.longClickItemImage
                      });
                    }}
                    style={{
                      borderBottomColor: "white",
                      borderBottomWidth: 0.5
                    }}
                  >
                    <Text style={styles.modalButton}>Go to Profile</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {
                      this.modalCloser();
                    }}
                    style={{ marginBottom: "2%" }}
                  >
                    <Text style={styles.modalButton}>Cancle</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <ShortcutBar
              width={mainPageStore.isShortcutAvailable ? width / 8 : 0}
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
                alignItems: "center",
                width: mainPageStore.isShortcutAvailable
                  ? (7 * width) / 8
                  : width
              }}
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
                      onLongPress={() => {
                        mainPageStore.longClickItemName = item.key;
                        mainPageStore.longClickItemImage = item.image;
                        mainPageStore.isModalLongClick = true;
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          margin: "1%"
                        }}
                      >
                        <Image
                          source={item.image}
                          style={styles.profileImage}
                        />
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "space-around",
                            marginLeft: "2%",
                            flex: 1
                          }}
                        >
                          <Text
                            style={{
                              fontSize: width / 22.5,
                              fontWeight: "bold"
                            }}
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
                              style={{
                                fontSize: width / 36,
                                marginRight: "5%"
                              }}
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
            </View>
          </View>
          <FloatingAction
            listenKeyboard={true}
            actions={this.actions}
            color="black"
            onPressItem={name => {
              if (name === "newChat")
                this.props.navigation.navigate("ContactSelection");
            }}
          />
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
  profileImage: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: width / 5.5,
    height: width / 5.5,
    backgroundColor: "#fff",
    borderRadius: 100,
    margin: "1%"
  },

  textStyle: {
    fontSize: width / 20,
    fontWeight: "bold",
    marginTop: "3%"
  },
  modalHeader: {
    marginTop: "3%",
    color: "white",
    marginBottom: "5%",
    fontWeight: "bold",
    fontSize: 20
  },
  modalView: {
    borderWidth: 1.5,
    alignItems: "center",
    width: "85%"
  },
  imageStyle: {
    width: (0.85 * width) / 8,
    height: (0.85 * width) / 8,
    resizeMode: "contain",
    margin: "3%"
  },
  modalButton: {
    color: "white",
    fontSize: width / 25,
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingBottom: "1%",
    paddingTop: "1%"
  }
});

export default createStackNavigator({
  MainPage: {
    screen: MainPage
  }
});
