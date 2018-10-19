import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Modal,
  TouchableHighlight,
  Button
} from "react-native";
import { createStackNavigator } from "react-navigation";

class CheckCode extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    code: "",
    isModalVisible: false
  };

  setModalInvisible() {
    this.setState({ isModalVisible: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container1}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.isModalVisible}
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
                <View
                  style={{
                    borderWidth: 1.5,
                    padding: 5,
                    backgroundColor: "white",
                    width: "85%"
                  }}
                >
                  <Text
                    style={{
                      marginBottom: "5%",
                      fontWeight: "bold",
                      fontSize: 20
                    }}
                  >
                    Resend?
                  </Text>
                  <Text>
                    Resend Code to {this.props.navigation.getParam("code", "")}{" "}
                    {this.props.navigation.getParam("number", "")}?
                  </Text>
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
                        this.setModalInvisible();
                      }}
                      style={{
                        borderWidth: 0.5,
                        padding: 3,
                        margin: 2,
                        marginBottom: 10
                      }}
                    >
                      <Text>Cancle</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => {
                        this.setModalInvisible();
                      }}
                      style={{
                        borderWidth: 0.5,
                        padding: 3,
                        margin: 2,
                        marginBottom: 10
                      }}
                    >
                      <Text>OK</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Text style={styles.welcome}>
              Please Enter The Code We Have Sent You
            </Text>
            <TextInput
              onChangeText={code => this.setState({ code })}
              placeholder="Enter Code Here"
              style={styles.phoneText}
            />
            <View style={{ marginBottom: 40 }}>
              <Button
                title="Resend Code"
                color="#9B59B6"
                onPress={() => this.setState({ isModalVisible: true })}
                style={styles.resendButton}
              />
            </View>
            <Button
              title="Get Started!"
              color="#9B59B6"
              onPress={() => this.props.navigation.navigate("MainPage")}
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
    alignItems: "center",
    backgroundColor: "#e2deef"
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2deef",
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
  }
});

export default createStackNavigator({
  CheckCode: {
    screen: CheckCode
  }
});
