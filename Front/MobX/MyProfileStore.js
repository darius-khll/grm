import { computed, observable } from "mobx";

class MyProfileStore {
  @observable
  expanded = false;
  @observable
  isModalImageView = false;
  @observable
  images = [
    {
      source: require("../RES/sampleprofileimage.jpg"),
      title: "Paris",
      width: 806,
      height: 720
    }
  ];
  @observable
  collapseText = "";
  @observable
  myProfileText = "";
  @observable
  messagesText = "";
  @observable
  contactsText = "";
  @observable
  shopText = "";
  @observable
  settingText = "";
  @observable
  aboutText = "";
  @observable
  collapseIcon = require("../RES/expand1.png");
  @observable
  myProfileIcon = require("../RES/profile1.png");
  @observable
  messagesIcon = require("../RES/message1.png");
  @observable
  contactsIcon = require("../RES/contacts1.png");
  @observable
  shopIcon = require("../RES/shop1.png");
  @observable
  settingIcon = require("../RES/setting1.png");
  @observable
  aboutIcon = require("../RES/about1.png");
  @observable
  bio = "";
  @observable
  name = "";
  @observable
  age = 0;
  @observable
  gender = "";
  @observable
  id = "";
  @observable
  daysRemaining = 0;
  @observable
  country = "";
  @observable
  city = "";
  @observable
  phoneNumber = "";
  @observable
  email = "";
  @observable
  tags = [];
  @computed
  get tags() {
    return this.tags.map(tag => `#${tag}   `);
  }
}

const myProfileStore = new MyProfileStore();

export default myProfileStore;
