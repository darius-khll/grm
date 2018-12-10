import { observable } from "mobx";

class MainPageStore {
  @observable
  isShortcutAvailable;
  @observable
  longClickItemName = "";
  @observable
  longClickItemImage;
  @observable
  isModalLongClick = false;
  @observable
  flatList = [
    {
      key: "Devin",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Jackson",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
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
  flatListData = [
    {
      key: "Devin",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
    {
      key: "Jackson",
      image: require("../RES/sampleprofileimage.jpg"),
      lastMessage: "The last Message",
      date: "16:05"
    },
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

const mainPageStore = new MainPageStore();

export default mainPageStore;
