import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";

class NormalChat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 7.5 }} />
        <View
          style={{
            flex: 1.5,
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

class SecureChat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
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
        <View style={{ flex: 6.5 }} />
        <View
          style={{
            flex: 1.5,
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

export default createMaterialTopTabNavigator({
  Standard: NormalChat,
  Secure: SecureChat
});
