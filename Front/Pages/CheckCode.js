import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Dimensions,
  ScrollView,
  ToastAndroid,
  Linking,
  TextInput,
  TouchableHighlight
} from "react-native";
import { createStackNavigator } from "react-navigation";
import checkCodeStore from "../MobX/CheckCodeStore";
import { observer } from "mobx-react";
import CheckBox from "react-native-check-box";
import Wallpaper from "../Components/Wallpaper";
import ModalTwoButtons from "../Components/ModalTwoButtons";
import ModalOneButton from "../Components/ModalOneButton";

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
            <ModalTwoButtons
              visibility={checkCodeStore.isModalResend}
              invisibleFunction={this.setModalResendInvisible}
              yesFunction={this.setModalResendInvisible}
              noFunction={this.setModalResendInvisible}
              headerTitle="Resend?"
              body={`Resend code to ${this.props.navigation.getParam(
                "code",
                ""
              )} ${this.props.navigation.getParam("number", "")} ?`}
              buttonNoText="NO"
              buttonYesText="YES"
            />
            <ModalOneButton
              visibility={checkCodeStore.isModalAgree}
              invisibleFunction={this.setModalAgreeInvisible}
              buttonFunction={this.setModalAgreeInvisible}
              body="Please confirm the user agreement with checking the box next to it."
              headerTitle="User Agreement!"
              buttonText="OK"
            />
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
              <Text>I accept </Text>
              <TouchableHighlight
                style={{
                  borderBottomWidth: width / 720,
                  borderBottomColor: "blue"
                }}
                onPress={() => {
                  Linking.openURL("http://www.google.com");
                }}
              >
                <Text style={{ color: "blue" }}>User Agreement!</Text>
              </TouchableHighlight>
              <View style={{ width: width / 36 }} />
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
