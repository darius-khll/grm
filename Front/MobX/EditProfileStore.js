import { observable } from "mobx";

class EditProfileStore {
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
}

const editProfileStore = new EditProfileStore();
export default editProfileStore;
