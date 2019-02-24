import React from "react";
import {
  Text,
  Image,
  Dimensions,
  View,
  Keyboard,
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
        type: "audio",
        send: true,
        sended: true,
        watched: false,
        name: "Mohsen Yeganeh.mp3",
        size: 1235476,
        date: "13:02"
      },
      {
        type: "text",
        send: false,
        content: "Hello",
        date: "13:02"
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
    })
      .then(image => {
        this.drawerNormal.close();
        let currentDate = new Date();
        this.setState({
          chatData: [
            {
              type: "image",
              send: true,
              content: {
                uri: image.path,
                width: image.width,
                height: image.height
              },
              date: `${currentDate
                .getHours()
                .toString()}:${currentDate.getMinutes().toString()}`,
              height: image.height,
              width: image.width,
              watched: false,
              sended: false
            },
            ...this.state.chatData
          ]
        });
      })
      .catch(() => {
        this.drawerNormal.clsoe();
      });
  }

  cameraRollFunction() {
    ImagePicker.openCamera({})
      .then(image => {
        this.drawerNormal.close();
        let currentDate = new Date();
        this.setState({
          chatData: [
            {
              type: "image",
              send: true,
              content: {
                uri: image.path,
                width: image.width,
                height: image.height
              },
              date: `${currentDate
                .getHours()
                .toString()}:${currentDate.getMinutes().toString()}`,
              height: image.height,
              width: image.width,
              watched: false,
              sended: false
            },
            ...this.state.chatData
          ]
        });
      })
      .catch(() => {
        this.drawerNormal.clsoe();
      });
  }

  videoPickerFucntion() {
    ImagePicker.openPicker({
      mediaType: "video"
    })
      .then(item => {
        this.drawerNormal.close();
        let currentDate = new Date();
        this.setState({
          chatData: [
            {
              name: "Video" + Date.now().toString(),
              type: "video",
              send: true,
              content: {
                uri: item.path
              },
              date: `${currentDate
                .getHours()
                .toString()}:${currentDate.getMinutes().toString()}`,
              watched: false,
              sended: false,
              size: item.size
            },
            ...this.state.chatData
          ]
        });
      })
      .catch(() => {
        this.drawerNormal.clsoe();
      });
  }

  audioPickerFunction() {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.audio()]
      },
      (error, res) => {
        this.drawerNormal.close();
        if (!error) {
          let currentDate = new Date();
          this.setState({
            chatData: [
              {
                name: res.fileName + res.type,
                type: "audio",
                send: true,
                content: {
                  uri: res.uri
                },
                date: `${currentDate
                  .getHours()
                  .toString()}:${currentDate.getMinutes().toString()}`,
                watched: false,
                sended: false,
                size: res.fileSize
              },
              ...this.state.chatData
            ]
          });
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
        this.drawerNormal.close();
        if (!error) {
          let currentDate = new Date();
          this.setState({
            chatData: [
              {
                name: res.fileName,
                type: "other",
                send: true,
                content: {
                  uri: res.uri
                },
                date: `${currentDate
                  .getHours()
                  .toString()}:${currentDate.getMinutes().toString()}`,
                watched: false,
                sended: false,
                size: res.fileSize
              },
              ...this.state.chatData
            ]
          });
        }
      }
    );
  }

  render() {
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
            <ScrollView inverted>
              <FlatList
                keyboardShouldPersistTaps="always"
                inverted
                style={{ width: "100%", height: "100%" }}
                data={this.state.chatData}
                renderItem={({ item }) => {
                  if (item.type === "text") {
                    if (!item.send)
                      return (
                        <View style={styles.ContainViewNotSend}>
                          <TouchableOpacity>
                            <Text style={styles.textNotSend}>
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
                        <View style={styles.containViewSend}>
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
                            <Text style={styles.textSend}>{item.content}</Text>
                          </TouchableOpacity>
                        </View>
                      );
                    }
                  } else if (item.type === "image") {
                    if (!item.send) {
                      return (
                        <View style={styles.ContainViewNotSend}>
                          <TouchableOpacity style={{}} onPress={() => {}}>
                            <Image
                              style={{
                                width:
                                  item.width < width * 0.75 &&
                                  item.height < height / 2.5
                                    ? item.width
                                    : item.width >= item.height
                                    ? width * 0.75
                                    : item.width * (height / 2.5 / item.height),
                                height:
                                  item.width < width * 0.75 &&
                                  item.height < height / 2.5
                                    ? item.height
                                    : item.height >= item.width
                                    ? height / 2.5
                                    : item.height *
                                      ((width * 0.75) / item.width),

                                padding: "2%"
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
                      return (
                        <View style={styles.containViewSend}>
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
                            <Image
                              style={{
                                width:
                                  item.width < width * 0.75 &&
                                  item.height < height / 2.5
                                    ? item.width
                                    : item.width >= item.height
                                    ? width * 0.75
                                    : item.width * (height / 2.5 / item.height),
                                height:
                                  item.width < width * 0.75 &&
                                  item.height < height / 2.5
                                    ? item.height
                                    : item.height >= item.width
                                    ? height / 2.5
                                    : item.height *
                                      ((width * 0.75) / item.width),

                                padding: "2%"
                              }}
                              source={item.content}
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    }
                  } else {
                    if (!item.send) {
                      return (
                        <View style={styles.ContainViewNotSend}>
                          <TouchableOpacity>
                            <View
                              style={{
                                flexDirection: "row",
                                borderWidth: 1,
                                borderRadius: 5,
                                backgroundColor: "white",
                                padding: "1%",
                                alignItems: "center"
                              }}
                            >
                              <View
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center"
                                }}
                              >
                                <Text>{item.name}</Text>
                                <Text>
                                  {item.size < 1024
                                    ? item.size + "B"
                                    : item.size / 1024 < 1024
                                    ? parseFloat(
                                        Math.round((item.size / 1024) * 100) /
                                          100
                                      ).toFixed(2) + "KB"
                                    : item.size / (1024 * 1024) < 1024
                                    ? parseFloat(
                                        Math.round(
                                          (item.size / (1024 * 1024)) * 100
                                        ) / 100
                                      ).toFixed(2) + "MB"
                                    : parseFloat(
                                        Math.round(
                                          (item.size / (1024 * 1024 * 1024)) *
                                            100
                                        ) / 100
                                      ).toFixed(2) + "GB"}
                                </Text>
                              </View>
                              <View style={{ width: "3%" }} />
                              <TouchableOpacity>
                                <View
                                  style={{
                                    paddingTop: "2%",
                                    PaddingBottom: "2%",
                                    borderWidth: 0.5,
                                    borderRadius: 5
                                  }}
                                >
                                  <Image
                                    style={{
                                      width: width / 10,
                                      height: width / 10,
                                      resizeMode: "contain"
                                    }}
                                    source={require("../RES/download.png")}
                                  />
                                </View>
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                          <View style={{ width: "2%" }} />
                          <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 10 }}>{item.date}</Text>
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View style={styles.containViewSend}>
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
                            <View
                              style={{
                                flexDirection: "row",
                                borderWidth: 1,
                                borderRadius: 5,
                                backgroundColor: "green",
                                padding: "1%",
                                alignItems: "center"
                              }}
                            >
                              <TouchableOpacity>
                                <View
                                  style={{
                                    paddingTop: "2%",
                                    PaddingBottom: "2%",
                                    borderWidth: 0.5,
                                    borderRadius: 5
                                  }}
                                >
                                  <Image
                                    style={{
                                      width: width / 10,
                                      height: width / 10,
                                      resizeMode: "contain"
                                    }}
                                    source={require("../RES/download.png")}
                                  />
                                </View>
                              </TouchableOpacity>
                              <View style={{ width: "3%" }} />
                              <View
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center"
                                }}
                              >
                                <Text>{item.name}</Text>
                                <Text>
                                  {item.size < 1024
                                    ? item.size + "B"
                                    : item.size / 1024 < 1024
                                    ? parseFloat(
                                        Math.round((item.size / 1024) * 100) /
                                          100
                                      ).toFixed(2) + "KB"
                                    : item.size / (1024 * 1024) < 1024
                                    ? parseFloat(
                                        Math.round(
                                          (item.size / (1024 * 1024)) * 100
                                        ) / 100
                                      ).toFixed(2) + "MB"
                                    : parseFloat(
                                        Math.round(
                                          (item.size / (1024 * 1024 * 1024)) *
                                            100
                                        ) / 100
                                      ).toFixed(2) + "GB"}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      );
                    }
                  }
                }}
              />
            </ScrollView>
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
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                setTimeout(this.drawerNormal.open, 250);
              }}
            >
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
              height: "10%",
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
  },
  ContainViewNotSend: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "3%",
    marginRight: "15%",
    paddingTop: "1%",
    paddingBottom: "1%"
  },
  containViewSend: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "15%",
    paddingTop: "1%",
    paddingBottom: "1%",
    alignItems: "center",
    marginRight: "3%"
  },
  textNotSend: {
    fontSize: 16,
    paddingTop: "2%",
    paddingBottom: "2%",
    padding: "1%",
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: "white"
  },
  textSend: {
    fontSize: 16,
    paddingTop: "2%",
    paddingBottom: "2%",
    padding: "1%",
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: "green"
  }
});

export default createMaterialTopTabNavigator({
  Standard: NormalChat,
  Secure: SecureChat
});
