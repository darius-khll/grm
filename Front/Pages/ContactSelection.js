import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableHighlight
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import Wallpaper from "../Components/Wallpaper";
import contactSelectionStore from "../MobX/ContactSelectionStore";
import { observer } from "mobx-react";
import Axios from "axios";
let { width } = Dimensions.get("window");

const requester = Axios.create({
  baseURL: "http://localhost:3000/api/getcontacts"
});

@observer
class ContactSelection extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Choose a Contact",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  componentWillMount() {
    requester.get("/").then(response => {
      if (response.status === 200) {
        contactSelectionStore.data = response.data.data;
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Wallpaper source={require("../RES/background.jpg")} />
          <FlatList
            style={{ width: "90%" }}
            data={contactSelectionStore.data}
            renderItem
            renderItem={({ item }) => {
              return (
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate("ChatPage", {
                      name: item.name,
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
                        justifyContent: "space-around",
                        marginLeft: "2%",
                        flex: 1
                      }}
                    >
                      <Text
                        style={{ fontSize: width / 22.5, fontWeight: "bold" }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: width / 5.5,
    height: width / 5.5,
    backgroundColor: "#fff",
    borderRadius: 100,
    margin: "1%"
  }
});

export default createStackNavigator({
  ContactSelection: {
    screen: ContactSelection
  }
});
