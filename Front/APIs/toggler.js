const toggler = function(store) {
  if (store.expanded) {
    store.collapseText = "Collapse";
    store.myProfileText = "Profile";
    store.messagesText = "Masseges";
    store.contactsText = "Contacts";
    store.shopText = "Shop";
    store.settingText = "Setting";
    store.aboutText = "About";
    store.collapseIcon = "";
    store.myProfileIcon = "";
    store.messagesIcon = "";
    store.contactsIcon = "";
    store.shopIcon = "";
    store.settingIcon = "";
    store.aboutIcon = "";
  } else {
    store.collapseText = "";
    store.myProfileText = "";
    store.messagesText = "";
    store.contactsText = "";
    store.shopText = "";
    store.settingText = "";
    store.aboutText = "";
    store.collapseIcon = require("../RES/expand1.png");
    store.myProfileIcon = require("../RES/profile1.png");
    store.messagesIcon = require("../RES/message1.png");
    store.contactsIcon = require("../RES/contacts1.png");
    store.shopIcon = require("../RES/shop1.png");
    store.settingIcon = require("../RES/setting1.png");
    store.aboutIcon = require("../RES/about1.png");
  }
};

export default toggler;
