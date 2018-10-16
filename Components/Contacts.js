import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
  SectionList,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { FloatingAction } from "react-native-floating-action";
const actions = [
  {
    text: "Add New Member",
    icon: require("../RES/addnewcontact.png"),
    color: "black",
    name: "addNewContact",
    position: 2
  },
  {
    text: "Search",
    color: "black",
    icon: require("../RES/search.png"),
    name: "search",
    position: 1
  }
];

class Contacts extends Component {
  static navigationOptions = { header: null };
  state = {
    modal1Visible: false,
    modal2Visible: false
  };

  setModal1Invisible() {
    this.setState({ modal1Visible: false });
  }
  setModal2Invisible() {
    this.setState({ modal2Visible: false });
  }
  setModal2Visible() {
    this.setState({ modal2Visible: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modal1Visible}
          onRequestClose={() => {
            this.setModal1Invisible();
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.5)"
            }}
          >
            {this.props.children}
            <View
              style={{
                borderWidth: 1.5,
                padding: 5,
                backgroundColor: "white",
                width: "85%"
              }}
            >
              <Text
                style={{ marginBottom: "5%", fontWeight: "bold", fontSize: 20 }}
              >
                Add New Contact
              </Text>
              <Text>Please Enter The Number of your new contact: </Text>
              <TextInput
                placeholder="Number"
                textContentType="telephoneNumber"
                style={{
                  marginTop: 5,
                  padding: 0,
                  borderBottomWidth: 0.5,
                  width: "70%"
                }}
              />
              <View
                style={{
                  marginTop: "10%",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-end"
                }}
              >
                <TouchableHighlight
                  onPress={() => {
                    this.setModal1Invisible();
                    this.setModal2Visible();
                  }}
                  style={{
                    borderWidth: 0.5,
                    padding: 3,
                    margin: 2,
                    marginBottom: 10
                  }}
                >
                  <Text>Search For This Contact</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    borderWidth: 0.5,
                    padding: 3,
                    margin: 2,
                    marginBottom: 10
                  }}
                  onPress={() => this.setModal1Invisible()}
                >
                  <Text>Cancle</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modal2Visible}
          onRequestClose={() => {
            this.setModal2Invisible();
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.5)"
            }}
          >
            {this.props.children}
            <View
              style={{
                borderWidth: 1.5,
                padding: 5,
                backgroundColor: "white",
                width: "85%"
              }}
            >
              <Text
                style={{ marginBottom: "5%", fontWeight: "bold", fontSize: 20 }}
              >
                Contact Found!
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../RES/sampleprofileimage.jpg")} />
                <TextInput
                  textContentType="name"
                  style={{ borderBottomWidth: 0.5, padding: 1, marginLeft: 10 }}
                  textContentType="name"
                  placeholder="name from server"
                />
              </View>
              <View
                style={{
                  marginTop: "10%",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-end"
                }}
              >
                <TouchableHighlight
                  onPress={() => {
                    this.setModal2Invisible();
                  }}
                  style={{
                    borderWidth: 0.5,
                    padding: 3,
                    margin: 2,
                    marginBottom: 10
                  }}
                >
                  <Text>Add</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    borderWidth: 0.5,
                    padding: 3,
                    margin: 2,
                    marginBottom: 10
                  }}
                  onPress={() => this.setModal2Invisible()}
                >
                  <Text>Cancle</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
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
            <View>
              <TextInput placeholder="Search..." />
            </View>
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
          color="black"
          onPressItem={name => {
            if (name === "search") this.props.navigation.navigate("SearchPage");
            else if (name === "addNewContact")
              this.setState({ modal1Visible: true });
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
