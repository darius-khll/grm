import React from "react";
import {
  Text,
  Image,
  Dimensions,
  View,
  ToastAndroid,
  StyleSheet,
  NativeModules,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";
import { createMaterialTopTabNavigator } from "react-navigation";
import Drawer from "react-native-drawer";
import chatPageStore from "../MobX/ChatPageStore";
import DrawerChat from "../Components/DrawerChat";
import Wallpaper from "../Components/Wallpaper";
const { width, height } = Dimensions.get("window");
const ImagePicker = NativeModules.ImageCropPicker;

class NormalChat extends React.Component {
  state = {
    chatData: [
      {
        type: "text",
        send: true,
        content: "Hi",
        date: "13:02",
        sended: true,
        watched: true
      },
      {
        type: "text",
        send: false,
        content: "Hello",
        date: "13:02"
      },
      {
        type: "image",
        send: false,
        date: "13:02",
        content: require("../RES/anonymous.png"),
        width: 150,
        height: 150
      },
      {
        type: "text",
        send: true,
        content: "How Are You?",
        date: "13:02",
        sended: true,
        watched: false
      },
      {
        type: "text",
        send: false,
        content: "fine, how are you doing?",
        date: "13:02"
      },
      {
        type: "text",
        send: true,
        content: "I'm doing great.",
        date: "13:02",
        sended: true,
        watched: true
      },
      {
        type: "text",
        send: true,
        content: "Do you have a plan for tonight?",
        date: "13:02",
        sended: true,
        watched: true
      },
      {
        type: "text",
        send: false,
        content: "Not yet!",
        date: "13:02"
      }
    ]
  };
  closeDrawer() {
    this.drawerNormal.close();
  }

  imagePickerFunction() {
    ImagePicker.openPicker({
      mediaType: "photo"
    }).then(() => ToastAndroid.show("OK", ToastAndroid.SHORT));
  }

  cameraRollFunction() {
    ImagePicker.openCamera({}).then(() =>
      ToastAndroid.show("OK", ToastAndroid.SHORT)
    );
  }

  videoPickerFucntion() {
    ImagePicker.openPicker({
      mediaType: "video"
    }).then(() => ToastAndroid.show("OK", ToastAndroid.SHORT));
  }

  audioPickerFunction() {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.audio()]
      },
      (error, res) => {
        if (!error) {
          // Android
          ToastAndroid.show(
            `
         res.uri: ${res.uri},
         res.type: ${res.type}, // mime type
         res.fileName: ${res.fileName},
         res.fileSize: ${res.fileSize}`,
            ToastAndroid.SHORT
          );
        }
      }
    );
  }

  filePickerFunction() {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.allFiles()]
      },
      (error, res) => {
        if (!error) {
          // Android
          ToastAndroid.show(
            `
         res.uri: ${res.uri},
         res.type: ${res.type}, // mime type
         res.fileName: ${res.fileName},
         res.fileSize: ${res.fileSize}`,
            ToastAndroid.SHORT
          );
        }
      }
    );
  }

  render() {
    let currnetDate = new Date();
    return (
      <Drawer
        ref={ref => (this.drawerNormal = ref)}
        type="overlay"
        panCloseMask={0}
        tweenEasing="linear"
        tweenDuration={300}
        tapToClose={true}
        panCloseMask={0.85}
        openDrawerOffset={0.6}
        side="bottom"
        content={
          <DrawerChat
            closeDrawer={this.closeDrawer.bind(this)}
            imagePicker={this.imagePickerFunction.bind(this)}
            cameraRoll={this.cameraRollFunction.bind(this)}
            filePicker={this.filePickerFunction.bind(this)}
            audioPicker={this.audioPickerFunction.bind(this)}
            videoPicker={this.videoPickerFucntion.bind(this)}
          />
        }
      >
        <View style={styles.container}>
          <Wallpaper source={require("../RES/background.jpg")} />
          <View style={{ flex: 9, width: "100%" }}>
            <FlatList
              inverted
              style={{ width: "100%", height: "100%" }}
              data={this.state.chatData}
              renderItem={({ item }) => {
                if (item.type === "text") {
                  if (!item.send)
                    return (
                      <View
                        style={{
                          alignSelf: "flex-start",
                          flexDirection: "row",
                          alignItems: "flex-end",
                          marginLeft: "3%",
                          marginRight: "15%",
                          paddingTop: "1%",
                          paddingBottom: "1%"
                        }}
                      >
                        <TouchableOpacity>
                          <Text
                            style={{
                              fontSize: 16,
                              paddingTop: "2%",
                              paddingBottom: "2%",
                              padding: "1%",
                              borderWidth: 0.5,
                              borderRadius: 5,
                              backgroundColor: "white"
                            }}
                          >
                            {item.content}
                          </Text>
                        </TouchableOpacity>
                        <View style={{ width: "2%" }} />
                        <View style={{ alignItems: "center" }}>
                          <Text style={{ fontSize: 10 }}>{item.date}</Text>
                        </View>
                      </View>
                    );
                  else {
                    return (
                      <View
                        style={{
                          alignSelf: "flex-end",
                          flexDirection: "row",
                          alignItems: "center",
                          marginLeft: "15%",
                          paddingTop: "1%",
                          paddingBottom: "1%",
                          marginRight: "3%"
                        }}
                      >
                        <View style={{ alignItems: "center" }}>
                          <Text style={{ fontSize: 10 }}>
                            {item.sended
                              ? item.watched
                                ? "Watched"
                                : "Sent"
                              : "Sending"}
                          </Text>
                          <Text style={{ fontSize: 10 }}>{item.date}</Text>
                        </View>
                        <View style={{ width: "2%" }} />
                        <TouchableOpacity>
                          <Text
                            style={{
                              fontSize: 16,
                              paddingTop: "2%",
                              paddingBottom: "2%",
                              padding: "1%",
                              borderWidth: 0.5,
                              borderRadius: 5,
                              backgroundColor: "green"
                            }}
                          >
                            {item.content}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }
                } else if (item.type === "image") {
                  if (!item.send) {
                    return (
                      <View
                        style={{
                          alignSelf: "flex-start",
                          flexDirection: "row",
                          alignItems: "flex-end",
                          marginLeft: "3%",
                          marginRight: "15%",
                          paddingTop: "1%",
                          paddingBottom: "1%"
                        }}
                      >
                        <TouchableOpacity style={{}} onPress={() => {}}>
                          <Image
                            style={{
                              resizeMode: "center",
                              width: item.width,
                              height: item.height,
                              backgroundColor: "white",
                              paddingTop: "2%",
                              paddingBottom: "2%",
                              padding: "1%",
                              borderWidth: 0.5,
                              borderRadius: 5
                            }}
                            source={item.content}
                          />
                        </TouchableOpacity>
                        <View style={{ width: "2%" }} />
                        <View style={{ alignItems: "center" }}>
                          <Text style={{ fontSize: 10 }}>{item.date}</Text>
                        </View>
                      </View>
                    );
                  } else {
                    return;
                  }
                }
              }}
            />
          </View>
          <View
            style={{
              height: height / 12,
              flexDirection: "row",
              borderTopWidth: width / 180,
              borderRadius: 5,
              width: "90%",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={() => this.drawerNormal.open()}>
              <Image
                source={require("../RES/attach.png")}
                style={{
                  resizeMode: "contain",
                  height: "60%",
                  width: width / 13
                }}
              />
            </TouchableOpacity>
            <View>
              <TextInput
                placeholder="Type to start chat ..."
                style={{ textAlign: "auto" }}
                onChangeText={text => (chatPageStore.textNormal = text)}
                ref={input => {
                  this.textInput = input;
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                if (chatPageStore.textNormal.trim() !== "") {
                  let currentDate = new Date();
                  this.setState({
                    chatData: [
                      {
                        type: "text",
                        send: true,
                        content: chatPageStore.textNormal.trim(),
                        date: `${currentDate
                          .getHours()
                          .toString()}:${currentDate.getMinutes().toString()}`,
                        watched: false,
                        sended: false
                      },
                      ...this.state.chatData
                    ]
                  });
                  chatPageStore.textNormal = "";
                  this.textInput.clear();
                }
              }}
            >
              <Text>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Drawer>
    );
  }
}

class SecureChat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            borderBottomWidth: width / 360,
            borderRadius: 5
          }}
        >
          <TextInput
            style={{ marginLeft: 10, width: "65%" }}
            placeholder="Crypto Key"
          />
          <TouchableOpacity style={{ marginLeft: "5%" }}>
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flexDirection: "column-reverse" }}>
          <View
            style={{
              heigth: "10%",
              flexDirection: "row",
              borderTopWidth: width / 180,
              width: "100%",
              alignItems: "center"
            }}
          >
            <TextInput
              placeholder="Type to start chat ..."
              style={{ textAlign: "auto", width: "80%" }}
            />
            <TouchableOpacity style={{ marginLeft: "5%" }}>
              <Text>Send</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{}} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default createMaterialTopTabNavigator({
  Standard: NormalChat,
  Secure: SecureChat
});
