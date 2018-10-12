import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  FlatList
} from "react-native";
import { createStackNavigator } from "react-navigation";

class MainPage extends Component {
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
          <View style={{ flex: 7 }}>
            <FlatList
              data={[
                {
                  key: "Devin",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jackson",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "James",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Joel",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "John",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jillian",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jimmy",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Julie",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Devin",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jackson",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "James",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Joel",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "John",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jillian",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jimmy",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Julie",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Devin",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jackson",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "James",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Joel",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "John",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jillian",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Jimmy",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                },
                {
                  key: "Julie",
                  image: require("../RES/sampleprofileimage.jpg"),
                  lastMessage: "The last Message",
                  date: "16:05"
                }
              ]}
              renderItem={({ item }) => {
                return (
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.navigate("ChatPage", {
                        name: item.key
                      })
                    }
                  >
                    <View style={{ flexDirection: "row", margin: 2 }}>
                      <Image source={item.image} />
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "space-around"
                        }}
                      >
                        <Text style={styles.item}>{item.key}</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "flex-start"
                          }}
                        >
                          <Text style={{ fontSize: 12, width: "60%" }}>
                            {item.lastMessage}
                          </Text>
                          <Text style={{ fontSize: 10, width: "40%" }}>
                            {item.date}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableHighlight>
                );
              }}
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
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    margin: 2
  },
  creators: {
    textAlign: "center",
    marginBottom: 15
  }
});

export default createStackNavigator({
  MainPage: {
    screen: MainPage
  }
});
