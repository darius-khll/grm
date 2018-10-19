import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image
} from "react-native";
import { createStackNavigator } from "react-navigation";

class MyProfile extends Component {
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
          <View style={{ flex: 7, marginTop: 6, alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly"
              }}
            >
              <Image
                style={styles.profileImage}
                source={require("../RES/anonymous.png")}
              />
              <View>
                <Button
                  title="Edit Profile"
                  onPress={() =>
                    this.props.navigation.navigate("EditProfile", {
                      image: require("../RES/anonymous.png")
                    })
                  }
                />
              </View>
            </View>
            <Text
              style={{
                margin: 5,
                marginTop: 15,
                borderBottomWidth: 0.5,
                width: "85%"
              }}
            >
              Bio
            </Text>
            <Text
              style={{
                width: "80%"
              }}
            >
              Bio From The Server
            </Text>
            <Text
              style={{
                margin: 5,
                marginTop: 15,
                borderBottomWidth: 0.5,
                width: "85%"
              }}
            >
              General Informations
            </Text>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Name:</Text>
              <Text>Name Of Person From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Age:</Text>
              <Text>Age of Person From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Gender:</Text>
              <Text>From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>ID:</Text>
              <Text>ID From Server</Text>
            </View>
            <Text
              style={{
                margin: 5,
                marginTop: 15,
                borderBottomWidth: 0.5,
                width: "85%"
              }}
            >
              Location Informations
            </Text>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Country:</Text>
              <Text>Country From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>City:</Text>
              <Text>City from Server</Text>
            </View>
            <Text
              style={{
                margin: 5,
                marginTop: 15,
                borderBottomWidth: 0.5,
                width: "85%"
              }}
            >
              Contact Informations
            </Text>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Phone Number:</Text>
              <Text>From Server</Text>
            </View>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Text>Email:</Text>
              <Text>From Server</Text>
            </View>
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
  },
  profileImage: {
    marginRight: 30,
    width: 75,
    height: 75,
    resizeMode: "contain",
    margin: 2
  }
});

export default createStackNavigator({
  MyProfile: {
    screen: MyProfile
  }
});
