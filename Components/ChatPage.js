import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

class ChatPage extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: "75%" }} />
        <View
          style={{
            flexDirection: "row",
            borderTopWidth: 2,
            width: "90%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextInput
            placeholder="Type to start chat ..."
            style={{ textAlign: "auto", flex: 6 }}
          />
          <Button title="Send" style={{ marginLeft: 10, flex: 1 }} />
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
