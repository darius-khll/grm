import { computed, observable } from "mobx";

class EditProfileStore {
  @observable
  image = null;
  @observable
  isModalChangeImage = false;
  @observable
  images = [
    {
      source: null,
      title: "Profile Image",
      width: 700,
      height: 700
    }
  ];
  @observable
  isModalImageView = false;
  @observable
  isModalRemoveImage = false;
  @observable
  isDateTimePickerVisible = false;
  @observable
  isCheckedEmail = false;
  @observable
  isCheckedPhone = false;
  @observable
  name = "";
  @observable
  isModalWrong = false;
  @observable
  isModalTag = false;
  @observable
  bio = "";
  @observable
  id = "";
  @observable
  city = "";
  @observable
  email = "";
  @observable
  phoneNumber = "";
  @observable
  country = "";
  @computed
  get getTags() {
    return this.Tags.map(tag => `#${tag}   `);
  }
  @observable
  data = [
    {
      label: "Man",
      size: 13,
      selected: true
    },
    {
      label: "Woman",
      size: 13,
      selected: false
    },
    {
      label: "Other",
      size: 13,
      selected: false
    }
  ];
  @observable
  isModalAddTag = false;
  @observable
  isModalRemoveTag = false;
  @observable
  Tags = [];
  @observable
  newTag = " ";
}

const editProfileStore = new EditProfileStore();
export default editProfileStore;
