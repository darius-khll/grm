import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";

class Setting extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{
              backgroundColor: "gray",
              justifyContent: "space-between",
              flex: 1
            }}
          >
            <View>
              <TouchableHighlight>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../RES/expand1.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("MyProfile")}
              >
                <View>
                  <Image
                    style={styles.image}
                    source={require("../RES/profile1.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("MainPage")}
              >
                <View>
                  <Image
                    style={styles.image}
                    source={require("../RES/message1.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Contacts")}
              >
                <View>
                  <Image
                    style={styles.image}
                    source={require("../RES/contacts1.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Shop")}
              >
                <View>
                  <Image
                    style={styles.image}
                    source={require("../RES/shop1.png")}
                  />
                </View>
              </TouchableHighlight>
            </View>
            <View style={StyleSheet.downLeftBand}>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Setting")}
              >
                <View>
                  <Image
                    style={styles.image}
                    source={require("../RES/setting1.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("About")}
              >
                <View>
                  <Image
                    style={styles.image}
                    source={require("../RES/about1.png")}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ flex: 7 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2deef"
  },
  welcome: {
    fontSize: 25,
    textAlign: "center",
    margin: 30,
    marginBottom: 12
  },
  version: {
    textAlign: "center",
    color: "#9B59B6",
    marginBottom: 180
  },
  creators: {
    textAlign: "center",
    marginBottom: 15
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    margin: 2
  }
});

export default createStackNavigator({
  Setting: {
    screen: Setting
  }
});
