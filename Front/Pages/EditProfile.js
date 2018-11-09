import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  Modal,
  View,
  TouchableHighlight,
  Picker,
  Dimensions,
  Image,
  TextInput
} from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import RadioGroup from "react-native-radio-buttons-group";
import DateTimePicker from "react-native-modal-datetime-picker";
import CheckBox from "react-native-check-box";
import editProfileStore from "../MobX/EditProfileStore";
import { observer } from "mobx-react";
import Wallpaper from "../Components/Wallpaper";
import Axios from "axios";

const { width } = Dimensions.get("window");
const requester = Axios.create({
  baseURL: "https://localhost:3000/api/editprofile"
});

@observer
class EditProfile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Edit Profile",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };
  state = {
    date: new Date()
  };

  componentWillMount() {
    requester
      .get("/get", {
        params: {
          uniqueId: "_id"
        }
      })
      .then(response => {
        if (response.status === 200) {
          editProfileStore.bio = response.data.bio;
          editProfileStore.name = response.data.name;
          editProfileStore.id = response.data.id;
          editProfileStore.city = response.data.city;
          editProfileStore.email = response.data.email;
          editProfileStore.phoneNumber = response.data.phoneNumber;
          editProfileStore.isCheckedPhone = response.data.showPhoneNumber;
          editProfileStore.isCheckedEmail = response.data.showEmail;
          editProfileStore.country = response.data.country;
          editProfileStore.Tags = response.data.tags;
          editProfileStore.data.find(gender => {
            if (gender.lable === response.data.gender) {
              gender.selected = true;
            } else gender.selected = false;
          });
          this.setState({ date: response.data.birthDate });
        }
      });
  }
  hideDateTimePicker = () => (editProfileStore.isDateTimePickerVisible = false);
  setModalInvisible = () => (editProfileStore.isModalWrong = false);
  setModalTagsInvisible = () => (editProfileStore.isModalTag = false);
  setModalAddTagInvisible = () => (editProfileStore.isModalAddTag = false);
  setModalRemoveTagInvisible = () =>
    (editProfileStore.isModalRemoveTag = false);
  handleDatePicked = date => {
    this.setState({
      date
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Wallpaper source={require("../RES/background.jpg")} />
        <ScrollView style={{ width: "100%" }}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={editProfileStore.isModalRemoveTag}
            onRequestClose={() => {
              this.setModalRemoveTagInvisible();
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
                <Text style={styles.modalHeader}>Remove a Tag</Text>
                <Text style={styles.modalBody}>
                  Type the TAG you want to remove.
                </Text>
                <TextInput
                  placeholder="TAG to remove"
                  style={styles.modalInput}
                  onChangeText={text => (editProfileStore.newTag = text)}
                  placeholderTextColor="#444"
                />
                <View
                  style={{
                    marginTop: "10%",
                    alignItems: "center",
                    flexDirection: "row"
                  }}
                >
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalRemoveTagInvisible();
                    }}
                    style={styles.modalTouchable}
                  >
                    <Text style={styles.modalButton}>Cancle</Text>
                  </TouchableHighlight>
                  <View style={{ width: "10%" }} />
                  <TouchableHighlight
                    onPress={() => {
                      if (
                        editProfileStore.Tags.includes(editProfileStore.newTag)
                      ) {
                        editProfileStore.Tags.pop(editProfileStore.newTag);
                      }
                      this.setModalRemoveTagInvisible();
                    }}
                    style={styles.modalTouchable}
                  >
                    <Text style={styles.modalButton}>Remove</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="fade"
            transparent={true}
            visible={editProfileStore.isModalAddTag}
            onRequestClose={() => {
              this.setModalAddTagInvisible();
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
                <Text style={styles.modalHeader}>Enter New TAG</Text>
                <Text style={styles.modalBody}>
                  Space is not allowed. There is no need to enter #. We'll add
                  them automatically. :)
                </Text>
                <TextInput
                  placeholder="New TAG"
                  style={styles.modalInput}
                  onChangeText={text => (editProfileStore.newTag = text)}
                  placeholderTextColor="#444"
                />
                <View
                  style={{
                    marginTop: "10%",
                    alignItems: "center",
                    flexDirection: "row"
                  }}
                >
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalAddTagInvisible();
                    }}
                    style={styles.modalTouchable}
                  >
                    <Text style={styles.modalButton}>Cancle</Text>
                  </TouchableHighlight>
                  <View style={{ width: "10%" }} />
                  <TouchableHighlight
                    onPress={() => {
                      if (
                        !editProfileStore.Tags.includes(
                          editProfileStore.newTag
                        ) &&
                        !editProfileStore.newTag.includes(" ")
                      ) {
                        editProfileStore.Tags.push(editProfileStore.newTag);
                      }
                      this.setModalAddTagInvisible();
                    }}
                    style={styles.modalTouchable}
                  >
                    <Text style={styles.modalButton}>Add</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="fade"
            transparent={true}
            visible={editProfileStore.isModalTag}
            onRequestClose={() => {
              this.setModalTagsInvisible();
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
                <Text style={styles.modalHeader}>What is a TAG?</Text>
                <Text style={styles.modalBody}>
                  Tags will help others to find you. if somebody search a tag
                  and it matches one of your tags, your profile will be shown.
                  So you can Enter your Hobbies, favourites and others here and
                  help everyone else to find you.
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
                      this.setModalTagsInvisible();
                    }}
                    style={styles.modalTouchable}
                  >
                    <Text style={styles.modalButton}>OK</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="fade"
            transparent={true}
            visible={editProfileStore.isModalWrong}
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
                <Text style={styles.modalHeader}>Action Incomplete</Text>
                <Text style={styles.modalBody}>
                  Something went wrong. Please try again later.
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
                    style={styles.modalTouchable}
                  >
                    <Text style={styles.modalButton}>OK</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
          <View style={{ padding: "5%", paddingTop: "3%" }}>
            <Text
              style={{
                width: "100%",
                borderBottomWidth: width / 720,
                borderRadius: 5
              }}
            >
              Profile Picture
            </Text>
            <View
              style={{
                marginTop: width / 72,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <TouchableHighlight onPress={() => {}} style={styles.button}>
                <Text style={{ fontWeight: "bold" }}>
                  Change Profile Picture
                </Text>
              </TouchableHighlight>
              <Image
                style={styles.profileImage}
                source={this.props.navigation.getParam(
                  "image",
                  require("../RES/anonymous.png")
                )}
              />
            </View>
            <Text
              style={{
                marginTop: width / 51.4,
                width: "100%",
                borderBottomWidth: width / 720
              }}
            >
              Bio
            </Text>
            <View
              style={{
                marginTop: width / 180,
                flexDirection: "column",
                width: "100%"
              }}
            >
              <TextInput
                style={{ padding: width / 120 }}
                placeholder="Edit Your Bio"
              >
                {editProfileStore.bio}
              </TextInput>
            </View>
            <Text
              style={{
                marginTop: width / 51.4,
                width: "100%",
                borderBottomWidth: width / 720
              }}
            >
              General Information
            </Text>
            <View
              style={{
                marginTop: width / 180,
                flexDirection: "column",
                width: "100%"
              }}
            >
              <TextInput
                style={{ padding: width / 120 }}
                placeholder="Name (Required)"
              >
                {editProfileStore.name}
              </TextInput>
              <TextInput style={{ padding: width / 120 }} placeholder="ID" />
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
                  radioButtons={editProfileStore.data}
                  onPress={data => (editProfileStore.data = data)}
                />
              </View>
              <View
                style={{
                  marginTop: width / 120,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Text>Birth Date:</Text>
                <Text>{this.state.date.toDateString()}</Text>
                <TouchableHighlight
                  onPress={() =>
                    (editProfileStore.isDateTimePickerVisible = true)
                  }
                  style={styles.button}
                >
                  <Text style={{ fontWeight: "bold" }}>Pick a Date</Text>
                </TouchableHighlight>
              </View>
            </View>
            <Text
              style={{
                marginTop: width / 51.4,
                width: "100%",
                borderBottomWidth: width / 720,
                borderRadius: 5
              }}
            >
              Location Information
            </Text>
            <View
              style={{
                marginTop: width / 180,
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
                  onValueChange={country =>
                    (editProfileStore.country = country)
                  }
                  selectedValue={editProfileStore.country}
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
              <TextInput style={{ padding: width / 120 }} placeholder="City">
                {editProfileStore.city}
              </TextInput>
            </View>
            <Text
              style={{
                marginTop: width / 51.4,
                width: "100%",
                borderBottomWidth: width / 720,
                borderRadius: 5
              }}
            >
              Contact Information
            </Text>
            <View
              style={{
                marginTop: width / 180,
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
                <TextInput style={{ padding: width / 120 }} placeholder="Email">
                  {editProfileStore.email}
                </TextInput>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Show</Text>
                  <CheckBox
                    onClick={() =>
                      (editProfileStore.isCheckedEmail = !editProfileStore.isCheckedEmail)
                    }
                    isChecked={editProfileStore.isCheckedEmail}
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
                  style={{ padding: width / 120 }}
                  placeholder="Phone Number (Required)"
                >
                  {editProfileStore.phoneNumber}
                </TextInput>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>Show</Text>
                  <CheckBox
                    onClick={() =>
                      (editProfileStore.isCheckedPhone = !editProfileStore.isCheckedPhone)
                    }
                    isChecked={editProfileStore.isCheckedPhone}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                borderBottomWidth: width / 720,
                borderRadius: 5,
                marginTop: width / 51.4
              }}
            >
              <Text>Edit Tags</Text>
              <TouchableHighlight
                onPress={() => (editProfileStore.isModalTag = true)}
              >
                <Image
                  style={styles.image}
                  source={require("../RES/help.png")}
                />
              </TouchableHighlight>
            </View>
            <Text style={{ marginTop: "3%", marginBottom: "5%" }}>
              {editProfileStore.getTags}
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: "5%",
                alignItems: "center"
              }}
            >
              <TouchableHighlight
                onPress={() => (editProfileStore.isModalAddTag = true)}
                style={styles.button}
              >
                <Text style={{ fontWeight: "bold" }}>Add a new TAG</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => (editProfileStore.isModalRemoveTag = true)}
                style={styles.button}
              >
                <Text style={{ fontWeight: "bold" }}>Remove a TAG</Text>
              </TouchableHighlight>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: width / 72,
                marginBottom: "7%",
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <TouchableHighlight
                onPress={() => {
                  requester
                    .post("/save", {
                      uniqueId: "_id",
                      bio: editProfileStore.bio,
                      name: editProfileStore.name,
                      id: editProfileStore.id,
                      city: editProfileStore.city,
                      email: editProfileStore.email,
                      phoneNumber: editProfileStore.phoneNumber,
                      showPhoneNumber: editProfileStore.isCheckedPhone,
                      showEmail: editProfileStore.isCheckedEmail,
                      country: editProfileStore.country,
                      tags: editProfileStore.Tags,
                      gender: editProfileStore.data.find(gender => {
                        return gender.selected === true;
                      }),
                      birthDate: this.state.date
                    })
                    .catch(e => {
                      editProfileStore.isModalWrong = true;
                    });
                }}
                style={styles.button}
              >
                <Text style={{ fontWeight: "bold" }}>Save</Text>
              </TouchableHighlight>
            </View>
            <DateTimePicker
              isVisible={editProfileStore.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
              date={this.state.date}
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
    width: width / 5,
    height: width / 5,
    resizeMode: "contain"
  },
  button: {
    borderWidth: width / 180,
    borderRadius: 5,
    padding: "1%",
    paddingRight: "6%",
    paddingLeft: "6%"
  },
  image: {
    width: width / 30,
    height: width / 30,
    marginLeft: "15%",
    resizeMode: "contain"
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
    textAlign: "center",
    marginTop: "2%"
  },
  modalInput: {
    borderBottomWidth: width / 720,
    color: "#666",
    padding: "2%",
    textAlign: "center"
  },
  modalTouchable: {
    borderWidth: width / 720,
    borderColor: "white",
    borderRadius: width / 72,
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
  }
});

export default createStackNavigator({
  EditProfile: {
    screen: EditProfile
  }
});
