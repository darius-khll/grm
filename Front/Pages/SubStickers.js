import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image,
  FlatList
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import { observer } from "mobx-react";
import substickerStore from "../MobX/SubstickerStore";
import Axios from "axios";
let { width } = Dimensions.get("window");

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/stickers/category"
});

@observer
class SubStickers extends Component {
  static navigationOptions = ({ navigation }) => {
    let category = navigation.getParam("category", "Unknown");
    return {
      headerTitle: category + " Stickers",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  componentWillMount() {
    let category = this.props.navigation.getParam("category", "unknown");
    requester.get(category).then(response => {
      if (response.status === 200) {
        substickerStore.themes = response.data.stickers;
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <ScrollView style={{ width: "100%" }}>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ height: width / 100 }} />
            <FlatList
              style={{ width: "98%" }}
              data={substickerStore.stickers}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      marginRight: "0.5%",
                      marginLeft: "0.5%",
                      marginBottom: width / 120,
                      borderWidth: width / 180,
                      borderRadius: 5
                    }}
                  >
                    <TouchableHighlight onPress={() => {}}>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center"
                        }}
                      >
                        <Image
                          source={item.image}
                          style={{ height: "80%", width: "50%" }}
                        />
                        <View style={{ marginLeft: "5%" }}>
                          <Text
                            style={{ fontSize: width / 18, fontWeight: "bold" }}
                          >
                            {item.name}
                          </Text>
                          <Text style={{ fontSize: width / 22 }}>
                            {item.numOfStickers}
                            {" Stickers"}
                          </Text>
                          <Text
                            style={{ fontSize: width / 25, marginBottom: "2%" }}
                          >
                            {item.price}
                            {"$"}
                          </Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
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
    marginTop: "7%",
    borderWidth: width / 180,
    borderRadius: 5,
    padding: "1%",
    paddingRight: "6%",
    paddingLeft: "6%"
  }
});

export default createStackNavigator({
  SubStickers: {
    screen: SubStickers
  }
});
