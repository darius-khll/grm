import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { createStackNavigator } from "react-navigation";

class ChatPage extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
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

export default createStackNavigator({
  ChatPage: {
    screen: ChatPage
  }
});
