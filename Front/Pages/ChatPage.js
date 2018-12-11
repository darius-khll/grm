import React from "react";
import {
  Text,
  Image,
  Dimensions,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Drawer from "react-native-drawer";
import chatPageStore from "../MobX/ChatPageStore";
import DrawerChat from "../Components/DrawerChat";
import Wallpaper from "../Components/Wallpaper";
const { width } = Dimensions.get("window");

class NormalChat extends React.Component {
  closeDrawer() {
    this.drawerNormal.close();
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
        content={<DrawerChat closeDrawer={this.closeDrawer.bind(this)} />}
      >
        <View style={styles.container}>
          <Wallpaper source={require("../RES/background.jpg")} />
          <ScrollView style={{ flexDirection: "column-reverse" }}>
            <View
              style={{
                heigth: "10%",
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

            <ScrollView style={{}} />
          </ScrollView>
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
