import { observable } from "mobx";

class EditProfileStore {
  @observable
  isDateTimePickerVisible = false;
  @observable
  isCheckedEmail = false;
  @observable
  isCheckedPhone = false;
  @observable
  country = "";
  @observable
  data = [
    {
      label: "Man",
      size: 13
    },
    {
      label: "Woman",
      size: 13
    },
    {
      label: "Other",
      size: 13
    }
  ];
}

const editProfileStore = new EditProfileStore();
export default editProfileStore;
