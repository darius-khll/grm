import { observable } from "mobx";

class NotificationStore {
  @observable
  respondExpanded = true;
  @observable
  waitingExpanded = true;
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
  responsingList = [
    {
      key: "James",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Joel",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "John",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Jillian",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Jimmy",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Julie",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    }
  ];
  @observable
  waitingList = [
    {
      key: "James",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Joel",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "John",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Jillian",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Jimmy",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Julie",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    }
  ];
}

const notificationStore = new NotificationStore();

export default notificationStore;
