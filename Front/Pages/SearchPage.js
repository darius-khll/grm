import React from "react";
import { Text, View, StyleSheet, TextInput, Button, width } from "react-native";
import {
  HeaderBackButton,
  createMaterialTopTabNavigator
} from "react-navigation";
import Wallpaper from "../Components/Wallpaper";

class BasedOnID extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="username"
          style={{ width: "90%", borderBottomWidth: width / 360 }}
          placeholder="search for ID"
        />
      </View>
    );
  }
}

class BasedOnPhoneNumber extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="telephoneNumber"
          style={{ width: "90%", borderBottomWidth: width / 360 }}
          placeholder="Search for Phone Number"
        />
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
  ID: BasedOnID,
  Number: BasedOnPhoneNumber
});
