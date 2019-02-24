import React, { Component } from "react";
import { Image, View, KeyboardAvoidingView } from "react-native";

export default class Wallpaper extends Component {
  render() {
    return (
      <Image
        style={{
          position: "absolute",
          width: "100%",
          resizeMode: this.props.mode || "stretch",
          height: "100%",
          opacity: this.props.opacity
        }}
        source={this.props.source}
      />
    );
  }
}
