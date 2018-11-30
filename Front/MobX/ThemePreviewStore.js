import { observable } from "mobx";

class ThemePreviewStore {
  @observable
  index = 0;
  @observable
  isModalShowImages = false;
  @observable
  images = [
    {
      source: require("../RES/liverpool3.jpg"),
      title: "Paris",
      width: 806,
      height: 1500
    },
    {
      source: require("../RES/liverpool3.jpg"),
      title: "Paris",
      width: 806,
      height: 1500
    },
    {
      source: require("../RES/liverpool3.jpg"),
      title: "Paris",
      width: 806,
      height: 1500
    },
    {
      source: require("../RES/liverpool3.jpg"),
      title: "Paris",
      width: 806,
      height: 1500
    },
    {
      source: require("../RES/liverpool3.jpg"),
      title: "Paris",
      width: 806,
      height: 1500
    },
    {
      source: require("../RES/liverpool3.jpg"),
      title: "Paris",
      width: 806,
      height: 1500
    }
  ];
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
  previews = [
    {
      image: require("../RES/liverpool3.jpg")
    },
    {
      image: require("../RES/liverpool3.jpg")
    },
    {
      image: require("../RES/liverpool3.jpg")
    },
    {
      image: require("../RES/liverpool3.jpg")
    },
    {
      image: require("../RES/liverpool3.jpg")
    },
    {
      image: require("../RES/liverpool3.jpg")
    }
  ];
  @observable
  statusColor = "#f22";
  @observable
  statusStyle = "dark-content";
}

const themePreviewStore = new ThemePreviewStore();

export default themePreviewStore;
