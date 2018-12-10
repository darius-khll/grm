import { observable } from "mobx";

class ShopStore {
  @observable
  isShortcutAvailable;
  @observable
  days = [
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
  stickers = [
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
  themes = [
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
}

const shopStore = new ShopStore();

export default shopStore;
