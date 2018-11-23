import React from "react";
import {
  Text,
  Image,
  Dimensions,
  View,
  StyleSheet,
  BackHandler,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
const { width } = Dimensions.get("window");

class NormalChat extends React.Component {
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.navigate("MainPage");
      return true;
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <ScrollView style={{ flexDirection: "column-reverse" }}>
          <View
            style={{
              heigth: "10%",
              flexDirection: "row",
              borderTopWidth: width / 180,
              borderRadius: 5,
              width: "100%",
              alignItems: "center"
            }}
          >
            <TextInput
              placeholder="Type to start chat ..."
              style={{ textAlign: "auto", width: "80%" }}
            />
            <Button title="Send" style={{ marginLeft: "5%" }} />
          </View>

          <ScrollView style={{}} />
        </ScrollView>
      </View>
    );
  }
}

class SecureChat extends React.Component {
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.navigate("MainPage");
      return true;
    });
  }
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
          <Button title="Change Key!" style={{}} />
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
            <Button title="Send" style={{ marginLeft: "5%" }} />
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
