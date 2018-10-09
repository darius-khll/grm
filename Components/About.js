import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Picker
} from "react-native";

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Rich Messenger</Text>
        <Text style={styles.version}>Rich Messenger Version 1.0.0 </Text>
        <Text style={styles.creators}>
          Created By Ali Khalili & Arash Heidary
        </Text>
        <Text style={{ marginBottom: 2, textAlign: "center" }}>
          Website: www.richmessenger.com
        </Text>
        <Text style={{ marginBottom: 30, textAlign: "center" }}>
          E-Mail: info@richmessenger.com
        </Text>
        <Text>©2018</Text>
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
