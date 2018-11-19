import React, { Component } from "react";
import { Image } from "react-native";

export default class Wallpaper extends Component {
  render() {
    return (
      <Image
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: this.props.opacity
        }}
        source={this.props.source}
      />
    );
  }
}
