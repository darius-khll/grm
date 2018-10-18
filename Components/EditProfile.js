import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  Picker,
  Image,
  TextInput
} from "react-native";
import { createStackNavigator } from "react-navigation";
import RadioGroup from "react-native-radio-buttons-group";
import DateTimePicker from "react-native-modal-datetime-picker";
import CheckBox from "react-native-check-box";

class EditProfile extends Component {
  static navigationOptions = { header: null };
  state = {
    data: [
      {
        label: "Man",
        size: 15
      },
      {
        label: "Woman",
        size: 15
      },
      {
        label: "Other",
        size: 15
      }
    ],
    isDateTimePickerVisible: false,
    date: new Date(),
    isCheckedEmail: false,
    isCheckedPhone: false
  };
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    this.setState({ date });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 7, width: "90%", borderBottomWidth: 0.5 }}>
          Profile Picture
        </Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Button title="Change Profile Picture" />
          <Image
            style={styles.profileImage}
            source={require("../RES/myprofile.jpg")}
          />
        </View>
        <Text style={{ marginTop: 7, width: "90%", borderBottomWidth: 0.5 }}>
          General Information
        </Text>
        <View
          style={{
            marginTop: 2,
            flexDirection: "column",
            width: "90%"
          }}
        >
          <TextInput style={{ padding: 3 }} placeholder="name" />
          <TextInput style={{ padding: 3 }} placeholder="ID" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text>I am a: </Text>
            <RadioGroup
              flexDirection="row"
              radioButtons={this.state.data}
              onPress={data => this.setState({ data })}
            />
          </View>
          <View
            style={{
              marginTio: 3,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text>Birth Date:</Text>
            <Text>{this.state.date.toDateString()}</Text>
            <Button title="pick a date" onPress={this._showDateTimePicker} />
          </View>
        </View>
        <Text style={{ marginTop: 7, width: "90%", borderBottomWidth: 0.5 }}>
          Location Information
        </Text>
        <View
          style={{
            marginTop: 2,
            flexDirection: "column",
            width: "90%"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{}}>Country:</Text>
            <Picker style={{ width: "40%" }}>
              <Picker.Item label="Iran" />
              <Picker.Item label="USA" />
              <Picker.Item label="Germany" />
            </Picker>
          </View>
          <TextInput style={{ padding: 3 }} placeholder="City" />
        </View>
        <Text style={{ marginTop: 7, width: "90%", borderBottomWidth: 0.5 }}>
          Contact Information
        </Text>
        <View
          style={{
            marginTop: 2,
            flexDirection: "column",
            width: "90%"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <TextInput style={{ padding: 3 }} placeholder="Email" />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Show</Text>
              <CheckBox
                onClick={() => {
                  this.setState({
                    isCheckedEmail: !this.state.isCheckedEmail
                  });
                }}
                isChecked={this.state.isCheckedEmail}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <TextInput style={{ padding: 3 }} placeholder="Phone Number" />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Show</Text>
              <CheckBox
                onClick={() => {
                  this.setState({
                    isCheckedPhone: !this.state.isCheckedPhone
                  });
                }}
                isChecked={this.state.isCheckedPhone}
              />
            </View>
          </View>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e2deef"
  },
  profileImage: {
    marginLeft: "9%",
    width: 75,
    height: 75,
    resizeMode: "contain",
    margin: 2
  }
});

export default createStackNavigator({
  EditProfile: {
    screen: EditProfile
  }
});
