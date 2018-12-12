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
  closeDrawer() {
    this.drawerNormal.close();
  }

  imagePickerFunction() {
    ImagePicker.openPicker({}).then(() =>
      ToastAndroid.show("OK", ToastAndroid.SHORT)
    );
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
          <View style={{ flex: 9 }}>
            <ScrollView style={{}}>
              <FlatList
                style={{}}
                data={chatPageStore.chatData}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        alignSelf: !item.send ? "flex-start" : "flex-end"
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          marginRight: !item.send ? "15%" : "3%",
                          marginLeft: item.send ? "15%" : "3%",
                          marginBottom: "3%"
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            paddingTop: "2%",
                            paddingBottom: "2%",
                            padding: "1%",
                            borderWidth: 0.5,
                            borderRadius: 5,
                            backgroundColor: item.send ? "green" : "white"
                          }}
                        >
                          {item.content}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
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
              />
            </View>
            <TouchableOpacity>
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
