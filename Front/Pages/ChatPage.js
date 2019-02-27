import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  View,
  NativeModules,
  Image
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import { GiftedChat, Send } from "react-native-gifted-chat";
import Wallpaper from "../Components/Wallpaper";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";
const { width, height } = Dimensions.get("window");
const ImagePicker = NativeModules.ImageCropPicker;

class NormalChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
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
          let message = [
            {
              _id: Date.now(),
              createdAt: new Date(),
              user: {
                _id: 1
              },
              file: res.uri
            }
          ];
          this.onSend(message);
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
          messageRead: true,
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

  renderSend(props) {
    if (!props.text.trim()) {
      return (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() =>
              ImagePicker.openPicker({
                mediaType: "photo"
              }).then(image => {
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
            }
          >
            <Image
              style={{
                width: width / 10,
                height: height / 18,
                marginRight: width / 50,
                marginBottom: "10%"
              }}
              source={require("../RES/photo.png")}
              resizeMode="center"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              ImagePicker.openCamera({}).then(image => {
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
            }
          >
            <Image
              style={{
                width: width / 10,
                height: height / 18,
                marginRight: width / 50,
                marginBottom: "10%"
              }}
              source={require("../RES/camera.png")}
              resizeMode="center"
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <Send {...props}>
          <View>
            <Image
              style={{ width: width / 8, height: height / 14 }}
              source={require("../RES/sendicon.png")}
              resizeMode="center"
            />
          </View>
        </Send>
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Wallpaper source={require("../RES/background.jpg")} mode="cover" />
        <GiftedChat
          renderSend={this.renderSend}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

class SecureChat extends React.Component {
  render() {
    return <View />;
  }
}

export default createMaterialTopTabNavigator({
  Standard: NormalChat,
  Secure: SecureChat
});
