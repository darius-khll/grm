import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            width: "100%",
            borderBottomWidth: 2,
            justifyContent: "center",
            backgroundColor: "gray"
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center" }}>SETTINGS</Text>
        </View>
        <View style={{ flex: 13, flexDirection: "row" }}>
          <View
            style={{ backgroundColor: "gray", justifyContent: "space-between" }}
          >
            <View>
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
                source={require("../RES/message.png")}
              />
              <Image
                style={{ margin: 2 }}
                source={require("../RES/contact.png")}
              />
              <Image
                style={{ margin: 2 }}
                source={require("../RES/shop.png")}
              />
            </View>
            <View style={StyleSheet.downLeftBand}>
              <Image
                style={{ margin: 2 }}
                source={require("../RES/setting.png")}
              />
              <Image
                style={{ margin: 2 }}
                source={require("../RES/about.png")}
              />
            </View>
          </View>
          <View style={{ flex: 7 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2deef"
  },
  welcome: {
    fontSize: 25,
    textAlign: "center",
    margin: 30,
    marginBottom: 12
  },
  version: {
    textAlign: "center",
    color: "#9B59B6",
    marginBottom: 180
  },
  creators: {
    textAlign: "center",
    marginBottom: 15
  }
});
