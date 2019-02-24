import React from "react";
import {
  Text,
  Dimensions,
  View,
  NativeModules,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import Wallpaper from "../Components/Wallpaper";
import Drawer from "react-native-drawer";
import chatPageStore from "../MobX/ChatPageStore";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";
import DrawerChat from "../Components/DrawerChat";
const { width } = Dimensions.get("window");
const ImagePicker = NativeModules.ImageCropPicker;

class NormalChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  closeDrawer() {
    this.drawerNormal.close();
  }

  imagePickerFunction() {
    ImagePicker.openPicker({
      mediaType: "photo"
    })
      .then(image => {
        this.closeDrawer();
        let message = [
          {
            _id: Date.now(),
            createdAt: new Date(),
            user: {
              _id: 1
            },
            image: image.path
          }
        ];
        this.onSend(message);
      })
      .catch(() => {
        this.drawerNormal.clsoe();
      });
  }

  cameraRollFunction() {
    ImagePicker.openCamera({})
      .then(image => {
        this.drawerNormal.close();
        let message = [
          {
            _id: Date.now(),
            createdAt: new Date(),
            user: {
              _id: 1
            },
            image: image.path
          }
        ];
        this.onSend(message);
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
        let message = [
          {
            _id: Date.now(),
            createdAt: new Date(),
            user: {
              _id: 1
            },
            video: item.path
          }
        ];
        this.onSend(message);
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

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          },
          image:
            "https://www.straatmakershop.nl/image/straatmakershopproducts/schoffel_rond_16cm_recht_steel_170cm.png"
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
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
        <View style={{ flex: 1 }}>
          <Wallpaper source={require("../RES/liverpool.jpg")} mode="cover" />
          <GiftedChat
            onPressActionButton={() => {
              Keyboard.dismiss();
              setTimeout(this.drawerNormal.open, 350);
            }}
            messages={this.state.messages}
            renderActions={this.renderCustomActions}
            placeholder="Type here ..."
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1
            }}
          />
        </View>
      </Drawer>
    );
  }
}

class SecureChat extends React.Component {
  render() {
    return <View />;
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
