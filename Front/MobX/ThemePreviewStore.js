import { observable } from "mobx";

class ThemePreviewStore {
  @observable
  wallpaper = require("../RES/liverpool.jpg");
  @observable
  price = 100;
  @observable
  name = "Liverpool";
  @observable
  id;
  @observable
  headerTintColor = "white";
  @observable
  color = "red";
  @observable
  previews = {
    image1: require("../RES/liverpool3.jpg"),
    image2: require("../RES/liverpool3.jpg"),
    image3: require("../RES/liverpool3.jpg"),
    image4: require("../RES/liverpool3.jpg"),
    image5: require("../RES/liverpool3.jpg"),
    image6: require("../RES/liverpool3.jpg")
  };
  @observable
  statusColor = "#f22";
  @observable
  statusStyle = "dark-content";
}

const themePreviewStore = new ThemePreviewStore();

export default themePreviewStore;
