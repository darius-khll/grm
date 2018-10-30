import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Modal,
  TouchableHighlight,
  Dimensions,
  Picker
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { observer } from "mobx-react";
import signInPageStore from "../MobX/SignInPageStore";
import Wallpaper from "../Components/Wallpaper";

const { width, height } = Dimensions.get("window");

@observer
class SignInPage extends Component {
  static navigationOptions = {
    header: null
  };

  setModalInvisible() {
    signInPageStore.modalVisible = false;
  }
  setModal2Invisible() {
    signInPageStore.modal2Visible = false;
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
              visible={signInPageStore.modalVisible}
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
                  <Text style={styles.modalHeader}>Help</Text>
                  <Text style={styles.modalBody}>
                    Choose your country and enter your phone number. You will
                    recieve a sms with a code to proceed. If you can't find your
                    country name here, chose 'Other' at the end of the list and
                    please notify us about that, in order for us to put your
                    country name and code number in our list.
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
            <Modal
              animationType="fade"
              transparent={true}
              visible={signInPageStore.modal2Visible}
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
                <View style={styles.modalView}>
                  <Wallpaper source={require("../RES/modalbackground.jpg")} />
                  <Text style={styles.modalHeader}>Proceed?</Text>
                  <Text style={styles.modalBody}>
                    Are You sure {signInPageStore.countryCode}{" "}
                    {signInPageStore.number} is your phone number?
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
                        this.setModal2Invisible();
                      }}
                      style={styles.modalTouchable}
                    >
                      <Text style={styles.modalButton}>NO</Text>
                    </TouchableHighlight>
                    <View style={{ width: "10%" }} />
                    <TouchableHighlight
                      onPress={() => {
                        this.setModal2Invisible();
                        this.props.navigation.navigate("CheckCode", {
                          code: signInPageStore.countryCode,
                          number: signInPageStore.number
                        });
                      }}
                      style={styles.modalTouchable}
                    >
                      <Text style={styles.modalButton}>YES</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            <Text style={styles.welcome}>Welcome to Rich Messenger!</Text>
            <Text style={styles.instructions}>
              Please Enter Your Phone Number To Get Started
            </Text>

            <Picker
              onValueChange={code => (signInPageStore.countryCode = code)}
              style={{ width: "58%", alignContent: "center" }}
              selectedValue={signInPageStore.countryCode}
            >
              <Picker.Item label="Afghanistan" value="+93" />
              <Picker.Item label="Albania" value="+355" />
              <Picker.Item label="Algeria" value="+213" />
              <Picker.Item label="Andorra" value="+376" />
              <Picker.Item label="Angola" value="+244" />
              <Picker.Item label="Antigua and Barbuda" value="+1" />
              <Picker.Item label="Argentina" value="+54" />
              <Picker.Item label="Armenia" value="+374" />
              <Picker.Item label="Australia" value="+61" />
              <Picker.Item label="Austria" value="+43" />
              <Picker.Item label="Azerbaijan" value="+994" />
              <Picker.Item label="Bahamas" value="+1" />
              <Picker.Item label="Bahrain" value="+973" />
              <Picker.Item label="Bangladesh" value="+880" />
              <Picker.Item label="Barbados" value="+1" />
              <Picker.Item label="Belarus" value="+375" />
              <Picker.Item label="Belgium" value="+32" />
              <Picker.Item label="Belize" value="+501" />
              <Picker.Item label="Benin" value="+229" />
              <Picker.Item label="Bhutan" value="+975" />
              <Picker.Item label="Bolivia" value="+591" />
              <Picker.Item label="Bosnia and Herzegovina" value="+387" />
              <Picker.Item label="Botswana" value="+267" />
              <Picker.Item label="Brazil" value="+55" />
              <Picker.Item label="Brunei Darussalam" value="+673" />
              <Picker.Item label="Bulgaria" value="+359" />
              <Picker.Item label="Burkina Faso" value="+226" />
              <Picker.Item label="Burundi" value="+257" />
              <Picker.Item label="Cape Verde" value="+238" />
              <Picker.Item label="Cambodia" value="+855" />
              <Picker.Item label="Cameroon" value="+237" />
              <Picker.Item label="Canada" value="+1" />
              <Picker.Item label="Central African Republic" value="+236" />
              <Picker.Item label="Chad" value="+235" />
              <Picker.Item label="Chile" value="+56" />
              <Picker.Item label="China" value="+86" />
              <Picker.Item label="Colombia" value="+57" />
              <Picker.Item label="Comoros" value="+269" />
              <Picker.Item label="Congo" value="+242" />
              <Picker.Item label="Cook Island" value="+682" />
              <Picker.Item label="Costa Rica" value="+506" />
              <Picker.Item label="Croatia" value="+385" />
              <Picker.Item label="Cuba" value="+53" />
              <Picker.Item label="Cyprus" value="+357" />
              <Picker.Item label="Czchia" value="+420" />
              <Picker.Item label="Côte d'Ivoire" value="+225" />
              <Picker.Item
                label="Democratic People's Republic of Korea"
                value="+850"
              />
              <Picker.Item
                label="Democratic Republic of the Congo"
                value="+243"
              />
              <Picker.Item label="Denmark" value="+45" />
              <Picker.Item label="Djibouti" value="+253" />
              <Picker.Item label="Dominica" value="+1" />
              <Picker.Item label="Dominican Republic" value="+1" />
              <Picker.Item label="Ecuador" value="+593" />
              <Picker.Item label="Egypt" value="+20" />
              <Picker.Item label="El Salvador" value="+503" />
              <Picker.Item label="Equatorial Guinea" value="+240" />
              <Picker.Item label="Eritrea" value="+291" />
              <Picker.Item label="Estonia" value="+372" />
              <Picker.Item label="Eswatini" value="+268" />
              <Picker.Item label="Ethiopia" value="+251" />
              <Picker.Item label="Faroe Islands" value="+298" />
              <Picker.Item label="Fiji" value="+679" />
              <Picker.Item label="Finland" value="+358" />
              <Picker.Item label="France" value="+33" />
              <Picker.Item label="Gabon" value="+241" />
              <Picker.Item label="Gambia" value="+220" />
              <Picker.Item label="Georgia" value="+995" />
              <Picker.Item label="Germany" value="+49" />
              <Picker.Item label="Ghana" value="+233" />
              <Picker.Item label="Greece" value="+30" />
              <Picker.Item label="Grenada" value="+1" />
              <Picker.Item label="Guatemala" value="+502" />
              <Picker.Item label="Guinea" value="+224" />
              <Picker.Item label="Guinea-Bissau" value="+245" />
              <Picker.Item label="Guyana" value="+592" />
              <Picker.Item label="Haiti" value="+509" />
              <Picker.Item label="Honduras" value="+504" />
              <Picker.Item label="Hong Kong" value="+852" />
              <Picker.Item label="Hungary" value="+36" />
              <Picker.Item label="Iceland" value="+354" />
              <Picker.Item label="India" value="+91" />
              <Picker.Item label="Indonesia" value="+62" />
              <Picker.Item label="Iran" value="+98" />
              <Picker.Item label="Iraq" value="+964" />
              <Picker.Item label="Ireland" value="+353" />
              <Picker.Item label="Israel" value="+972" />
              <Picker.Item label="Italy" value="+39" />
              <Picker.Item label="Jamaica" value="+1" />
              <Picker.Item label="Japan" value="+81" />
              <Picker.Item label="Jordan" value="+962" />
              <Picker.Item label="Kazakhstan" value="+7" />
              <Picker.Item label="Kenya" value="+254" />
              <Picker.Item label="Kiribati" value="+686" />
              <Picker.Item label="Kuwait" value="+965" />
              <Picker.Item label="Kyrgyzstan" value="+996" />
              <Picker.Item
                label="Lao People's Democratic Republic"
                value="+856"
              />
              <Picker.Item label="Latvia" value="+371" />
              <Picker.Item label="Lebanon" value="+961" />
              <Picker.Item label="Lesotho" value="+266" />
              <Picker.Item label="Liberia" value="+231" />
              <Picker.Item label="Libya" value="+218" />
              <Picker.Item label="Lithuania" value="+370" />
              <Picker.Item label="Luxembourg" value="+352" />
              <Picker.Item label="Macedonia" value="+389" />
              <Picker.Item label="Madagascar" value="+261" />
              <Picker.Item label="Malawi" value="+265" />
              <Picker.Item label="Malaysia" value="+60" />
              <Picker.Item label="Maldives" value="+960" />
              <Picker.Item label="Mali" value="+223" />
              <Picker.Item label="Malta" value="+356" />
              <Picker.Item label="Marshall Islands" value="+692" />
              <Picker.Item label="Mauritius" value="+596" />
              <Picker.Item label="Mexico" value="+52" />
              <Picker.Item label="Micronesia" value="+691" />
              <Picker.Item label="Monaco" value="377" />
              <Picker.Item label="Mongolla" value="+976" />
              <Picker.Item label="Montenegro" value="+382" />
              <Picker.Item label="Morocco" value="+212" />
              <Picker.Item label="Mozambique" value="+258" />
              <Picker.Item label="Myanmar" value="+95" />
              <Picker.Item label="Namibia" value="+264" />
              <Picker.Item label="Nauru" value="+674" />
              <Picker.Item label="Nepal" value="+977" />
              <Picker.Item label="Netherlands" value="+31" />
              <Picker.Item label="New Zealand" value="+64" />
              <Picker.Item label="Nicaragua" value="+505" />
              <Picker.Item label="Niger" value="+227" />
              <Picker.Item label="Nigeria" value="+234" />
              <Picker.Item label="Niue" value="+683" />
              <Picker.Item label="Norway" value="+47" />
              <Picker.Item label="Oman" value="+968" />
              <Picker.Item label="Pakistan" value="+92" />
              <Picker.Item label="Palau" value="+680" />
              <Picker.Item label="Panama" value="+507" />
              <Picker.Item label="Papua New Guinea" value="+675" />
              <Picker.Item label="Paraguay" value="+595" />
              <Picker.Item label="Peru" value="+51" />
              <Picker.Item label="Philippines" value="63" />
              <Picker.Item label="Poland" value="+48" />
              <Picker.Item label="Portugal" value="+351" />
              <Picker.Item label="Qatar" value="974" />
              <Picker.Item label="Republic of Korea" value="+82" />
              <Picker.Item label="Republic of Moldova" value="+373" />
              <Picker.Item label="Romania" value="+40" />
              <Picker.Item label="Russia" value="+7" />
              <Picker.Item label="Rwanda" value="+250" />
              <Picker.Item label="Saint Kitts and Nevis" value="+1" />
              <Picker.Item label="Saint Lucia" value="S+1" />
              <Picker.Item
                label="Saint Vincent and the Grenadines"
                value="+1"
              />
              <Picker.Item label="Samoa" value="+685" />
              <Picker.Item label="San Marino" value="+378" />
              <Picker.Item label="Sao Tome and Principe" value="+239" />
              <Picker.Item label="Saudi Arabia" value="+966" />
              <Picker.Item label="Senegal" value="+221" />
              <Picker.Item label="Serbia" value="+381" />
              <Picker.Item label="Seychelles" value="+248" />
              <Picker.Item label="Sierra Leone" value="+232" />
              <Picker.Item label="Singapore" value="+65" />
              <Picker.Item label="Slovakia" value="+421" />
              <Picker.Item label="Slovenia" value="+386" />
              <Picker.Item label="Solomon Islands" value="+677" />
              <Picker.Item label="Somalia" value="+252" />
              <Picker.Item label="South Africa" value="+27" />
              <Picker.Item label="South Sudan" value="+211" />
              <Picker.Item label="Spain" value="+34" />
              <Picker.Item label="Sri Lanka" value="+94" />
              <Picker.Item label="Sudan" value="+249" />
              <Picker.Item label="Suriname" value="+597" />
              <Picker.Item label="Sweden" value="+46" />
              <Picker.Item label="Switzerland" value="+41" />
              <Picker.Item label="Syrian Arab Republic" value="+963" />
              <Picker.Item label="Taiwan" value="+886" />
              <Picker.Item label="Tajikistan" value="+992" />
              <Picker.Item label="Thailand" value="+66" />
              <Picker.Item label="Timor-Leste" value="+670" />
              <Picker.Item label="Togo" value="+228" />
              <Picker.Item label="Tokelau" value="+690" />
              <Picker.Item label="Tonga" value="+676" />
              <Picker.Item label="Trinidad and Tobago" value="+1" />
              <Picker.Item label="Tunisia" value="+216" />
              <Picker.Item label="Turkey" value="+90" />
              <Picker.Item label="Turkmenistan" value="+993" />
              <Picker.Item label="Tavalu" value="+688" />
              <Picker.Item label="Uganda" value="+256" />
              <Picker.Item label="Ukraine" value="+380" />
              <Picker.Item label="United Arab Empirates" value="+971" />
              <Picker.Item label="United Kingdom" value="+44" />
              <Picker.Item label="United Republic of Tanzania" value="+255" />
              <Picker.Item label="United States of America" value="+1" />
              <Picker.Item label="Uruguay" value="+598" />
              <Picker.Item label="Uzbekistan" value="+998" />
              <Picker.Item label="Vanuatu" value="+678" />
              <Picker.Item label="Venezuela" value="+58" />
              <Picker.Item label="Viet Nam" value="+84" />
              <Picker.Item label="Yemen" value="+967" />
              <Picker.Item label="Zambia" value="+260" />
              <Picker.Item label="Zimbabwe" value="+255" />
              <Picker.Item label="Other" value="+" />
            </Picker>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>{signInPageStore.countryCode}</Text>
              <TextInput
                onChangeText={number => (signInPageStore.number = number)}
                textContentType="telephoneNumber"
                placeholder="Phone Number"
                style={styles.phoneText}
              >
                {signInPageStore.number}
              </TextInput>
              <TouchableHighlight
                onPress={() => (signInPageStore.modalVisible = true)}
              >
                <Image
                  style={styles.image}
                  source={require("../RES/help.png")}
                />
              </TouchableHighlight>
            </View>
            <TouchableHighlight
              onPress={() => (signInPageStore.modal2Visible = true)}
              style={styles.button}
            >
              <Text style={{ fontWeight: "bold" }}>START</Text>
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
    marginTop: width / 3.6,
    marginBottom: width / 3.6
  },
  instructions: {
    marginBottom: "5%"
  },
  phoneText: {
    textAlign: "center",
    borderBottomWidth: width / 180,
    padding: "1%",
    marginRight: "8%",
    marginLeft: "2%",
    marginBottom: "3%",
    borderRadius: 5
  },
  image: {
    width: width / 18,
    height: width / 18,
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
  },
  button: {
    marginTop: "7%",
    borderWidth: width / 180,
    borderRadius: 5,
    padding: "1%",
    paddingRight: "6%",
    paddingLeft: "6%"
  }
});

export default createStackNavigator({
  SignInPage: {
    screen: SignInPage
  }
});
