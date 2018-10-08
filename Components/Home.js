import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Rich Messenger!</Text>
        <Text style={styles.instructions}>
          Pleas Enter Your Phone Number To Get Started
        </Text>
        <TextInput placeholder="Phone Number" style={styles.phoneText} />
        <Button title="START" color="#9B59B6" style={styles.loginButton} />
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
    margin: 10,
    marginBottom: 100
  },
  instructions: {
    textAlign: "center",
    color: "#9B59B6",
    marginBottom: 5
  },
  phoneText: {
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#9B59B6",
    marginBottom: 7
  },
  loginButton: {
    textAlign: "center",
    fontSize: 12
  }
});
