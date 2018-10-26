import { observable } from "mobx";

class ContactsStore {
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
  modal1Visible = false;
  @observable
  modal2Visible = false;
}

const contactsStore = new ContactsStore();

export default contactsStore;
