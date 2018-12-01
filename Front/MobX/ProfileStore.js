import { observable, computed } from "mobx";

class ProfileStore {
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
  isDrawerOpen = false;
  @observable
  isShortcutAvailable = true;
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
  addingStatus = "responsing";
  @observable
  buttonText = "";
  @observable
  secondButtonText = "";
  @observable
  isModalRemove = false;
  @computed
  get showTags() {
    return this.tags.map(tag => `#${tag}   `);
  }
}

const profileStore = new ProfileStore();

export default profileStore;
