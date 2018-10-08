import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  TextInput,
  Text,
  Button,
  Picker
} from "react-native";

export default class MainPage extends Component {
  state = {
    countryCode: ""
  };
  updateCode(value, index) {
    this.setState({ countryCode: value });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={StyleSheet.leftBand}>
          <View style={StyleSheet.upLeftBand}>
            <Image
              style={{ margin: 2 }}
              source={require("../RES/expand.png")}
            />
            <Image
              style={{ margin: 2 }}
              source={require("../RES/profile.png")}
            />
            <Image
              style={{ margin: 2 }}
              source={require("../RES/contact.png")}
            />
          </View>
          <View style={StyleSheet.downLeftBand}>
            <Image
              style={{ margin: 2 }}
              source={require("../RES/setting.png")}
            />
            <Image style={{ margin: 2 }} source={require("../RES/about.png")} />
          </View>
        </View>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#e2deef"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  leftBand: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  upLeftBand: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  downLeftBand: {}
});
