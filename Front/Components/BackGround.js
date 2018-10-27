import React, { Component } from "react";
import { Text, View, Image, Animated, TouchableHighlight } from "react-native";

export default class BackGround extends Component {
  render() {
    return (
      <Image
        style={{
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
        source={this.props.source}
      />
    );
  }
}
