import React, { Component } from "react";
import { Text, View, Image, Animated, TouchableHighlight } from "react-native";
import Wallpaper from "./Wallpaper";

export default class ShortcutBar extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          width: this.props.width
        }}
      >
        <Wallpaper source={require("../RES/sidebarbackground.jpg")} />
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight onPress={this.props.toggle}>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={require("../RES/expand1.png")}
                />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigationToMyProfile();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={require("../RES/profile1.png")}
                />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigationToMainPage();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={require("../RES/message1.png")}
                />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigationToContacts();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={require("../RES/contacts1.png")}
                />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigationToShop();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={require("../RES/shop1.png")}
                />
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            onPress={() => {
              this.props.navigationToSetting();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={require("../RES/setting1.png")}
                />
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigationToAbout();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={require("../RES/about1.png")}
                />
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
