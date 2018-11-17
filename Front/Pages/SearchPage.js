import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
  TouchableHighlight,
  ScrollView,
  Image
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import { observer } from "mobx-react";
import searchPageStore from "../MobX/SearchPageStore";
import Axios from "axios";

let { width } = Dimensions.get("window");

const requester = Axios.create({
  baseURL: "https://localhost:3000/api/search"
});

@observer
class BasedOnID extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="username"
          style={styles.searchBox}
          placeholder="search for ID"
          onChangeText={text => {
            if (text.length < 3) {
              searchPageStore.searchIdList = [];
            } else {
              requester
                .get("/idsearch", {
                  params: {
                    searchFor: text
                  }
                })
                .then(response => {
                  if (response.status === 200)
                    searchPageStore.searchIdList = response.data.searchIdList;
                });
            }
          }}
        />
        <ScrollView style={{ width: "100%" }}>
          <FlatList
            style={styles.listStyle}
            data={searchPageStore.searchIdList}
            renderItem={({ item }) => {
              return (
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate("Profile", {
                      name: item.key,
                      image: item.image
                    })
                  }
                >
                  <View
                    style={{
                      flexDirection: "row",
                      margin: "1%"
                    }}
                  >
                    <Image source={item.image} style={styles.profileImage} />
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        marginLeft: "2%",
                        flex: 1
                      }}
                    >
                      <Text
                        style={{
                          fontSize: width / 22.5,
                          fontWeight: "bold"
                        }}
                      >
                        {item.key}
                      </Text>
                      <Text
                        style={{
                          fontSize: width / 25
                        }}
                      >
                        {`id: ${item.id}`}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

@observer
class BasedOnTags extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="username"
          style={styles.searchBox}
          placeholder="search for Tags"
          onChangeText={text => {
            if (text.length < 1) {
              searchPageStore.searchIdList = [];
            } else {
              requester
                .get("/tagsearch", {
                  params: {
                    searchFor: text
                  }
                })
                .then(response => {
                  if (response.status === 200)
                    searchPageStore.searchTagList = response.data.searchTagList;
                });
            }
          }}
        />
        <ScrollView style={{ width: "100%" }}>
          <FlatList
            style={styles.listStyle}
            data={searchPageStore.searchTagList}
            renderItem={({ item }) => {
              return (
                <View style={{}}>
                  <View style={{ flexDirection: "row", margin: width / 100 }}>
                    <TouchableHighlight
                      onPress={() =>
                        this.props.navigation.navigate("Profile", {
                          name: item.key,
                          image: item.image
                        })
                      }
                    >
                      <Image source={item.image} style={styles.profileImage} />
                    </TouchableHighlight>
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        marginLeft: "2%",
                        flex: 1
                      }}
                    >
                      <TouchableHighlight
                        onPress={() =>
                          this.props.navigation.navigate("Profile", {
                            name: item.key,
                            image: item.image
                          })
                        }
                      >
                        <Text
                          style={{
                            fontSize: width / 22.5,
                            fontWeight: "bold"
                          }}
                        >
                          {item.key}
                        </Text>
                      </TouchableHighlight>
                      <ScrollView horizontal={true}>
                        <Text
                          style={{
                            fontSize: width / 25
                          }}
                        >
                          {`Tags: ${item.getTags}`}
                        </Text>
                      </ScrollView>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

@observer
class BasedOnPhoneNumber extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <TextInput
          textContentType="telephoneNumber"
          style={styles.searchBox}
          placeholder="Search for Phone Number"
          onChangeText={text => {
            if (text.length < 7) {
              searchPageStore.searchPhoneList = [];
            } else {
              requester
                .get("/phonesearch", {
                  params: {
                    searchFor: text
                  }
                })
                .then(response => {
                  if (response.status === 200)
                    searchPageStore.searchPhoneList =
                      response.data.searchPhoneList;
                });
            }
          }}
        />
        <ScrollView style={{ width: "100%" }}>
          <FlatList
            style={styles.listStyle}
            data={searchPageStore.searchPhoneList}
            renderItem={({ item }) => {
              return (
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate("Profile", {
                      name: item.key,
                      image: item.image
                    })
                  }
                >
                  <View
                    style={{
                      flexDirection: "row",
                      margin: "1%"
                    }}
                  >
                    <Image source={item.image} style={styles.profileImage} />
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        marginLeft: "2%",
                        flex: 1
                      }}
                    >
                      <Text
                        style={{
                          fontSize: width / 22.5,
                          fontWeight: "bold"
                        }}
                      >
                        {item.key}
                      </Text>
                      <Text
                        style={{
                          fontSize: width / 25
                        }}
                      >
                        {`phone: ${item.phone}`}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  searchBox: {
    width: "90%",
    borderBottomWidth: width / 360,
    borderRadius: 5,
    padding: "2%"
  },
  profileImage: {
    width: width / 8,
    height: width / 8,
    resizeMode: "contain",
    margin: "1%"
  },
  listStyle: {
    width: "85%",
    marginBottom: "3%",
    marginLeft: "7.5%"
  }
});

export default createMaterialTopTabNavigator({
  ID: BasedOnID,
  Number: BasedOnPhoneNumber,
  Tags: BasedOnTags
});
