import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  TextInput,
  Text,
  Button,
  Picker
} from "react-native";

export default class MainPage extends Component {
  state = {
    countryCode: ""
  };
  updateCode(value, index) {
    this.setState({ countryCode: value });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={StyleSheet.leftBand}>
          <View style={StyleSheet.upLeftBand}>
            <Image
              style={{ margin: 2 }}
              source={require("../RES/expand.png")}
            />
            <Image
              style={{ margin: 2 }}
              source={require("../RES/profile.png")}
            />
            <Image
              style={{ margin: 2 }}
              source={require("../RES/contact.png")}
            />
          </View>
          <View style={StyleSheet.downLeftBand}>
            <Image
              style={{ margin: 2 }}
              source={require("../RES/setting.png")}
            />
            <Image style={{ margin: 2 }} source={require("../RES/about.png")} />
          </View>
        </View>
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
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#e2deef"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  leftBand: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  upLeftBand: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  downLeftBand: {}
});
