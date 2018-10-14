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
import { FloatingAction } from "react-native-floating-action";
const actions = [
  {
    text: "Add New Member",
    icon: require("../RES/addnewcontact.png"),
    name: "add new member",
    position: 2
  },
  {
    text: "Search",
    icon: require("../RES/search.png"),
    name: "search",
    position: 1
  }
];

class Contacts extends Component {
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
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.push("Profile", {
                        name: item.name,
                        image: item.image
                      })
                    }
                  >
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
                  </TouchableHighlight>
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
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
        />
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
  Contacts: {
    screen: Contacts
  }
});
