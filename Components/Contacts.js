import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";

class Contacts extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={{ backgroundColor: "gray", justifyContent: "space-between" }}
          >
            <View>
              <TouchableHighlight>
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/expand.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Profile")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/profile.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("MainPage")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/message.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Contacts")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/contact.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Shop")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/shop.png")}
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
                    style={{ margin: 2 }}
                    source={require("../RES/setting.png")}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("About")}
              >
                <View>
                  <Image
                    style={{ margin: 2 }}
                    source={require("../RES/about.png")}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <SectionList
              sections={[
                {
                  title: "A",
                  data: [
                    {
                      name: "Ali",
                      image: require("../RES/sampleprofileimage.jpg")
                    },
                    {
                      name: "Arash",
                      image: require("../RES/sampleprofileimage.jpg")
                    }
                  ]
                },
                {
                  title: "J",
                  data: [
                    {
                      name: "Jason",
                      image: require("../RES/sampleprofileimage.jpg")
                    },
                    {
                      name: "Jili",
                      image: require("../RES/sampleprofileimage.jpg")
                    }
                  ]
                },
                {
                  title: "F",
                  data: [
                    {
                      name: "Farid",
                      image: require("../RES/sampleprofileimage.jpg")
                    },
                    {
                      name: "Farbod",
                      image: require("../RES/sampleprofileimage.jpg")
                    }
                  ]
                },
                {
                  title: "Y",
                  data: [
                    {
                      name: "Yazdan",
                      image: require("../RES/sampleprofileimage.jpg")
                    },
                    {
                      name: "Yas",
                      image: require("../RES/sampleprofileimage.jpg")
                    }
                  ]
                }
              ]}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      margin: 2,
                      alignItems: "center"
                    }}
                  >
                    <Image source={item.image} />
                    <Text style={{ margin: 5 }}>{item.name}</Text>
                  </View>
                );
              }}
              renderSectionHeader={({ section }) => (
                <View style={{ borderTopWidth: 2, borderBottomWidth: 2 }}>
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index}
            />
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
  }
});

export default createStackNavigator({
  Contacts: {
    screen: Contacts
  }
});
