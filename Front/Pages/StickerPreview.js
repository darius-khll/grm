import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableHighlight,
  Dimensions
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import stickerPreviewStore from "../MobX/StickerPreviewStore";
import { observer } from "mobx-react";
import Axios from "axios";
let { width, height } = Dimensions.get("window");

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/stickers"
});

@observer
class StickerPreview extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: stickerPreviewStore.name,
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  componentWillMount() {
    requester
      .get("/sticker", {
        params: {
          id: "_id"
        }
      })
      .then(response => {
        if (response.status === 200) {
          stickerPreviewStore.name = response.data.name;
          stickerPreviewStore.previews = response.data.previews;
          stickerPreviewStore.price = response.data.price;
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <View
          style={{
            height: height / 3,
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: width / 10, fontWeight: "bold" }}>
            {stickerPreviewStore.name}
          </Text>
          <Text style={{ fontSize: width / 15 }}>
            Price: {stickerPreviewStore.price}$
          </Text>
          <View style={{ height: height / 5 }} />
        </View>
        <View style={{ height: height / 2.9 }}>
          <ScrollView horizontal={true}>
            <FlatList
              horizontal={true}
              data={stickerPreviewStore.previews}
              renderItem={({ item }) => {
                return (
                  <View style={styles.viewStyler}>
                    <Image style={styles.image} source={item.image} />
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
        <TouchableHighlight onPress={() => {}} style={styles.button}>
          <Text style={{ fontWeight: "bold", fontSize: width / 18 }}>Buy</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: "3%",
    borderWidth: width / 180,
    borderRadius: 5,
    padding: "1%",
    paddingRight: "6%",
    paddingLeft: "6%"
  },
  viewStyler: {
    height: height / 3,
    marginLeft: width / 100,
    marginRight: width / 100,
    borderWidth: width / 240,
    borderRadius: 5
  },
  image: {
    resizeMode: "contain",
    width: width / 3,
    height: height / 3
  }
});

export default createStackNavigator({
  StickerPreview: {
    screen: StickerPreview
  }
});
