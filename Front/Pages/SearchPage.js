import React from "react";
import { Text, View, StyleSheet, TextInput, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";

let { width } = Dimensions.get("window");

class BasedOnID extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="username"
          style={styles.searchBox}
          placeholder="search for ID"
        />
      </View>
    );
  }
}

class BasedOnTags extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="username"
          style={styles.searchBox}
          placeholder="search for Tags"
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
          style={styles.searchBox}
          placeholder="Search for Phone Number"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  searchBox: {
    width: "90%",
    borderBottomWidth: width / 360,
    borderRadius: 5,
    padding: "2%"
  }
});

export default createMaterialTopTabNavigator({
  ID: BasedOnID,
  Number: BasedOnPhoneNumber,
  Tags: BasedOnTags
});
