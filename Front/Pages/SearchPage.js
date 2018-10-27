import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import BackGround from "../Components/BackGround";

class BasedOnID extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BackGround source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="username"
          style={{ width: "90%", borderBottomWidth: 1 }}
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
        <BackGround source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="telephoneNumber"
          style={{ width: "90%", borderBottomWidth: 1 }}
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
    alignItems: "center",
    backgroundColor: "#e2deef"
  }
});

export default createMaterialTopTabNavigator({
  ID: BasedOnID,
  Number: BasedOnPhoneNumber
});
