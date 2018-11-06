import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import { observer } from "mobx-react";
let { width } = Dimensions.get("window");

@observer
class Themes extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Themes",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <ScrollView style={{ width: "97%" }}>
          <Text style={{ marginTop: "1%", fontSize: 18, marginBottom: "5%" }}>
            Welcome To Themes Shop!
          </Text>
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
  Themes: {
    screen: Themes
  }
});
