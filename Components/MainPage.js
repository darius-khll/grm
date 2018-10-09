import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            width: "100%",
            borderBottomWidth: 2,
            justifyContent: "center",
            backgroundColor: "gray"
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center" }}>CHATS</Text>
        </View>
        <View style={{ flex: 13, flexDirection: "row" }}>
          <View
            style={{ backgroundColor: "gray", justifyContent: "space-between" }}
          >
            <View>
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
                source={require("../RES/message.png")}
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
              <Image
                style={{ margin: 2 }}
                source={require("../RES/about.png")}
              />
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
