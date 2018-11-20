import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  FlatList
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import { observer } from "mobx-react";
import subThemesStore from "../MobX/SubThemesStore";
import Axios from "axios";
let { width, height } = Dimensions.get("window");

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/themes/category"
});

@observer
class SubThemes extends Component {
  static navigationOptions = ({ navigation }) => {
    let category = navigation.getParam("category", "Unknown");
    return {
      headerTitle: category + " Themes",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  componentWillMount() {
    let category = this.props.navigation.getParam("category", "unknown");
    requester.get(category).then(response => {
      if (response.status === 200) {
        subThemesStore.themes = response.data.themes;
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
              numColumns={2}
              style={{ width: "98%" }}
              data={subThemesStore.themes}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      width: "49%",
                      marginRight: "0.5%",
                      marginLeft: "0.5%",
                      marginBottom: width / 120,
                      borderWidth: width / 180,
                      borderRadius: 5
                    }}
                  >
                    <TouchableHighlight
                      onPress={() => {
                        this.props.navigation.navigate("ThemePreview", {
                          name: item.name
                        });
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                          height: height / 3,
                          justifyContent: "center"
                        }}
                      >
                        <Wallpaper source={item.image} opacity={0.6} />
                        <Text
                          style={{
                            fontSize: width / 18,
                            fontWeight: "bold",
                            textAlign: "center"
                          }}
                        >
                          {item.name}
                        </Text>
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
  SubThemes: {
    screen: SubThemes
  }
});
