import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Wallpaper from "./Wallpaper";

export default class DrawerChat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/backlight.jpg")} />
        <View
          style={[styles.controlPanel, { justifyContent: "space-between" }]}
        >
          <Text style={styles.textStyle}>Send a File...</Text>
          <TouchableOpacity onPress={() => this.props.closeDrawer()}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.controlPanel, { justifyContent: "space-around" }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.cameraRoll()}
          >
            <Image
              style={styles.images}
              source={require("../RES/camera.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.imagePicker()}
          >
            <Image
              style={styles.images}
              source={require("../RES/imagepicker.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.videoPicker()}
          >
            <Image style={styles.images} source={require("../RES/video.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.audioPicker()}
          >
            <Image style={styles.images} source={require("../RES/audio.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.filePicker()}
          >
            <Image style={styles.images} source={require("../RES/files.png")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  controlPanel: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginLeft: "5%",
    marginTop: "3%"
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 15
  },
  images: {
    resizeMode: "contain",
    height: "90%",
    width: "100%"
  },
  button: {
    height: "100%",
    width: "18%"
  }
});
