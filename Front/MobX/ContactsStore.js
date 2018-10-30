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
  isModalAdd = false;
  @observable
  isModalFound = false;
  @observable
  sections = [
    {
      title: "#",
      data: []
    },
    {
      title: "A",
      data: [
        {
          name: "Ali",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Arash",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "B",
      data: []
    },
    {
      title: "C",
      data: []
    },
    {
      title: "D",
      data: []
    },
    {
      title: "E",
      data: []
    },
    {
      title: "F",
      data: [
        {
          name: "Farid",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Farbod",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "G",
      data: []
    },
    {
      title: "H",
      data: []
    },
    {
      title: "I",
      data: []
    },
    {
      title: "J",
      data: [
        {
          name: "Jason",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Jili",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "K",
      data: []
    },
    {
      title: "L",
      data: []
    },
    {
      title: "M",
      data: []
    },
    {
      title: "N",
      data: []
    },
    {
      title: "O",
      data: []
    },
    {
      title: "P",
      data: []
    },
    {
      title: "Q",
      data: []
    },
    {
      title: "R",
      data: []
    },
    {
      title: "S",
      data: []
    },
    {
      title: "T",
      data: []
    },
    {
      title: "U",
      data: []
    },
    {
      title: "V",
      data: []
    },
    {
      title: "W",
      data: []
    },
    {
      title: "X",
      data: []
    },
    {
      title: "Y",
      data: [
        {
          name: "Yazdan",
          image: require("../RES/sampleprofileimage.jpg")
        },
        {
          name: "Yas",
          image: require("../RES/sampleprofileimage.jpg")
        }
      ]
    },
    {
      title: "Z",
      data: []
    },
    {
      title: "Others",
      data: []
    }
  ];
  @observable
  actions = [
    {
      text: "Add New Friend",
      icon: require("../RES/addnewcontact.png"),
      color: "black",
      name: "addNewContact",
      position: 2
    },
    {
      text: "Search",
      color: "black",
      icon: require("../RES/search.png"),
      name: "search",
      position: 1
    }
  ];
}

const contactsStore = new ContactsStore();

export default contactsStore;
