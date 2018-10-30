import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { observer } from "mobx-react";
import payPageStore from "../MobX/PayPageStore";
import Wallpaper from "../Components/Wallpaper";

const { width } = Dimensions.get("window");

@observer
class PayPage extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/firstbackground.jpg")} />
        <ScrollView>
          <View style={styles.container1}>
            <Text style={styles.welcome}>Paying Informations</Text>
            <Text style={styles.instructions}>You should buy!</Text>

            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("MainPage")}
              style={styles.button}
            >
              <Text style={{ fontWeight: "bold" }}>Start Masseging</Text>
            </TouchableHighlight>
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
  container1: {
    justifyContent: "center",
    alignItems: "center",
    padding: "5%"
  },
  welcome: {
    fontSize: width / 14.4,
    textAlign: "center",
    marginTop: width / 3.6,
    marginBottom: width / 3.6
  },
  instructions: {
    marginBottom: width / 10
  },
  button: {
    borderWidth: width / 180,
    borderRadius: 5,
    padding: "1%",
    paddingRight: "6%",
    paddingLeft: "6%"
  }
});

export default createStackNavigator({
  PayPage: {
    screen: PayPage
  }
});
