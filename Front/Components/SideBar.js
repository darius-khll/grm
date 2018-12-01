import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Wallpaper from "./Wallpaper";

export default class SideBar extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          height: "100%"
        }}
      >
        <Wallpaper source={require("../RES/sidebarbackground.jpg")} />

        <View
          style={{
            width: "80%",
            height: "40%",
            marginTop: "5%",
            marginBottom: "3%",
            borderWidth: 1,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text> Arash </Text>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.ViewStyle}>
            <TouchableHighlight style={styles.ButtonStyle}>
              <Text style={styles.TextStyle}>Collapse Menu</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.Seprator} />
          <View style={styles.ViewStyle}>
            <TouchableHighlight style={styles.ButtonStyle}>
              <Text style={styles.TextStyle}>My Profile</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.Seprator} />
          <View style={styles.ViewStyle}>
            <TouchableHighlight style={styles.ButtonStyle}>
              <Text style={styles.TextStyle}>Messages</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.Seprator} />
          <View style={styles.ViewStyle}>
            <TouchableHighlight style={styles.ButtonStyle}>
              <Text style={styles.TextStyle}>Contacts</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.Seprator} />
          <View style={styles.ViewStyle}>
            <TouchableHighlight style={styles.ButtonStyle}>
              <Text style={styles.TextStyle}>Search For A New Contact</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.Seprator} />
          <View style={styles.ViewStyle}>
            <TouchableHighlight style={styles.ButtonStyle}>
              <Text style={styles.TextStyle}>Shop</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.Seprator} />
          <View style={styles.ViewStyle}>
            <TouchableHighlight style={styles.ButtonStyle}>
              <Text style={styles.TextStyle}>Settings</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.Seprator} />
          <View style={styles.ViewStyle}>
            <TouchableHighlight style={styles.ButtonStyle}>
              <Text style={styles.TextStyle}>Rich Messenger FAQs</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.Seprator} />
          <View style={styles.ViewStyle}>
            <TouchableHighlight style={styles.ButtonStyle}>
              <Text style={styles.TextStyle}>About Us</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.Seprator} />
        </ScrollView>
        <View style={{ height: "3%" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    width: "80%",
    alignItems: "center",
    marginLeft: "10%"
  },
  TextStyle: {
    fontWeight: "bold",
    fontSize: 18,
    padding: "1%"
  },
  Seprator: {
    width: "80%",
    borderBottomWidth: 1.5,
    borderColor: "#353535",
    marginLeft: "10%"
  },
  ButtonStyle: {}
});
