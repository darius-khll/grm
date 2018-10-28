import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal,
  Dimensions,
  Animated,
  SectionList,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { FloatingAction } from "react-native-floating-action";
import Wallpaper from "../Components/Wallpaper";
import contactsStore from "../MobX/ContactsStore";
import toggler from "../APIs/toggler";
import SideBar from "../Components/SideBar";
import { observer } from "mobx-react";

const actions = [
  {
    text: "Add New Friend",
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
let { width } = Dimensions.get("window");

@observer
class Contacts extends Component {
  static navigationOptions = { header: null };

  state = {
    animation: new Animated.Value(width / 8),
    animation2: new Animated.Value((7 * width) / 8),
    imageStyle: {
      width: (0.85 * width) / 8,
      height: (0.85 * width) / 8,
      resizeMode: "contain",
      margin: 2
    }
  };
  navigationToMyProfile() {
    this.props.navigation.navigate("MyProfile");
  }
  navigationToMainPage() {
    this.props.navigation.navigate("MainPage");
  }
  navigationToShop() {
    this.props.navigation.navigate("Shop");
  }
  navigationToContacts() {
    this.props.navigation.navigate("Contacts");
  }
  navigationToSetting() {
    this.props.navigation.navigate("Setting");
  }
  navigationToAbout() {
    this.props.navigation.navigate("About");
  }

  toggle() {
    let initialValue = contactsStore.expanded ? width : width / 8,
      finalValue = contactsStore.expanded ? width / 8 : width;

    let initialValue2 = contactsStore.expanded ? 0 : (7 * width) / 8,
      finalValue2 = contactsStore.expanded ? (7 * width) / 8 : 0;

    contactsStore.expanded = !contactsStore.expanded;
    this.state.animation.setValue(initialValue);
    this.state.animation2.setValue(initialValue2);

    let animate = Animated.parallel([
      Animated.spring(this.state.animation, {
        toValue: finalValue,
        speed: 2
      }),

      Animated.timing(this.state.animation2, {
        toValue: finalValue2,
        duration: 600
      })
    ]);
    if (contactsStore.expanded) {
      this.setState({
        imageStyle: {
          width: 0,
          height: 0
        }
      });
    } else {
      this.setState({
        imageStyle: {
          width: (0.85 * width) / 8,
          height: (0.85 * width) / 8,
          resizeMode: "contain",
          margin: 2
        }
      });
    }
    toggler(contactsStore);
    animate.start();
  }

  setModal1Invisible() {
    contactsStore.modal1Visible = false;
  }
  setModal2Invisible() {
    contactsStore.modal2Visible = false;
  }
  setModal2Visible() {
    contactsStore.modal2Visible = true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={contactsStore.modal1Visible}
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
          visible={contactsStore.modal2Visible}
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
                <Image
                  style={styles.profileImage}
                  source={require("../RES/sampleprofileimage.jpg")}
                />
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
          <SideBar
            width={this.state.animation}
            toggle={this.toggle.bind(this)}
            imageStyle={this.state.imageStyle}
            textStyle={styles.textStyle}
            store={contactsStore}
            navigationToMyProfile={this.navigationToMyProfile.bind(this)}
            navigationToMainPage={this.navigationToMainPage.bind(this)}
            navigationToContacts={this.navigationToContacts.bind(this)}
            navigationToShop={this.navigationToShop.bind(this)}
            navigationToSetting={this.navigationToSetting.bind(this)}
            navigationToAbout={this.navigationToAbout.bind(this)}
          />
          <Animated.View
            style={{ width: this.state.animation2, alignItems: "center" }}
          >
            <Wallpaper source={require("../RES/background.jpg")} />
            <TextInput placeholder="Search..." />
            <SectionList
              style={{ width: "100%" }}
              sections={contactsStore.sections.slice()}
              renderItem={({ item }) => {
                return (
                  <View style={{ alignItems: "center" }}>
                    <TouchableHighlight
                      style={{ width: "90%" }}
                      onPress={() =>
                        this.props.navigation.navigate("Profile", {
                          name: item.name,
                          image: item.image
                        })
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",

                          alignItems: "center"
                        }}
                      >
                        <Image
                          source={item.image}
                          style={styles.profileImage}
                        />
                        <Text style={{ margin: 5 }}>{item.name}</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                );
              }}
              renderSectionHeader={({ section: { title, data } }) => {
                if (data.length)
                  return (
                    <View
                      style={{
                        borderTopWidth: 2,
                        width: "92%",
                        marginLeft: "4%",
                        alignItems: "center",
                        borderBottomWidth: 2
                      }}
                    >
                      <Text style={{ marginLeft: 5 }}>{title}</Text>
                    </View>
                  );
              }}
              keyExtractor={(item, index) => index}
            />
          </Animated.View>
        </View>
        <FloatingAction
          visible={!contactsStore.expanded}
          actions={actions}
          color="black"
          onPressItem={name => {
            if (name === "search") this.props.navigation.navigate("SearchPage");
            else if (name === "addNewContact")
              contactsStore.modal1Visible = true;
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
    alignItems: "center"
  },
  profileImage: {
    margin: "1%",
    width: 65,
    height: 65,
    resizeMode: "contain",
    margin: 2
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "3%"
  }
});

export default createStackNavigator({
  Contacts: {
    screen: Contacts
  }
});
