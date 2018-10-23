import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";

class NormalChat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            position: "absolute"
          }}
          source={require("../RES/background.jpg")}
        />
        <ScrollView style={{ flexDirection: "column-reverse" }}>
          <View
            style={{
              heigth: "10%",
              flexDirection: "row",
              borderTopWidth: 2,
              width: "100%",
              alignItems: "center"
            }}
          >
            <TextInput
              placeholder="Type to start chat ..."
              style={{ textAlign: "auto", width: "80%" }}
            />
            <Button title="Send" style={{ marginLeft: "5%" }} />
          </View>

          <ScrollView style={{}} />
        </ScrollView>
      </View>
    );
  }
}

class SecureChat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            position: "absolute"
          }}
          source={require("../RES/background.jpg")}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            borderBottomWidth: 1
          }}
        >
          <TextInput
            style={{ marginLeft: 10, width: "65%" }}
            placeholder="Crypto Key"
          />
          <Button title="Change Key!" style={{}} />
        </View>
        <ScrollView style={{ flexDirection: "column-reverse" }}>
          <View
            style={{
              heigth: "10%",
              flexDirection: "row",
              borderTopWidth: 2,
              width: "100%",
              alignItems: "center"
            }}
          >
            <TextInput
              placeholder="Type to start chat ..."
              style={{ textAlign: "auto", width: "80%" }}
            />
            <Button title="Send" style={{ marginLeft: "5%" }} />
          </View>
          <ScrollView style={{}} />
        </ScrollView>
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
  Standard: NormalChat,
  Secure: SecureChat
});
