import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  NativeModules,
  PixelRatio
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import { observer } from "mobx-react";
import Wallpaper from "../Components/Wallpaper";
import profileImageStore from "../MobX/ProfileImageStore";
import Axios from "axios";

const ImagePicker = NativeModules.ImageCropPicker;

const { width } = Dimensions.get("window");
const requester = Axios.create({
  baseURL: "https://localhost:3000/api/editprofileimage"
});

@observer
class ProfileImage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Profile Image",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  componentWillMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <View
          style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}
        >
          {profileImageStore.image === null ? (
            <Text>Select a Photo</Text>
          ) : (
            <Image style={styles.avatar} source={profileImageStore.image} />
          )}
        </View>
        <TouchableOpacity
          onPress={() =>
            ImagePicker.openCamera({
              cropping: true,
              cropperCircleOverlay: true
            }).then(image => {
              profileImageStore.image = {
                uri: image.path,
                width: image.width,
                height: image.height
              };
            })
          }
        >
          <Text>Take a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            ImagePicker.openPicker({
              cropperCircleOverlay: true,
              cropping: true
            }).then(image => {
              profileImageStore.image = {
                uri: image.path,
                width: image.width,
                height: image.height
              };
            })
          }
        >
          <Text>From Gallery</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e2deef"
  },
  avatarContainer: {
    borderColor: "#9B9B9B",
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

export default createStackNavigator({
  ProfileImage: {
    screen: ProfileImage
  }
});
