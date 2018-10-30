import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  Modal,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";
import checkCodeStore from "../MobX/CheckCodeStore";
import { observer } from "mobx-react";
import CheckBox from "react-native-check-box";
import Wallpaper from "../Components/Wallpaper";

const { width } = Dimensions.get("window");

@observer
class CheckCode extends Component {
  static navigationOptions = {
    header: null
  };

  setModalResendInvisible() {
    checkCodeStore.isModalResend = false;
  }

  setModalAgreeInvisible() {
    checkCodeStore.isModalAgree = false;
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
              visible={checkCodeStore.isModalResend}
              onRequestClose={() => {
                this.setModalResendInvisible();
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
                        this.setModalResendInvisible();
                      }}
                      style={styles.modalTouchable}
                    >
                      <Text style={styles.modalButton}>NO</Text>
                    </TouchableHighlight>
                    <View style={{ width: "10%" }} />
                    <TouchableHighlight
                      onPress={() => {
                        this.setModalResendInvisible();
                      }}
                      style={styles.modalTouchable}
                    >
                      <Text style={styles.modalButton}>YES</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="fade"
              transparent={true}
              visible={checkCodeStore.isModalAgree}
              onRequestClose={() => {
                this.setModalAgreeInvisible();
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
                  <Text style={styles.modalHeader}>User Agreement</Text>
                  <Text style={styles.modalBody}>
                    Please confirm the user agreement with checking the box next
                    to it.
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
                        this.setModalAgreeInvisible();
                      }}
                      style={styles.modalTouchable}
                    >
                      <Text style={styles.modalButton}>OK</Text>
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
              <TouchableHighlight
                onPress={() => (checkCodeStore.isModalResend = true)}
                style={styles.button}
              >
                <Text style={{ fontWeight: "bold" }}>Resend Code</Text>
              </TouchableHighlight>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "5%"
              }}
            >
              <Text>I accept the user agreement!</Text>
              <CheckBox
                onClick={() =>
                  (checkCodeStore.isCheckedAgree = !checkCodeStore.isCheckedAgree)
                }
                isChecked={checkCodeStore.isCheckedAgree}
              />
            </View>
            <TouchableHighlight
              onPress={() => {
                if (checkCodeStore.isCheckedAgree)
                  this.props.navigation.navigate("PayPage");
                else {
                  checkCodeStore.isModalAgree = true;
                }
              }}
              style={styles.button}
            >
              <Text style={{ fontWeight: "bold" }}>Let's Start</Text>
            </TouchableHighlight>
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
    fontSize: width / 14.4,
    textAlign: "center",
    marginTop: "33%",
    marginBottom: "25%"
  },
  instructions: {
    marginBottom: "1.3%"
  },
  phoneText: {
    textAlign: "center",
    borderBottomWidth: width / 180,
    padding: "1%",
    marginBottom: "3%",
    borderRadius: 5
  },
  modalHeader: {
    marginTop: "3%",
    color: "white",
    marginBottom: "5%",
    fontWeight: "bold",
    fontSize: width / 18
  },
  modalBody: {
    color: "white",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "2%",
    textAlign: "center"
  },
  modalTouchable: {
    borderWidth: width / 720,
    borderColor: "white",
    borderRadius: 5,
    padding: width / 120,
    marginBottom: "7%"
  },
  modalView: {
    borderWidth: width / 240,
    alignItems: "center",
    width: "85%"
  },
  modalButton: {
    color: "white",
    fontWeight: "bold",
    paddingRight: "5%",
    paddingLeft: "5%"
  },
  button: {
    borderWidth: width / 180,
    borderRadius: 5,
    padding: "1%",
    paddingRight: "6%",
    paddingLeft: "6%"
  }
});

export default createStackNavigator({
  CheckCode: {
    screen: CheckCode
  }
});
