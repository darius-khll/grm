import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
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
        <View style={{ flex: 0.15 }} />
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
  }
});
