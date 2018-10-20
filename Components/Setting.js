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
          <View
            style={{
              flex: 7,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginTop: "2%",
                width: "90%",
                borderBottomWidth: 0.5,
                marginBottom: "1%"
              }}
            >
              General Settings
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: "5%",
                width: "90%",
                borderBottomWidth: 0.5,
                marginBottom: "1%"
              }}
            >
              Theme Settings
            </Text>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Theme</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Change Chat Background</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Chat Font</Text>
            </TouchableHighlight>

            <Text
              style={{
                fontSize: 16,
                marginTop: "5%",
                width: "90%",
                borderBottomWidth: 0.5,
                marginBottom: "1%"
              }}
            >
              Privacy Settings
            </Text>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Last Seen Status</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => this.props.navigation.navigate("SignInPage")}
            >
              <Text>Log Out!</Text>
            </TouchableHighlight>
            <Text
              style={{
                fontSize: 16,
                marginTop: "5%",
                width: "90%",
                borderBottomWidth: 0.5,
                marginBottom: "1%"
              }}
            >
              Support
            </Text>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Ask a Question</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ borderBottomWidth: 0.25, width: "90%", padding: "1%" }}
              onPress={() => {}}
            >
              <Text>Rich Messenger FAQ</Text>
            </TouchableHighlight>
          </View>
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
