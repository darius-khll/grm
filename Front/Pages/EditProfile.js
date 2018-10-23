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
    isCheckedPhone: false,
    country: ""
  };
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    this.setState({ date });
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ width: "100%" }}>
          <View style={{ padding: "5%", paddingTop: "3%" }}>
            <Text style={{ width: "100%", borderBottomWidth: 0.5 }}>
              Profile Picture
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <Button title="Change Profile Picture" />
              <Image
                style={styles.profileImage}
                source={this.props.navigation.getParam(
                  "image",
                  require("../RES/anonymous.png")
                )}
              />
            </View>
            <Text
              style={{ marginTop: 7, width: "100%", borderBottomWidth: 0.5 }}
            >
              Bio
            </Text>
            <View
              style={{
                marginTop: 2,
                flexDirection: "column",
                width: "100%"
              }}
            >
              <TextInput style={{ padding: 3 }} placeholder="Edit Your Bio" />
            </View>
            <Text
              style={{ marginTop: 7, width: "100%", borderBottomWidth: 0.5 }}
            >
              General Information
            </Text>
            <View
              style={{
                marginTop: 2,
                flexDirection: "column",
                width: "100%"
              }}
            >
              <TextInput style={{ padding: 3 }} placeholder="Name (Required)" />
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
                <Button
                  title="pick a date"
                  onPress={this._showDateTimePicker}
                />
              </View>
            </View>
            <Text
              style={{ marginTop: 7, width: "100%", borderBottomWidth: 0.5 }}
            >
              Location Information
            </Text>
            <View
              style={{
                marginTop: 2,
                flexDirection: "column",
                width: "100%"
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
                <Picker
                  style={{
                    width: "68%"
                  }}
                  onValueChange={country => this.setState({ country })}
                  selectedValue={this.state.country}
                >
                  <Picker.Item label="Afghanistan" value="Afghanistan" />
                  <Picker.Item label="Albania" value="Albania" />
                  <Picker.Item label="Algeria" value="Algeria" />
                  <Picker.Item label="Andorra" value="Andorra" />
                  <Picker.Item label="Angola" value="Angola" />
                  <Picker.Item
                    label="Antigua and Barbuda"
                    value="Antigua and Barbuda"
                  />
                  <Picker.Item label="Argentina" value="Argentina" />
                  <Picker.Item label="Armenia" value="Armenia" />
                  <Picker.Item label="Australia" value="Australia" />
                  <Picker.Item label="Austria" value="Austria" />
                  <Picker.Item label="Azerbaijan" value="Azerbaijan" />
                  <Picker.Item label="Bahamas" value="Bahamas" />
                  <Picker.Item label="Bahrain" value="Bahrain" />
                  <Picker.Item label="Bangladesh" value="Bangladesh" />
                  <Picker.Item label="Barbados" value="Barbados" />
                  <Picker.Item label="Belarus" value="Belarus" />
                  <Picker.Item label="Belgium" value="Belgium" />
                  <Picker.Item label="Belize" value="Belize" />
                  <Picker.Item label="Benin" value="Benin" />
                  <Picker.Item label="Bhutan" value="Bhutan" />
                  <Picker.Item label="Bolivia" value="Bolivia" />
                  <Picker.Item
                    label="Bosnia and Herzegovina"
                    value="Bosnia and Herzegovina"
                  />
                  <Picker.Item label="Botswana" value="Botswana" />
                  <Picker.Item label="Brazil" value="Brazil" />
                  <Picker.Item
                    label="Brunei Darussalam"
                    value="Brunei Darussalam"
                  />
                  <Picker.Item label="Bulgaria" value="Bulgaria" />
                  <Picker.Item label="Burkina Faso" value="Burkina Faso" />
                  <Picker.Item label="Burundi" value="Burundi" />
                  <Picker.Item label="Cape Verde" value="Cape Verde" />
                  <Picker.Item label="Cambodia" value="Cambodia" />
                  <Picker.Item label="Cameroon" value="Cameroon" />
                  <Picker.Item label="Canada" value="Canada" />
                  <Picker.Item
                    label="Central African Republic"
                    value="Central African Republic"
                  />
                  <Picker.Item label="Chad" value="Chad" />
                  <Picker.Item label="Chile" value="Chile" />
                  <Picker.Item label="China" value="China" />
                  <Picker.Item label="Colombia" value="Colombia" />
                  <Picker.Item label="Comoros" value="Comoros" />
                  <Picker.Item label="Congo" value="Congo" />
                  <Picker.Item label="Cook Island" value="Cook Island" />
                  <Picker.Item label="Costa Rica" value="Costa Rica" />
                  <Picker.Item label="Croatia" value="Croatia" />
                  <Picker.Item label="Cuba" value="Cuba" />
                  <Picker.Item label="Cyprus" value="Cyprus" />
                  <Picker.Item label="Czchia" value="Czchia" />
                  <Picker.Item label="Côte d'Ivoire" value="Côte d'Ivoire" />
                  <Picker.Item
                    label="Democratic People's Republic of Korea"
                    value="Democratic People's Republic of Korea"
                  />
                  <Picker.Item
                    label="Democratic Republic of the Congo"
                    value="Democratic Republic of the Congo"
                  />
                  <Picker.Item label="Denmark" value="Denmark" />
                  <Picker.Item label="Djibouti" value="Djibouti" />
                  <Picker.Item label="Dominica" value="Dominica" />
                  <Picker.Item
                    label="Dominican Republic"
                    value="Dominican Republic"
                  />
                  <Picker.Item label="Ecuador" value="Ecuador" />
                  <Picker.Item label="Egypt" value="Egypt" />
                  <Picker.Item label="El Salvador" value="El Salvador" />
                  <Picker.Item
                    label="Equatorial Guinea"
                    value="Equatorial Guinea"
                  />
                  <Picker.Item label="Eritrea" value="Eritrea" />
                  <Picker.Item label="Estonia" value="Estonia" />
                  <Picker.Item label="Eswatini" value="Eswatini" />
                  <Picker.Item label="Ethiopia" value="Ethiopia" />
                  <Picker.Item label="Faroe Islands" value="Faroe Islands" />
                  <Picker.Item label="Fiji" value="Fiji" />
                  <Picker.Item label="Finland" value="Finland" />
                  <Picker.Item label="France" value="France" />
                  <Picker.Item label="Gabon" value="Gabon" />
                  <Picker.Item label="Gambia" value="Gambia" />
                  <Picker.Item label="Georgia" value="Georgia" />
                  <Picker.Item label="Germany" value="Germany" />
                  <Picker.Item label="Ghana" value="Ghana" />
                  <Picker.Item label="Greece" value="Greece" />
                  <Picker.Item label="Grenada" value="Grenada" />
                  <Picker.Item label="Guatemala" value="Guatemala" />
                  <Picker.Item label="Guinea" value="Guinea" />
                  <Picker.Item label="Guinea-Bissau" value="Guinea-Bissau" />
                  <Picker.Item label="Guyana" value="Guyana" />
                  <Picker.Item label="Haiti" value="Haiti" />
                  <Picker.Item label="Honduras" value="Honduras" />
                  <Picker.Item label="Hong Kong" value="Hong Kong" />
                  <Picker.Item label="Hungary" value="Hungary" />
                  <Picker.Item label="Iceland" value="Iceland" />
                  <Picker.Item label="India" value="India" />
                  <Picker.Item label="Indonesia" value="Indonesia" />
                  <Picker.Item label="Iran" value="Iran" />
                  <Picker.Item label="Iraq" value="Iraq" />
                  <Picker.Item label="Ireland" value="Ireland" />
                  <Picker.Item label="Israel" value="Israel" />
                  <Picker.Item label="Italy" value="Italy" />
                  <Picker.Item label="Jamaica" value="Jamaica" />
                  <Picker.Item label="Japan" value="Japan" />
                  <Picker.Item label="Jordan" value="Jordan" />
                  <Picker.Item label="Kazakhstan" value="Kazakhstan" />
                  <Picker.Item label="Kenya" value="Kenya" />
                  <Picker.Item label="Kiribati" value="Kiribati" />
                  <Picker.Item label="Kuwait" value="Kuwait" />
                  <Picker.Item label="Kyrgyzstan" value="Kyrgyzstan" />
                  <Picker.Item
                    label="Lao People's Democratic Republic"
                    value="Lao People's Democratic Republic"
                  />
                  <Picker.Item label="Latvia" value="Latvia" />
                  <Picker.Item label="Lebanon" value="Lebanon" />
                  <Picker.Item label="Lesotho" value="Lesotho" />
                  <Picker.Item label="Liberia" value="Liberia" />
                  <Picker.Item label="Libya" value="Libya" />
                  <Picker.Item label="Lithuania" value="Lithuania" />
                  <Picker.Item label="Luxembourg" value="Luxembourg" />
                  <Picker.Item label="Macedonia" value="Macedonia" />
                  <Picker.Item label="Madagascar" value="Madagascar" />
                  <Picker.Item label="Malawi" value="Malawi" />
                  <Picker.Item label="Malaysia" value="Malaysia" />
                  <Picker.Item label="Maldives" value="Maldives" />
                  <Picker.Item label="Mali" value="Mali" />
                  <Picker.Item label="Malta" value="Malta" />
                  <Picker.Item
                    label="Marshall Islands"
                    value="Marshall Islands"
                  />
                  <Picker.Item label="Mauritius" value="Mauritius" />
                  <Picker.Item label="Mexico" value="Mexico" />
                  <Picker.Item label="Micronesia" value="Micronesia" />
                  <Picker.Item label="Monaco" value="Monaco" />
                  <Picker.Item label="Mongolla" value="Mongolla" />
                  <Picker.Item label="Montenegro" value="Montenegro" />
                  <Picker.Item label="Morocco" value="Morocco" />
                  <Picker.Item label="Mozambique" value="Mozambique" />
                  <Picker.Item label="Myanmar" value="Myanmar" />
                  <Picker.Item label="Namibia" value="Namibia" />
                  <Picker.Item label="Nauru" value="Nauru" />
                  <Picker.Item label="Nepal" value="Nepal" />
                  <Picker.Item label="Netherlands" value="Netherlands" />
                  <Picker.Item label="New Zealand" value="New Zealand" />
                  <Picker.Item label="Nicaragua" value="Nicaragua" />
                  <Picker.Item label="Niger" value="Niger" />
                  <Picker.Item label="Nigeria" value="Nigeria" />
                  <Picker.Item label="Niue" value="Niue" />
                  <Picker.Item label="Norway" value="Norway" />
                  <Picker.Item label="Oman" value="Oman" />
                  <Picker.Item label="Pakistan" value="Pakistan" />
                  <Picker.Item label="Palau" value="Palau" />
                  <Picker.Item label="Panama" value="Panama" />
                  <Picker.Item
                    label="Papua New Guinea"
                    value="Papua New Guinea"
                  />
                  <Picker.Item label="Paraguay" value="Paraguay" />
                  <Picker.Item label="Peru" value="Peru" />
                  <Picker.Item label="Philippines" value="Philippines" />
                  <Picker.Item label="Poland" value="Poland" />
                  <Picker.Item label="Portugal" value="Portugal" />
                  <Picker.Item label="Qatar" value="Qatar" />
                  <Picker.Item
                    label="Republic of Korea"
                    value="Republic of Korea"
                  />
                  <Picker.Item
                    label="Republic of Moldova"
                    value="Republic of Moldova"
                  />
                  <Picker.Item label="Romania" value="Romania" />
                  <Picker.Item label="Russia" value="Russia" />
                  <Picker.Item label="Rwanda" value="Rwanda" />
                  <Picker.Item
                    label="Saint Kitts and Nevis"
                    value="Saint Kitts and Nevis"
                  />
                  <Picker.Item label="Saint Lucia" value="Saint Lucia" />
                  <Picker.Item
                    label="Saint Vincent and the Grenadines"
                    value="Saint Vincent and the Grenadines"
                  />
                  <Picker.Item label="Samoa" value="Samoa" />
                  <Picker.Item label="San Marino" value="San Marino" />
                  <Picker.Item
                    label="Sao Tome and Principe"
                    value="Sao Tome and Principe"
                  />
                  <Picker.Item label="Saudi Arabia" value="Saudi Arabia" />
                  <Picker.Item label="Senegal" value="Senegal" />
                  <Picker.Item label="Serbia" value="Serbia" />
                  <Picker.Item label="Seychelles" value="Seychelles" />
                  <Picker.Item label="Sierra Leone" value="Sierra Leone" />
                  <Picker.Item label="Singapore" value="Singapore" />
                  <Picker.Item label="Slovakia" value="Slovakia" />
                  <Picker.Item label="Slovenia" value="Slovenia" />
                  <Picker.Item
                    label="Solomon Islands"
                    value="Solomon Islands"
                  />
                  <Picker.Item label="Somalia" value="Somalia" />
                  <Picker.Item label="South Africa" value="South Africa" />
                  <Picker.Item label="South Sudan" value="South Sudan" />
                  <Picker.Item label="Spain" value="Spain" />
                  <Picker.Item label="Sri Lanka" value="Sri Lanka" />
                  <Picker.Item label="Sudan" value="Sudan" />
                  <Picker.Item label="Suriname" value="Suriname" />
                  <Picker.Item label="Sweden" value="Sweden" />
                  <Picker.Item label="Switzerland" value="Switzerland" />
                  <Picker.Item
                    label="Syrian Arab Republic"
                    value="Syrian Arab Republic"
                  />
                  <Picker.Item label="Taiwan" value="Taiwan" />
                  <Picker.Item label="Tajikistan" value="Tajikistan" />
                  <Picker.Item label="Thailand" value="Thailand" />
                  <Picker.Item label="Timor-Leste" value="Timor-Leste" />
                  <Picker.Item label="Togo" value="Togo" />
                  <Picker.Item label="Tokelau" value="Tokelau" />
                  <Picker.Item label="Tonga" value="Tonga" />
                  <Picker.Item
                    label="Trinidad and Tobago"
                    value="Trinidad and Tobago"
                  />
                  <Picker.Item label="Tunisia" value="Tunisia" />
                  <Picker.Item label="Turkey" value="Turkey" />
                  <Picker.Item label="Turkmenistan" value="Turkmenistan" />
                  <Picker.Item label="Tavalu" value="Tavalu" />
                  <Picker.Item label="Uganda" value="Uganda" />
                  <Picker.Item label="Ukraine" value="Ukraine" />
                  <Picker.Item
                    label="United Arab Empirates"
                    value="United Arab Empirates"
                  />
                  <Picker.Item label="United Kingdom" value="United Kingdom" />
                  <Picker.Item
                    label="United Republic of Tanzania"
                    value="United Republic of Tanzania"
                  />
                  <Picker.Item
                    label="United States of America"
                    value="United States of America"
                  />
                  <Picker.Item label="Uruguay" value="Uruguay" />
                  <Picker.Item label="Uzbekistan" value="Uzbekistan" />
                  <Picker.Item label="Vanuatu" value="Vanuatu" />
                  <Picker.Item label="Venezuela" value="Venezuela" />
                  <Picker.Item label="Viet Nam" value="Viet Nam" />
                  <Picker.Item label="Yemen" value="Yemen" />
                  <Picker.Item label="Zambia" value="Zambia" />
                  <Picker.Item label="Zimbabwe" value="Zimbabwe" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>
              <TextInput style={{ padding: 3 }} placeholder="City" />
            </View>
            <Text
              style={{ marginTop: 7, width: "100%", borderBottomWidth: 0.5 }}
            >
              Contact Information
            </Text>
            <View
              style={{
                marginTop: 2,
                flexDirection: "column",
                width: "100%"
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
                <TextInput
                  style={{ padding: 3 }}
                  placeholder="Phone Number (Required)"
                />
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
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <Button title="Save" />
            </View>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
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
    alignItems: "center",
    backgroundColor: "#e2deef"
  },
  profileImage: {
    width: 75,
    height: 75,
    resizeMode: "contain"
  }
});

export default createStackNavigator({
  EditProfile: {
    screen: EditProfile
  }
});
