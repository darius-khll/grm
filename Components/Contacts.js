import React, { Component } from "react";
import { StyleSheet, Text, View, Image, SectionList } from "react-native";

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
          <Text style={{ fontSize: 20, textAlign: "center" }}>CONTACTS</Text>
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
