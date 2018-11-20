import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  TouchableHighlight,
  Dimensions
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import themePreviewStore from "../MobX/ThemePreviewStore";
import { observer } from "mobx-react";
import Axios from "axios";
let { width, height } = Dimensions.get("window");

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/themes"
});

@observer
class Themes extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: themePreviewStore.name,
      headerStyle: { backgroundColor: themePreviewStore.color },
      headerTintColor: themePreviewStore.headerTintColor,
      headerLeft: (
        <HeaderBackButton
          tintColor={themePreviewStore.headerTintColor}
          onPress={() => navigation.goBack(null)}
        />
      )
    };
  };

  componentWillMount() {
    requester
      .get("/theme", {
        params: {
          id: "_id"
        }
      })
      .then(response => {
        if (response.status === 200) {
          themePreviewStore.color = response.data.color;
          themePreviewStore.price = response.data.price;
          themePreviewStore.name = response.data.name;
          themePreviewStore.headerTintColor = response.data.headerTintColor;
          themePreviewStore.wallpaper = response.data.wallpaper;
          themePreviewStore.previews = response.data.previews;
          themePreviewStore.statusStyle = response.data.statusStyle;
          themePreviewStore.statusColor = response.data.statusColor;
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={themePreviewStore.statusColor}
          barStyle={themePreviewStore.statusStyle}
        />
        <Wallpaper source={themePreviewStore.wallpaper} />
        <View
          style={{
            height: height / 3,
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: width / 10, fontWeight: "bold" }}>
            {themePreviewStore.name}
          </Text>
          <Text style={{ fontSize: width / 15 }}>
            Price: {themePreviewStore.price}$
          </Text>
          <View style={{ height: height / 5 }} />
        </View>
        <View style={{ height: height / 2.9 }}>
          <ScrollView horizontal={true}>
            <View style={styles.viewStyler}>
              <Image
                source={themePreviewStore.previews.image1}
                style={styles.image}
              />
            </View>
            <View style={styles.viewStyler}>
              <Image
                source={themePreviewStore.previews.image2}
                style={styles.image}
              />
            </View>
            <View style={styles.viewStyler}>
              <Image
                source={themePreviewStore.previews.image3}
                style={styles.image}
              />
            </View>
            <View style={styles.viewStyler}>
              <Image
                source={themePreviewStore.previews.image4}
                style={styles.image}
              />
            </View>
            <View style={styles.viewStyler}>
              <Image
                source={themePreviewStore.previews.image5}
                style={styles.image}
              />
            </View>
            <View style={styles.viewStyler}>
              <Image
                source={themePreviewStore.previews.image6}
                style={styles.image}
              />
            </View>
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
  Themes: {
    screen: Themes
  }
});
