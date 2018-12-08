import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
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
        <View>
          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={() => this.props.collapser()}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{
                  resizeMode: "contain",
                  height: "60%",
                  marginRight: "1%"
                }}
                source={require("../RES/collapse.png")}
              />
              <Text style={styles.TextStyle}>Collapse Menu</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            height: "40%",
            marginTop: "5%",
            marginBottom: "3%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            style={styles.imageProfile}
            source={require("../RES/anonymous.png")}
          />
          <TouchableOpacity onPress={() => this.props.goToMyProfile()}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Your Name
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, padding: "5%", color: "white" }}>
            Days Remaining: 5 Day(s)
          </Text>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.ViewStyle}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => this.props.goToMessages()}
            >
              <Text style={styles.TextStyle}>Messages</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewStyle}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => this.props.goToContacts()}
            >
              <Text style={styles.TextStyle}>Contacts</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewStyle}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => this.props.goToSearch()}
            >
              <Text style={styles.TextStyle}>Search For A New Contact</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewStyle}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => this.props.goToShop()}
            >
              <Text style={styles.TextStyle}>Shop</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewStyle}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => this.props.goToSetting()}
            >
              <Text style={styles.TextStyle}>Settings</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewStyle}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => {
                Linking.openURL("http://www.google.com");
              }}
            >
              <Text style={styles.TextStyle}>Rich Messenger FAQs</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewStyle}>
            <TouchableOpacity
              style={styles.ButtonStyle}
              onPress={() => this.props.goToAbout()}
            >
              <Text style={styles.TextStyle}>About Us</Text>
            </TouchableOpacity>
          </View>
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
    padding: "2%"
  },
  Seprator: {
    width: "80%",
    borderBottomWidth: 1.5,
    borderColor: "#353535",
    marginLeft: "10%"
  },
  imageProfile: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    width: "30%",
    height: "40%",
    marginBottom: "2%"
  }
});
