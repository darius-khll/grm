import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Modal,
  Alert,
  TouchableHighlight,
  Button
} from "react-native";
import { createStackNavigator } from "react-navigation";
import checkCodeStore from "../MobX/CheckCodeStore";
import { observer } from "mobx-react";
import CheckBox from "react-native-check-box";
import Wallpaper from "../Components/Wallpaper";

@observer
class CheckCode extends Component {
  static navigationOptions = {
    header: null
  };

  setModalInvisible() {
    checkCodeStore.isModalVisible = false;
  }

  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/firstbackground.jpg")} />
        <ScrollView>
          <View style={styles.container1}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={checkCodeStore.isModalVisible}
              onRequestClose={() => {
                this.setModalInvisible();
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
                <View style={styles.modalView}>
                  <Wallpaper source={require("../RES/modalbackground.jpg")} />
                  <Text style={styles.modalHeader}>Resend?</Text>
                  <Text style={styles.modalBody}>
                    Resend Code to {this.props.navigation.getParam("code", "")}{" "}
                    {this.props.navigation.getParam("number", "")}?
                  </Text>
                  <View
                    style={{
                      marginTop: "10%",
                      alignItems: "center",
                      flexDirection: "row"
                    }}
                  >
                    <TouchableHighlight
                      onPress={() => {
                        this.setModalInvisible();
                      }}
                      style={styles.modalTouchable}
                    >
                      <Text style={styles.modalButton}>NO</Text>
                    </TouchableHighlight>
                    <View style={{ width: "10%" }} />
                    <TouchableHighlight
                      onPress={() => {
                        this.setModalInvisible();
                      }}
                      style={styles.modalTouchable}
                    >
                      <Text style={styles.modalButton}>YES</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Text style={styles.welcome}>
              Please Enter The Code We Have Sent You
            </Text>
            <TextInput
              onChangeText={code => (checkCodeStore.code = code)}
              placeholder="Enter Code Here"
              style={styles.phoneText}
            />
            <Text style={{ marginBottom: "5%", textAlign: "center" }}>
              Please wait for at least a minute, before clicking on resend code
              Button
            </Text>
            <View style={{ marginBottom: "10%" }}>
              <Button
                title="Resend Code"
                color="#9B59B6"
                onPress={() => (checkCodeStore.isModalVisible = true)}
                style={styles.resendButton}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>I accept the user agreement!</Text>
              <CheckBox
                onClick={() =>
                  (checkCodeStore.isCheckedAgree = !checkCodeStore.isCheckedAgree)
                }
                isChecked={checkCodeStore.isCheckedAgree}
              />
            </View>
            <Button
              title="Get Started!"
              color="#9B59B6"
              onPress={() => {
                if (checkCodeStore.isCheckedAgree)
                  this.props.navigation.navigate("MainPage");
                else {
                  Alert.alert(
                    "User Agreement",
                    "Please agree to the user agreements"
                  );
                }
              }}
              style={styles.loginButton}
            />
          </View>
        </ScrollView>
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
  container1: {
    justifyContent: "center",
    alignItems: "center",
    padding: "5%"
  },
  welcome: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 100,
    marginBottom: 100
  },
  phoneText: {
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#9B59B6",
    marginBottom: 20,
    padding: 2
  },
  loginButton: {
    textAlign: "center",
    fontSize: 12
  },
  resendButton: {
    textAlign: "center",
    fontSize: 9
  },
  modalHeader: {
    marginTop: "3%",
    color: "white",
    marginBottom: "5%",
    fontWeight: "bold",
    fontSize: 20
  },
  modalBody: {
    color: "white",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "2%"
  },
  modalTouchable: {
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 5,
    padding: 3,
    marginBottom: "7%"
  },
  modalView: {
    borderWidth: 1.5,
    alignItems: "center",
    width: "85%"
  },
  modalButton: {
    color: "white",
    fontWeight: "bold",
    paddingRight: "5%",
    paddingLeft: "5%"
  }
});

export default createStackNavigator({
  CheckCode: {
    screen: CheckCode
  }
});
