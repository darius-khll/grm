import { computed, observable } from "mobx";

class MyProfileStore {
  @observable
  isShortcutAvailable;
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
