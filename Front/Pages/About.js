import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import { HeaderBackButton, createStackNavigator } from "react-navigation";
import SideBar from "../Components/SideBar";
import Drawer from "react-native-drawer";
import aboutStore from "../MobX/AboutStore";
import Wallpaper from "../Components/Wallpaper";
import MyControlPanel from "../Components/ControlPanel";
import { observer } from "mobx-react";
import ControlPanel from "../Components/ControlPanel";

let { width } = Dimensions.get("window");
const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0
  }
};

@observer
class About extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "About",
      headerStyle: { backgroundColor: "#2196f3" },
      headerTintColor: "#000",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    };
  };

  openDrawer() {
    this.drawer.open();
  }

  render() {
    return (
      <Drawer
        type="overlay"
        content={
          <ControlPanel
            closeDrawer={() => {
              this.drawer.close();
            }}
          />
        }
        openDrawerOffset={0.15}
        ref={c => (this.drawer = c)}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <SideBar
              toggle={this.openDrawer.bind(this)}
              width={width / 8}
              imageStyle={styles.imageStyle}
              textStyle={styles.textStyle}
              store={aboutStore}
            />
            <View style={{ width: (7 * width) / 8 }}>
              <Wallpaper source={require("../RES/background.jpg")} />
              <Text style={styles.welcome}>Welcome to Rich Messenger</Text>
              <Text style={styles.version}>Rich Messenger Version 1.0.0 </Text>
              <Text style={styles.creators}>
                Created By Ali Khalili & Arash Heidary
              </Text>
              <Text style={{ marginBottom: 2, textAlign: "center" }}>
                Website: www.richmessenger.com
              </Text>
              <Text style={{ marginBottom: 30, textAlign: "center" }}>
                E-Mail: info@richmessenger.com
              </Text>
              <Text style={{ textAlign: "center" }}>©2018</Text>
            </View>
          </View>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: (0.85 * width) / 8,
    height: (0.85 * width) / 8,
    resizeMode: "contain",
    margin: "3%"
  },
  welcome: {
    fontSize: width / 14.4,
    textAlign: "center",
    marginTop: width / 20,
    marginBottom: width / 30
  },
  version: {
    textAlign: "center",
    marginBottom: width / 2
  },
  creators: {
    textAlign: "center",
    marginBottom: width / 24
  },
  textStyle: {
    fontSize: width / 18,
    fontWeight: "bold",
    marginTop: "3%"
  }
});

export default createStackNavigator({
  About: {
    screen: About
  }
});
