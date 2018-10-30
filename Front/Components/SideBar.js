import React, { Component } from "react";
import { Text, View, Image, Animated, TouchableHighlight } from "react-native";
import Wallpaper from "./Wallpaper";

export default class SideBar extends Component {
  render() {
    return (
      <Animated.View
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
                  source={this.props.store.collapseIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.store.collapseText}
                </Text>
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
                  source={this.props.store.myProfileIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.store.myProfileText}
                </Text>
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
                  source={this.props.store.messagesIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.store.messagesText}
                </Text>
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
                  source={this.props.store.contactsIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.store.contactsText}
                </Text>
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
                  source={this.props.store.shopIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.store.shopText}
                </Text>
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
                  source={this.props.store.settingIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.store.settingText}
                </Text>
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
                  source={this.props.store.aboutIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.store.aboutText}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </Animated.View>
    );
  }
}
