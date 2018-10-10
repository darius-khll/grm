import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default class ChatPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            borderBottomWidth: 2
          }}
        >
          <Image source={require("../RES/sampleprofileimage.jpg")} />
          <Text style={{ marginLeft: 10 }}>Arash</Text>
        </View>
        <View style={{ height: "75%" }} />
        <View
          style={{
            borderTopWidth: 2,
            width: "90%",
            justifyContent: "center"
          }}
        >
          <TextInput
            placeholder="Type to start chat ..."
            style={{ textAlign: "left" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#e2deef"
  }
});
