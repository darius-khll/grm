import { observable, computed } from "mobx";

class ProfileStore {
  @observable
  expanded = false;
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
  age = "";
  @observable
  gender = "";
  @observable
  id = "";
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
  @observable
  addingStatus = "waiting";
  @observable
  buttonText = "";
  @computed
  get showTags() {
    return this.tags.map(tag => `#${tag}   `);
  }
}

const profileStore = new ProfileStore();

export default profileStore;
