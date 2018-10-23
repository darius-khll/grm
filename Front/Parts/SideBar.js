import React, { Component } from "react";
import { Text, View, Image, Animated, TouchableHighlight } from "react-native";

export default class SideBar extends Component {
  render() {
    return (
      <Animated.View
        style={{
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "space-between",
          width: this.props.width
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight onPress={this.props.toggle}>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={this.props.collapseIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.collapseText}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (this.props.expanded) {
                this.props.toggle();
              }
              this.props.navigationToMyProfile();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={this.props.myProfileIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.myProfileText}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (this.props.expanded) {
                this.props.toggle();
              }
              this.props.navigationToMainPage();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={this.props.messagesIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.messagesText}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (this.props.expanded) {
                this.props.toggle();
              }
              this.props.navigationToContacts();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={this.props.contactsIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.contactsText}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (this.props.expanded) {
                this.props.toggle();
              }
              this.props.navigationToShop();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={this.props.shopIcon}
                />
                <Text style={this.props.textStyle}>{this.props.shopText}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            onPress={() => {
              if (this.props.expanded) {
                this.props.toggle();
              }
              this.props.navigationToSetting();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={this.props.settingIcon}
                />
                <Text style={this.props.textStyle}>
                  {this.props.settingText}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (this.props.expanded) {
                this.props.toggle();
              }
              this.props.navigationToAbout();
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={this.props.imageStyle}
                  source={this.props.aboutIcon}
                />
                <Text style={this.props.textStyle}>{this.props.aboutText}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </Animated.View>
    );
  }
}
