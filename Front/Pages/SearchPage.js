import React from "react";
import { Text, View, StyleSheet, TextInput, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import { observer } from "mobx-react";
import searchPageStore from "../MobX/SearchPageStore";
import Axios from "axios";

let { width } = Dimensions.get("window");

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/search"
});

@observer
class BasedOnID extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="username"
          style={styles.searchBox}
          placeholder="search for ID"
          onChangeText={text => (searchPageStore.idSearchText = text)}
        />
      </View>
    );
  }
}

@observer
class BasedOnTags extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="username"
          style={styles.searchBox}
          placeholder="search for Tags"
          onChangeText={text => (searchPageStore.tagSearchText = text)}
        />
      </View>
    );
  }
}

@observer
class BasedOnPhoneNumber extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="telephoneNumber"
          style={styles.searchBox}
          placeholder="Search for Phone Number"
          onChangeText={text => (searchPageStore.phoneSearchText = text)}
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
